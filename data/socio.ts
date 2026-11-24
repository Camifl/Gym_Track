import type { Member } from '@/types/gym';

export const initialMember: Member = {
  name: 'Andrés Gómez',
  age: 42,
  assignmentDate: '2026-11-04',
  goal: 'Bajar de peso',
  notes: ['Cirugía de menisco, rodilla derecha (2022)', 'Dolor lumbar recurrente'],
  injuries: ['pierna', 'lumbar'],
  measurements: [
    {
      month: '2026-11',
      heightM: 1.75,
      weightKg: 98.0,
      circumferencesCm: {
        shoulder: 118, arm: 33, forearm: 28, chest: 108,
        abdomen: 101, hip: 106, leg: 58, calf: 38,
      },
    },
    {
      month: '2026-10',
      heightM: 1.75,
      weightKg: 100.5,
      circumferencesCm: {
        shoulder: 119, arm: 33, forearm: 28, chest: 110,
        abdomen: 104, hip: 108, leg: 59, calf: 38,
      },
    },
  ],
};