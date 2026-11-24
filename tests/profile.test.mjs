import assert from 'node:assert/strict';
import test from 'node:test';

import { validateProfile } from '../utils/profile.ts';

const draft = { name: '  Ana Gómez  ', age: '42', goal: '  Ganar fuerza ', notes: ' Primera nota\r\n\n Segunda nota  ' };

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
    value: { name: 'Ana Gómez', age: 42, goal: 'Ganar fuerza', notes: ['Primera nota', 'Segunda nota'] },
  });
  assert.deepEqual(validateProfile({ ...draft, goal: ' ', notes: '\n  ' }), {
    ok: true,
    value: { name: 'Ana Gómez', age: 42, goal: '', notes: [] },
  });
});
