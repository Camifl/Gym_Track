import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Member, Measurement, Weekday } from '@/types/gym';
import { initialMember } from '@/data/socio';

type CompletedExercises = Record<Weekday, string[]>;

interface GymState {
  member: Member;
  setMember: (member: Member) => void;
  measurements: Measurement[];
  addMeasurement: (measurement: Measurement) => void;
  completed: CompletedExercises;
  toggleExercise: (day: Weekday, id: string) => void;
}

// Cada día mantiene su propia lista de identificadores completados.
const emptyCompleted: CompletedExercises = {
  lunes: [], martes: [], miercoles: [], jueves: [], viernes: [], sabado: [],
};

const GymContext = createContext<GymState | null>(null);

export function GymProvider({ children }: { children: ReactNode }) {
  const [member, setMember] = useState<Member>(initialMember);
  const [measurements, setMeasurements] = useState<Measurement[]>(initialMember.measurements);
  const [completed, setCompleted] = useState<CompletedExercises>(emptyCompleted);

  // Conservamos el historial anterior y añadimos la nueva medida al principio.
  const addMeasurement = (measurement: Measurement) =>
    setMeasurements(previous => [measurement, ...previous]);
  // Si el ejercicio ya está marcado, se elimina; si no, se añade.
  const toggleExercise = (day: Weekday, id: string) =>
    setCompleted(previous => ({
      ...previous,
      [day]: previous[day].includes(id)
        ? previous[day].filter(exerciseId => exerciseId !== id)
        : [...previous[day], id],
    }));

  return (
    <GymContext.Provider
      value={{ member, setMember, measurements, addMeasurement, completed, toggleExercise }}>
      {children}
    </GymContext.Provider>
  );
}

export function useGym(): GymState {
  const context = useContext(GymContext);
  // El proveedor debe envolver la pantalla que utiliza este estado compartido.
  if (!context) throw new Error('useGym debe usarse dentro de GymProvider');
  return context;
}
