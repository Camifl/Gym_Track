import { useState } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';

import { FormField } from '@/components/FormField';
import { FormScreen, FormSection, FormSubmit } from '@/components/FormScreen';
import { InjuryGroupSelector } from '@/components/InjuryGroupSelector';
import { useGym } from '@/context/GymContext';
import type { MuscleGroup } from '@/types/gym';
import { toggleInjuryGroup } from '@/utils/injuries';
import { validateProfile, type ProfileDraft, type ProfileErrors, type ProfileTextField } from '@/utils/profile';

export default function ProfileScreen() {
  const { member, setMember } = useGym();
  const [draft, setDraft] = useState<ProfileDraft>(() => ({
    name: member.name,
    age: String(member.age),
    goal: member.goal,
    notes: member.notes.join('\n'),
    injuries: [...member.injuries],
  }));
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [message, setMessage] = useState('');

  function changeField(field: ProfileTextField, value: string) {
    setDraft(previous => ({ ...previous, [field]: value }));
    setErrors(previous => ({ ...previous, [field]: undefined }));
    setMessage('');
  }

  function changeInjury(group: MuscleGroup) {
    setDraft(previous => ({ ...previous, injuries: toggleInjuryGroup(previous.injuries, group) }));
    setMessage('');
  }

  function saveProfile() {
    const result = validateProfile(draft);
    if (!result.ok) {
      setErrors(result.errors);
      setMessage('');
      return;
    }

    const { name, age, goal, notes, injuries } = result.value;
    // Los avisos usan el perfil guardado. Un borrador inválido no cambia las lesiones activas.
    setMember(previous => ({ ...previous, ...result.value }));
    setDraft({ name, age: String(age), goal, notes: notes.join('\n'), injuries });
    setErrors({});
    Keyboard.dismiss();
    const confirmation = 'Perfil guardado.';
    setMessage(confirmation);
    if (Platform.OS === 'ios' || Platform.OS === 'android') Alert.alert(confirmation);
  }

  return (
    <FormScreen>
      <FormSection title="Datos personales">
        <FormField label="Nombre" value={draft.name} error={errors.name}
          onChangeText={value => changeField('name', value)} autoCapitalize="words" />
        <FormField label="Edad (años)" value={draft.age} error={errors.age}
          onChangeText={value => changeField('age', value)} keyboardType="numeric" />
        <FormField label="Objetivo (opcional)" value={draft.goal}
          onChangeText={value => changeField('goal', value)} />
        <FormField label="Observaciones médicas (opcional)" value={draft.notes}
          onChangeText={value => changeField('notes', value)}
          placeholder="Una observación por línea" multiline />
      </FormSection>
      <FormSection title="Lesiones por grupo muscular">
        <InjuryGroupSelector selected={draft.injuries} onToggle={changeInjury} />
        <FormSubmit label="Guardar perfil" onPress={saveProfile}
          hasErrors={Object.values(errors).some(Boolean)} message={message} />
      </FormSection>
    </FormScreen>
  );
}
