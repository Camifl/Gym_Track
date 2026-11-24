import type { MuscleGroup, Weekday } from '@/types/gym';

// Las claves no llevan tildes; los valores presentan el texto con tildes y mayúsculas.
export const weekdayLabels: Record<Weekday, string> = {
  lunes: 'Lunes', martes: 'Martes', miercoles: 'Miércoles',
  jueves: 'Jueves', viernes: 'Viernes', sabado: 'Sábado',
};

export const muscleGroupLabels: Record<MuscleGroup, string> = {
  pierna: 'Pierna', pecho: 'Pecho', triceps: 'Tríceps', espalda: 'Espalda',
  hombro: 'Hombro', biceps: 'Bíceps', abdomen: 'Abdomen', cadera: 'Cadera',
  gluteo: 'Glúteo', lumbar: 'Lumbar', antebrazo: 'Antebrazo',
};
