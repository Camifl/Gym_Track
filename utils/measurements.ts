import type { Measurement } from '@/types/gym';

type Circumference = keyof Measurement['circumferencesCm'];

export const circumferenceLabels = {
  shoulder: 'Hombro',
  arm: 'Brazo',
  forearm: 'Antebrazo',
  chest: 'Pecho',
  abdomen: 'Abdomen',
  hip: 'Cadera',
  leg: 'Pierna',
  calf: 'Pantorrilla',
} satisfies Record<Circumference, string>;

export const circumferenceFields = Object.keys(circumferenceLabels) as Circumference[];

export type MeasurementDraft = Record<'month' | 'heightM' | 'weightKg' | Circumference, string>;
export type MeasurementErrors = Partial<Record<keyof MeasurementDraft, string>>;

export const emptyMeasurementDraft: MeasurementDraft = {
  month: '', heightM: '', weightKg: '',
  shoulder: '', arm: '', forearm: '', chest: '', abdomen: '', hip: '', leg: '', calf: '',
};

function parseDecimal(input: string): number {
  const text = input.trim();
  // Validamos antes de convertir para distinguir un campo vacío de cero y aceptar la coma decimal.
  return /^\d+(?:[.,]\d+)?$/.test(text) ? Number(text.replace(',', '.')) : NaN;
}

export function hasMeasurementForMonth(measurements: readonly Measurement[], month: string): boolean {
  return measurements.some(measurement => measurement.month === month);
}

export function validateMeasurement(draft: MeasurementDraft, measurements: readonly Measurement[]):
  | { ok: true; value: Measurement }
  | { ok: false; errors: MeasurementErrors } {
  const errors: MeasurementErrors = {};
  const month = draft.month.trim();
  if (!/^(?!0000)\d{4}-(0[1-9]|1[0-2])$/.test(month)) {
    errors.month = 'Ingresa un mes válido en formato AAAA-MM.';
  } else if (hasMeasurementForMonth(measurements, month)) {
    errors.month = 'Ya existe un registro para ese mes.';
  }

  const heightM = parseDecimal(draft.heightM);
  if (!(heightM >= 1 && heightM <= 2.30)) errors.heightM = 'Ingresa una estatura entre 1,00 y 2,30 m.';

  const weightKg = parseDecimal(draft.weightKg);
  if (!(weightKg >= 30 && weightKg <= 300)) errors.weightKg = 'Ingresa un peso entre 30 y 300 kg.';

  const circumferences = circumferenceFields.map(field => {
    const value = parseDecimal(draft[field]);
    if (!Number.isFinite(value) || value <= 0) errors[field] = 'Ingresa una medida mayor que 0 cm.';
    return [field, value] as const;
  });

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    value: {
      month,
      heightM,
      weightKg,
      circumferencesCm: Object.fromEntries(circumferences) as Measurement['circumferencesCm'],
    },
  };
}

function getPreviousMonth(month: string): string | undefined {
  const year = month.slice(0, 4);
  const monthNumber = Number(month.slice(5));
  if (monthNumber > 1) return `${year}-${String(monthNumber - 1).padStart(2, '0')}`;
  if (year === '0001') return undefined;
  return `${String(Number(year) - 1).padStart(4, '0')}-12`;
}

export function getMeasurementHistory(measurements: readonly Measurement[]) {
  // El formato AAAA-MM permite ordenar el historial por texto sin modificar el estado.
  const entries = [...measurements].sort((a, b) => b.month.localeCompare(a.month));
  const latest = entries.at(0);
  const previousMonthKey = latest ? getPreviousMonth(latest.month) : undefined;
  // Buscamos el mes calendario anterior, porque el registro anterior podría ser de otro mes.
  const previousMonth = entries.find(measurement => measurement.month === previousMonthKey);
  // La resta binaria puede convertir 0,05 kg en 0,049999… antes de mostrar el resultado.
  const weightChangeKg = latest && previousMonth
    ? Number((latest.weightKg - previousMonth.weightKg).toFixed(12))
    : undefined;

  return { entries, latest, previousMonth, weightChangeKg };
}
