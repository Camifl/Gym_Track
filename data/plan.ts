import type { DayPlan } from '@/types/gym';

// Lunes y viernes comparten la misma lista de ejercicios.
const fullBody = [
  'pec-01', 'esp-04', 'hom-01', 'pie-01', 'bic-01', 'tri-02', 'abd-01',
];

// Cada identificador de ejercicio corresponde a un registro del catálogo.
export const plan: DayPlan[] = [
  {
    day: 'lunes',
    focus: 'Cuerpo completo',
    color: '#22C3E6',
    exercises: fullBody,
  },
  {
    day: 'martes',
    focus: 'Pierna + cardio',
    color: '#F59E0B',
    exercises: ['pie-01', 'pie-02', 'pie-03', 'pie-04', 'pie-05'],
    cardioMin: 20,
  },
  {
    day: 'miercoles',
    focus: 'Tren superior + abdomen',
    color: '#22C55E',
    exercises: [
      'pec-02', 'pec-04', 'hom-02', 'hom-03', 'tri-01', 'bic-04', 'abd-02', 'abd-03',
    ],
  },
  {
    day: 'jueves',
    focus: 'Pierna + tren superior',
    color: '#EC4899',
    exercises: [
      'pie-02', 'pie-04', 'esp-02', 'esp-03', 'lum-02', 'bic-02', 'tri-03',
    ],
  },
  {
    day: 'viernes',
    focus: 'Cuerpo completo',
    color: '#22C3E6',
    exercises: fullBody,
  },
  {
    day: 'sabado',
    focus: 'Glúteo + cardio',
    color: '#A3E635',
    exercises: ['glu-01', 'cad-01', 'cad-02', 'lum-03', 'ant-01', 'ant-02'],
    cardioMin: 20,
  },
];
