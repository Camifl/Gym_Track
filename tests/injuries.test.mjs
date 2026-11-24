import assert from 'node:assert/strict';
import test from 'node:test';

import { exercises } from '../data/ejercicios.ts';
import { initialMember } from '../data/socio.ts';
import { hasInjuryWarning, toggleInjuryGroup } from '../utils/injuries.ts';

test('toggling an injury group changes just that selection without mutating the input', () => {
  const original = Object.freeze(['pierna', 'lumbar']);
  const selected = toggleInjuryGroup(original, 'pecho');
  assert.deepEqual(selected, ['pierna', 'lumbar', 'pecho']);
  assert.deepEqual(toggleInjuryGroup(selected, 'pecho'), original);
  assert.deepEqual(toggleInjuryGroup(original, 'pierna'), ['lumbar']);
  assert.deepEqual(toggleInjuryGroup(['lumbar'], 'lumbar'), []);
  assert.deepEqual(original, ['pierna', 'lumbar']);
});

test('the sample injuries flag the corresponding exercises throughout the catalog', () => {
  const flagged = exercises.filter(exercise => hasInjuryWarning(initialMember.injuries, exercise.group));
  assert.deepEqual(flagged.map(exercise => exercise.id), [
    'pie-01', 'pie-02', 'pie-03', 'pie-04', 'pie-05', 'lum-01', 'lum-02', 'lum-03',
  ]);
});

test('warnings follow the current selection and disappear when all lesions are removed', () => {
  const next = toggleInjuryGroup(toggleInjuryGroup(initialMember.injuries, 'pierna'), 'pecho');
  assert.equal(hasInjuryWarning(next, 'pierna'), false);
  assert.equal(hasInjuryWarning(next, 'pecho'), true);
  assert.equal(hasInjuryWarning(next, 'lumbar'), true);
  assert.ok(exercises.every(exercise => !hasInjuryWarning([], exercise.group)));
});
