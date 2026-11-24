import type { MuscleGroup } from '@/types/gym';

export function hasInjuryWarning(injuries: readonly MuscleGroup[], group: MuscleGroup): boolean {
  return injuries.includes(group);
}

export function toggleInjuryGroup(injuries: readonly MuscleGroup[], group: MuscleGroup): MuscleGroup[] {
  // El borrador recibe una lista nueva. Así no cambia la selección guardada en el perfil.
  return injuries.includes(group)
    ? injuries.filter(injury => injury !== group)
    : [...injuries, group];
}
