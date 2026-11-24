import type { Ejercicio, GrupoMuscular } from '@/types/gym';

const SERIES = 4;
const REPS = 12;

function crear(id: string, nombre: string, grupo: GrupoMuscular): Ejercicio {
  return { id, nombre, grupo, series: SERIES, repeticiones: REPS };
}

export const ejercicios: Ejercicio[] = [
  crear('pie-01', 'Media prensa 45°', 'pierna'),
  crear('pie-02', 'Extensión de cuádriceps', 'pierna'),
  crear('pie-03', 'Desplazamiento con mancuerna', 'pierna'),
  crear('pie-04', 'Curl femoral', 'pierna'),
  crear('pie-05', 'Pantorrilla sentado', 'pierna'),

  crear('pec-01', 'Press banca plano', 'pecho'),
  crear('pec-02', 'Vuelos', 'pecho'),
  crear('pec-03', 'Crossover', 'pecho'),
  crear('pec-04', 'Peck deck', 'pecho'),

  crear('tri-01', 'Extensión con mancuerna', 'triceps'),
  crear('tri-02', 'Extensión en polea', 'triceps'),
  crear('tri-03', 'Patada de tríceps', 'triceps'),
  crear('tri-04', 'Fondos', 'triceps'),

  crear('esp-01', 'Dominada colgado', 'espalda'),
  crear('esp-02', 'Jalón polea espalda', 'espalda'),
  crear('esp-03', 'Remo sentado', 'espalda'),
  crear('esp-04', 'Jalón polea al pecho', 'espalda'),

  crear('hom-01', 'Press con mancuerna', 'hombro'),
  crear('hom-02', 'Elevación lateral', 'hombro'),
  crear('hom-03', 'Elevación frontal', 'hombro'),
  crear('hom-04', 'Remo al mentón cerrado', 'hombro'),
  crear('hom-05', 'Hombro posterior', 'hombro'),

  crear('bic-01', 'Curl con barra', 'biceps'),
  crear('bic-02', 'Curl alternado de pie', 'biceps'),
  crear('bic-03', 'Predicador con barra', 'biceps'),
  crear('bic-04', 'Curl martillo', 'biceps'),

  crear('abd-01', 'Elevación de piernas', 'abdomen'),
  crear('abd-02', 'Oblicuos con dos mancuernas', 'abdomen'),
  crear('abd-03', 'Máquina abdominal', 'abdomen'),

  crear('cad-01', 'Abductor en máquina', 'cadera'),
  crear('cad-02', 'Patada lateral en polea', 'cadera'),

  crear('glu-01', 'Máquina de glúteo', 'gluteo'),

  crear('lum-01', 'Peso muerto', 'lumbar'),
  crear('lum-02', 'Hiperextensiones', 'lumbar'),
  crear('lum-03', 'Máquina lumbar', 'lumbar'),

  crear('ant-01', 'Curl de muñeca', 'antebrazo'),
  crear('ant-02', 'Curl de muñeca invertido', 'antebrazo'),
];