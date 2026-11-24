import type { Exercise, MuscleGroup } from '@/types/gym';

const SERIES = 4;
const REPS = 12;

// Todos los ejercicios del catálogo comparten la misma cantidad de series y repeticiones.
function createExercise(id: string, name: string, group: MuscleGroup): Exercise {
  return { id, name: name, group: group, series: SERIES, repetitions: REPS };
}

export const exercises: Exercise[] = [
  createExercise('pie-01', 'Media prensa 45°', 'pierna'),
  createExercise('pie-02', 'Extensión de cuádriceps', 'pierna'),
  createExercise('pie-03', 'Desplazamiento con mancuerna', 'pierna'),
  createExercise('pie-04', 'Curl femoral', 'pierna'),
  createExercise('pie-05', 'Pantorrilla sentado', 'pierna'),

  createExercise('pec-01', 'Press banca plano', 'pecho'),
  createExercise('pec-02', 'Vuelos', 'pecho'),
  createExercise('pec-03', 'Crossover', 'pecho'),
  createExercise('pec-04', 'Peck deck', 'pecho'),

  createExercise('tri-01', 'Extensión con mancuerna', 'triceps'),
  createExercise('tri-02', 'Extensión en polea', 'triceps'),
  createExercise('tri-03', 'Patada de tríceps', 'triceps'),
  createExercise('tri-04', 'Fondos', 'triceps'),

  createExercise('esp-01', 'Dominada colgado', 'espalda'),
  createExercise('esp-02', 'Jalón polea espalda', 'espalda'),
  createExercise('esp-03', 'Remo sentado', 'espalda'),
  createExercise('esp-04', 'Jalón polea al pecho', 'espalda'),

  createExercise('hom-01', 'Press con mancuerna', 'hombro'),
  createExercise('hom-02', 'Elevación lateral', 'hombro'),
  createExercise('hom-03', 'Elevación frontal', 'hombro'),
  createExercise('hom-04', 'Remo al mentón cerrado', 'hombro'),
  createExercise('hom-05', 'Hombro posterior', 'hombro'),

  createExercise('bic-01', 'Curl con barra', 'biceps'),
  createExercise('bic-02', 'Curl alternado de pie', 'biceps'),
  createExercise('bic-03', 'Predicador con barra', 'biceps'),
  createExercise('bic-04', 'Curl martillo', 'biceps'),

  createExercise('abd-01', 'Elevación de piernas', 'abdomen'),
  createExercise('abd-02', 'Oblicuos con dos mancuernas', 'abdomen'),
  createExercise('abd-03', 'Máquina abdominal', 'abdomen'),

  createExercise('cad-01', 'Abductor en máquina', 'cadera'),
  createExercise('cad-02', 'Patada lateral en polea', 'cadera'),

  createExercise('glu-01', 'Máquina de glúteo', 'gluteo'),

  createExercise('lum-01', 'Peso muerto', 'lumbar'),
  createExercise('lum-02', 'Hiperextensiones', 'lumbar'),
  createExercise('lum-03', 'Máquina lumbar', 'lumbar'),

  createExercise('ant-01', 'Curl de muñeca', 'antebrazo'),
  createExercise('ant-02', 'Curl de muñeca invertido', 'antebrazo'),
];
