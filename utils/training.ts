import type { DayPlan, Exercise, MuscleGroup, Weekday } from '@/types/gym';

const weekdays: readonly (Weekday | null)[] = [
  null, 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado',
];

type ExerciseGroup = {
  group: MuscleGroup;
  exercises: Exercise[];
};

export function getTodayWeekday(date: Date): Weekday | null {
  // getDay usa la hora local y devuelve 0 el domingo, que es día de descanso.
  return weekdays[date.getDay()] ?? null;
}

export function findPlannedDay(value: unknown, plan: readonly DayPlan[]): DayPlan | undefined {
  // Los parámetros de una URL se comprueban antes de usarlos como un día del plan.
  return typeof value === 'string' ? plan.find(({ day }) => day === value) : undefined;
}

export function groupDayExercises(
  ids: readonly string[],
  catalog: readonly Exercise[],
): ExerciseGroup[] {
  const byId = new Map(catalog.map((exercise) => [exercise.id, exercise]));
  const groups = new Map<MuscleGroup, ExerciseGroup>();

  // Conservamos el orden del plan y omitimos IDs repetidos o ausentes del catálogo.
  for (const id of new Set(ids)) {
    const exercise = byId.get(id);
    if (!exercise) continue;

    const group = groups.get(exercise.group);
    if (group) {
      group.exercises.push(exercise);
    } else {
      groups.set(exercise.group, { group: exercise.group, exercises: [exercise] });
    }
  }

  return [...groups.values()];
}

export function getSessionProgress(groups: readonly ExerciseGroup[], completedIds: readonly string[]) {
  const visibleIds = new Set(groups.flatMap(({ exercises }) => exercises.map(({ id }) => id)));
  const completed = new Set(completedIds);

  // El numerador y el total salen de los mismos ejercicios visibles.
  return {
    value: [...visibleIds].filter((id) => completed.has(id)).length,
    total: visibleIds.size,
  };
}

export function getProgressPercentage(value: number, total: number): number {
  // Una sesión vacía muestra 0 % y las demás se redondean al entero más cercano.
  return total === 0 ? 0 : Math.round((value / total) * 100);
}
