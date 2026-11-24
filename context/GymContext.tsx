import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { initialMember } from '@/data/socio';
import type { Member, Measurement, Weekday } from '@/types/gym';
import { hasMeasurementForMonth } from '@/utils/measurements';

type CompletedExercises = Record<Weekday, string[]>;

interface GymState {
  member: Member;
  setMember: Dispatch<SetStateAction<Member>>;
  measurements: readonly Measurement[];
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
  const [completed, setCompleted] = useState<CompletedExercises>(emptyCompleted);

  // El perfil y las medidas comparten un solo estado. Un doble toque no duplica el mes.
  const addMeasurement = (measurement: Measurement) =>
    setMember(previous => hasMeasurementForMonth(previous.measurements, measurement.month)
      ? previous
      : { ...previous, measurements: [measurement, ...previous.measurements] });
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
      value={{ member, setMember, measurements: member.measurements, addMeasurement, completed, toggleExercise }}>
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
