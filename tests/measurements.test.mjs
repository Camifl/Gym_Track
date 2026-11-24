import assert from 'node:assert/strict';
import test from 'node:test';

import { initialMember } from '../data/socio.ts';
import { calculateBmi, classifyBmi } from '../utils/imc.ts';
import { getMeasurementHistory, validateMeasurement } from '../utils/measurements.ts';

const draft = {
  month: '2026-12',
  heightM: ' 1,75 ',
  weightKg: '96.5',
  shoulder: '118',
  arm: '33',
  forearm: '28',
  chest: '108,5',
  abdomen: '101',
  hip: '106',
  leg: '58',
  calf: '38',
};

test('a measurement preserves all eight circumferences and accepts decimal point or comma', () => {
  assert.deepEqual(validateMeasurement(draft, initialMember.measurements), {
    ok: true,
    value: {
      month: '2026-12',
      heightM: 1.75,
      weightKg: 96.5,
      circumferencesCm: {
        shoulder: 118, arm: 33, forearm: 28, chest: 108.5,
        abdomen: 101, hip: 106, leg: 58, calf: 38,
      },
    },
  });
});

test('measurement dates must be calendar months with a four digit year and no duplicate', () => {
  for (const month of ['', '2026-1', '0000-01', '2026-00', '2026-13', '2026-12-01', ' 2026-11 ']) {
    const result = validateMeasurement({ ...draft, month }, initialMember.measurements);
    assert.equal(result.ok, false, month);
    assert.deepEqual(Object.keys(result.errors), ['month']);
  }
  assert.equal(validateMeasurement({ ...draft, month: ' 2026-09 ' }, initialMember.measurements).value.month, '2026-09');
});

test('measurement accepts the weight and height endpoints and rejects values outside them', () => {
  for (const [heightM, weightKg] of [['1,00', '30'], ['2.30', '300']]) {
    assert.equal(validateMeasurement({ ...draft, heightM, weightKg }, []).ok, true);
  }
  for (const [heightM, weightKg] of [['0.99', '29.99'], ['2,31', '300,01'], ['', ' ']]) {
    const result = validateMeasurement({ ...draft, heightM, weightKg }, []);
    assert.equal(result.ok, false);
    assert.deepEqual(Object.keys(result.errors), ['heightM', 'weightKg']);
  }
});

test('perimeters require positive finite decimal values in every field', () => {
  for (const field of ['shoulder', 'arm', 'forearm', 'chest', 'abdomen', 'hip', 'leg', 'calf']) {
    for (const value of [' ', '0', '-1', '1.2.3', '2e1', '0xff', '9'.repeat(350)]) {
      const result = validateMeasurement({ ...draft, [field]: value }, []);
      assert.equal(result.ok, false, `${field} = ${value}`);
      assert.deepEqual(Object.keys(result.errors), [field]);
    }
  }
});

test('the lab example has BMI 32 and a loss of 2.5 kg against October', () => {
  const { latest, previousMonth, weightChangeKg } = getMeasurementHistory(initialMember.measurements);
  const bmi = calculateBmi(latest.weightKg, latest.heightM);
  assert.equal(bmi, 32);
  assert.equal(classifyBmi(bmi), 'Obesidad grado I');
  assert.equal(previousMonth.month, '2026-10');
  assert.equal(weightChangeKg, -2.5);
});

test('history sorts without mutating the input and compares January with December', () => {
  const [november, october] = initialMember.measurements;
  const december = { ...november, month: '2026-12', weightKg: 96.5 };
  const january = { ...november, month: '2027-01', weightKg: 95 };
  const records = [october, january, november, december];
  const { entries, latest, previousMonth, weightChangeKg } = getMeasurementHistory(records);
  assert.deepEqual(entries.map(entry => entry.month), ['2027-01', '2026-12', '2026-11', '2026-10']);
  assert.deepEqual(records, [october, january, november, december]);
  assert.equal(latest, january);
  assert.equal(previousMonth, december);
  assert.equal(weightChangeKg, -1.5);
});

test('a missing prior calendar month gives no comparison, even if older records exist', () => {
  const [november, october] = initialMember.measurements;
  const january = { ...november, month: '2027-01', weightKg: 95 };
  const history = getMeasurementHistory([october, january]);
  assert.equal(history.latest, january);
  assert.equal(history.previousMonth, undefined);
  assert.equal(history.weightChangeKg, undefined);
  assert.equal(getMeasurementHistory([]).latest, undefined);
  assert.equal(getMeasurementHistory([november]).weightChangeKg, undefined);
});

test('weight differences at half a decimal do not lose precision in either direction', () => {
  const [november] = initialMember.measurements;
  for (const [weightKg, difference] of [[98.05, 0.05], [97.95, -0.05]]) {
    const december = { ...november, month: '2026-12', weightKg };
    assert.equal(getMeasurementHistory([november, december]).weightChangeKg, difference);
  }
});

test('BMI classification changes at each exact threshold before rounding for display', () => {
  for (const [bmi, classification] of [
    [18.49, 'Bajo peso'], [18.5, 'Normal'], [24.99, 'Normal'], [25, 'Sobrepeso'],
    [29.99, 'Sobrepeso'], [30, 'Obesidad grado I'], [34.99, 'Obesidad grado I'],
    [35, 'Obesidad grado II'], [39.99, 'Obesidad grado II'], [40, 'Obesidad grado III'],
  ]) assert.equal(classifyBmi(bmi), classification, String(bmi));
});

test('an exact BMI threshold calculated from weight and height keeps its classification', () => {
  assert.equal(classifyBmi(calculateBmi(64, 1.6)), 'Sobrepeso');
  assert.equal(classifyBmi(calculateBmi(63.99, 1.6)), 'Normal');
});
