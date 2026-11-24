import type { Member, MuscleGroup } from '@/types/gym';

export type ProfileTextField = 'name' | 'age' | 'goal' | 'notes';
type ProfileValues = Pick<Member, ProfileTextField | 'injuries'>;
export type ProfileDraft = Record<ProfileTextField, string> & { injuries: MuscleGroup[] };
export type ProfileErrors = Partial<Record<ProfileTextField, string>>;

export function validateProfile(draft: ProfileDraft):
  | { ok: true; value: ProfileValues }
  | { ok: false; errors: ProfileErrors } {
  const name = draft.name.trim();
  const ageText = draft.age.trim();
  // Comprobamos el texto primero: Number('') sería 0 y Number('1e1') sería 10.
  const age = /^\d+$/.test(ageText) ? Number(ageText) : NaN;
  const validAge = Number.isInteger(age) && age >= 14 && age <= 90;

  if (!name || !validAge) {
    const errors: ProfileErrors = {};
    if (!name) errors.name = 'Ingresa el nombre.';
    if (!validAge) errors.age = 'Ingresa una edad entera entre 14 y 90 años.';
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      name,
      age,
      goal: draft.goal.trim(),
      notes: draft.notes.split(/\r?\n/).map(note => note.trim()).filter(Boolean),
      injuries: [...new Set(draft.injuries)],
    },
  };
}
