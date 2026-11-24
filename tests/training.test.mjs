import assert from 'node:assert/strict';
import test from 'node:test';

import { exercises } from '../data/ejercicios.ts';
import { plan } from '../data/plan.ts';
import {
  findPlannedDay,
  getProgressPercentage,
  getSessionProgress,
  getTodayWeekday,
  groupDayExercises,
} from '../utils/training.ts';

test('the weekly plan is ordered from Monday through Saturday', () => {
  assert.deepEqual(plan.map(({ day }) => day), [
    'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado',
  ]);
});

test('local dates map to planned weekdays and Sunday is a rest day', () => {
  assert.equal(getTodayWeekday(new Date(2026, 10, 23, 23, 30)), 'lunes');
  assert.equal(getTodayWeekday(new Date(2026, 10, 28, 23, 30)), 'sabado');
  assert.equal(getTodayWeekday(new Date(2026, 10, 29, 0, 30)), null);
});

test('only weekday IDs in the plan resolve to a session', () => {
  assert.equal(findPlannedDay('lunes', plan)?.day, 'lunes');
  for (const invalid of ['inventado', 'domingo', '', undefined, ['lunes', 'martes']]) {
    assert.equal(findPlannedDay(invalid, plan), undefined);
  }
});

test('only Tuesday and Saturday have 20 minutes of separate cardio', () => {
  assert.deepEqual(
    plan.filter(({ cardioMin }) => cardioMin !== undefined).map(({ day, cardioMin }) => [day, cardioMin]),
    [['martes', 20], ['sabado', 20]],
  );
});

test('grouping keeps the order of first appearance and the order within each group', () => {
  const groups = groupDayExercises(['hom-03', 'pec-02', 'hom-02'], exercises);

  assert.deepEqual(groups.map(({ group, exercises: items }) => [group, items.map(({ id }) => id)]), [
    ['hombro', ['hom-03', 'hom-02']],
    ['pecho', ['pec-02']],
  ]);
});

test('only known, unique exercises contribute to the session and its progress', () => {
  const groups = groupDayExercises(['unknown', 'pec-01', 'pec-01', 'pie-01'], exercises);

  assert.deepEqual(groups.flatMap(({ exercises: items }) => items.map(({ id }) => id)), ['pec-01', 'pie-01']);
  assert.deepEqual(getSessionProgress(groups, ['pec-01', 'pec-01', 'unknown', 'hom-01']), { value: 1, total: 2 });
});

test('Monday progress rounds three of seven to 43 percent and two of seven to 29 percent', () => {
  const monday = findPlannedDay('lunes', plan);
  assert.ok(monday);
  const groups = groupDayExercises(monday.exercises, exercises);
  const threeDone = getSessionProgress(groups, ['pec-01', 'esp-04', 'hom-01']);
  const twoDone = getSessionProgress(groups, ['pec-01', 'esp-04']);

  assert.deepEqual(threeDone, { value: 3, total: 7 });
  assert.equal(getProgressPercentage(threeDone.value, threeDone.total), 43);
  assert.deepEqual(twoDone, { value: 2, total: 7 });
  assert.equal(getProgressPercentage(twoDone.value, twoDone.total), 29);
});

test('progress starts at zero, reaches 100 percent, and handles an empty session', () => {
  const groups = groupDayExercises(['pec-01', 'pie-01'], exercises);
  const unchecked = getSessionProgress(groups, []);
  const checked = getSessionProgress(groups, ['pec-01', 'pie-01']);
  const empty = getSessionProgress(groupDayExercises(['unknown'], exercises), ['unknown']);

  assert.equal(getProgressPercentage(unchecked.value, unchecked.total), 0);
  assert.equal(getProgressPercentage(checked.value, checked.total), 100);
  assert.deepEqual(empty, { value: 0, total: 0 });
  assert.equal(getProgressPercentage(empty.value, empty.total), 0);
});
