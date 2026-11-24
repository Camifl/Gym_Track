import type { DayPlan, Exercise, MuscleGroup } from '@/types/gym';

export function getCatalogGroup(
  value: unknown,
  groups: readonly MuscleGroup[],
  catalog: readonly Exercise[],
) {
  // Validamos la ruta contra los grupos definidos, aunque un grupo no tenga ejercicios.
  if (typeof value !== 'string') return undefined;
  const group = groups.find((candidate) => candidate === value);
  if (!group) return undefined;

  return { group, exercises: catalog.filter((exercise) => exercise.group === group) };
}

export function findCatalogExercise(value: unknown, catalog: readonly Exercise[]): Exercise | undefined {
  return typeof value === 'string' ? catalog.find(({ id }) => id === value) : undefined;
}

export function getAssignedDays(id: string, plan: readonly DayPlan[]): DayPlan[] {
  // El plan es la fuente de los días asignados y conserva su orden semanal.
  return plan.filter(({ exercises }) => exercises.includes(id));
}
