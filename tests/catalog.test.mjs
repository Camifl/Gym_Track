import assert from 'node:assert/strict';
import test from 'node:test';

import { exercises } from '../data/ejercicios.ts';
import { muscleGroups } from '../data/labels.ts';
import { plan } from '../data/plan.ts';
import { findCatalogExercise, getAssignedDays, getCatalogGroup } from '../utils/catalog.ts';
import { filterExercisesByName } from '../utils/texto.ts';

test('the catalog exposes all eleven groups in catalog order', () => {
  assert.deepEqual(muscleGroups, [
    'pierna', 'pecho', 'triceps', 'espalda', 'hombro', 'biceps',
    'abdomen', 'cadera', 'gluteo', 'lumbar', 'antebrazo',
  ]);
});

test('partial search matches four exercise names across accents, case, and outer spaces', () => {
  for (const query of ['extension', '  EXTENSIÓN  ']) {
    assert.deepEqual(filterExercisesByName(exercises, query).map(({ id }) => id), [
      'pie-02', 'tri-01', 'tri-02', 'lum-02',
    ]);
  }
});

test('blank queries, group names alone, and unmatched terms yield no exercise matches', () => {
  for (const query of ['', '   ', 'triceps', 'sin-coincidencias']) {
    assert.deepEqual(filterExercisesByName([
      { id: 'ext-01', name: 'Extensión', group: 'triceps', series: 4, repetitions: 12 },
    ], query), []);
  }
  assert.deepEqual(filterExercisesByName(exercises, 'sin-coincidencias'), []);
});

test('a catalog group lists only its exercises in their original order', () => {
  const result = getCatalogGroup('pecho', muscleGroups, exercises);
  assert.equal(result?.group, 'pecho');
  assert.deepEqual(result?.exercises.map(({ id }) => id), [
    'pec-01', 'pec-02', 'pec-03', 'pec-04',
  ]);
});

test('an empty valid group is distinct from invalid route parameters', () => {
  assert.deepEqual(getCatalogGroup('pecho', muscleGroups, []), { group: 'pecho', exercises: [] });
  for (const invalid of ['inventado', 'constructor', '', ['pecho'], undefined]) {
    assert.equal(getCatalogGroup(invalid, muscleGroups, exercises), undefined);
  }
});

test('exercise detail resolves the exact catalog ID and rejects invalid parameters', () => {
  assert.equal(findCatalogExercise('pec-01', exercises)?.name, 'Press banca plano');
  for (const invalid of ['pec-99', '', ['pec-01'], undefined]) {
    assert.equal(findCatalogExercise(invalid, exercises), undefined);
  }
});

test('assigned days retain the order and colors of the weekly plan', () => {
  assert.deepEqual(getAssignedDays('pec-01', plan).map(({ day, color }) => [day, color]), [
    ['lunes', '#22C3E6'], ['viernes', '#22C3E6'],
  ]);
  assert.deepEqual(getAssignedDays('pie-02', plan).map(({ day, color }) => [day, color]), [
    ['martes', '#F59E0B'], ['jueves', '#EC4899'],
  ]);
  assert.deepEqual(getAssignedDays('pec-03', plan), []);
});
