export type Weekday =
  | 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'sabado';

export type MuscleGroup =
  | 'pierna' | 'pecho' | 'triceps' | 'espalda' | 'hombro' | 'biceps'
  | 'abdomen' | 'cadera' | 'gluteo' | 'lumbar' | 'antebrazo';

export interface Exercise {
  id: string;
  name: string;
  group: MuscleGroup;
  series: number;
  repetitions: number;
  image?: number;
}

export interface DayPlan {
  day: Weekday;
  focus: string;
  color: string;
  exercises: string[];
  cardioMin?: number;
}

export interface Measurement {
  month: string;
  heightM: number;
  weightKg: number;
  circumferencesCm: Record<'shoulder' | 'arm' | 'forearm' | 'chest' | 'abdomen'
    | 'hip' | 'leg' | 'calf', number>;
}

export interface Member {
  name: string;
  age: number;
  assignmentDate: string;
  goal: string;
  notes: string[];
  injuries: MuscleGroup[];
  measurements: Measurement[];
}
