import assert from 'node:assert/strict';
import test from 'node:test';

import { validateProfile } from '../utils/profile.ts';

const draft = {
  name: '  Ana Gómez  ',
  age: '42',
  goal: '  Ganar fuerza ',
  notes: ' Primera nota\r\n\n Segunda nota  ',
  injuries: ['pierna', 'lumbar'],
};

test('profile requires a nonblank name and a nonblank age', () => {
  const result = validateProfile({ ...draft, name: '   ', age: '' });
  assert.equal(result.ok, false);
  assert.deepEqual(Object.keys(result.errors), ['name', 'age']);
});

test('profile accepts ages 14 through 90 and rejects fractional or malformed ages', () => {
  for (const age of [' 14 ', '90']) {
    const result = validateProfile({ ...draft, age });
    assert.equal(result.ok, true);
    assert.equal(result.value.age, Number(age));
  }
  for (const age of ['13', '91', '14.5', '14,5', '1e1', '0x2a', '42 años']) {
    const result = validateProfile({ ...draft, age });
    assert.equal(result.ok, false, age);
    assert.ok(result.errors.age, age);
  }
});

test('profile trims text and saves one nonblank observation per line', () => {
  assert.deepEqual(validateProfile(draft), {
    ok: true,
    value: {
      name: 'Ana Gómez',
      age: 42,
      goal: 'Ganar fuerza',
      notes: ['Primera nota', 'Segunda nota'],
      injuries: ['pierna', 'lumbar'],
    },
  });
  assert.deepEqual(validateProfile({ ...draft, goal: ' ', notes: '\n  ' }), {
    ok: true,
    value: { name: 'Ana Gómez', age: 42, goal: '', notes: [], injuries: ['pierna', 'lumbar'] },
  });
});

test('a valid profile saves unique injury groups and can remove all injuries', () => {
  const changed = ['pecho', 'lumbar', 'pecho'];
  assert.deepEqual(validateProfile({ ...draft, injuries: changed }).value.injuries, ['pecho', 'lumbar']);
  assert.deepEqual(validateProfile({ ...draft, injuries: [] }).value.injuries, []);
  assert.deepEqual(changed, ['pecho', 'lumbar', 'pecho']);
});

test('a rejected profile leaves the injury draft available for correction', () => {
  const changes = { ...draft, age: '13', injuries: ['pecho', 'lumbar'] };
  const rejected = validateProfile(changes);
  assert.equal(rejected.ok, false);
  assert.ok(rejected.errors.age);
  assert.equal('value' in rejected, false);
  assert.deepEqual(changes.injuries, ['pecho', 'lumbar']);
  assert.deepEqual(validateProfile({ ...changes, age: '42' }).value.injuries, ['pecho', 'lumbar']);
});
