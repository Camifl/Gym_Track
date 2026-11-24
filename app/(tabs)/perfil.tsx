import { useState } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';

import { FormField } from '@/components/FormField';
import { FormScreen, FormSection, FormSubmit } from '@/components/FormScreen';
import { useGym } from '@/context/GymContext';
import { validateProfile, type ProfileDraft, type ProfileErrors } from '@/utils/profile';

export default function ProfileScreen() {
  const { member, setMember } = useGym();
  const [draft, setDraft] = useState<ProfileDraft>(() => ({
    name: member.name,
    age: String(member.age),
    goal: member.goal,
    notes: member.notes.join('\n'),
  }));
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [message, setMessage] = useState('');

  function changeField(field: keyof ProfileDraft, value: string) {
    setDraft(previous => ({ ...previous, [field]: value }));
    setErrors(previous => ({ ...previous, [field]: undefined }));
    setMessage('');
  }

  function saveProfile() {
    const result = validateProfile(draft);
    if (!result.ok) {
      setErrors(result.errors);
      setMessage('');
      return;
    }

    const { name, age, goal, notes } = result.value;
    setMember(previous => ({ ...previous, ...result.value }));
    setDraft({ name, age: String(age), goal, notes: notes.join('\n') });
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
        <FormSubmit label="Guardar perfil" onPress={saveProfile}
          hasErrors={Object.values(errors).some(Boolean)} message={message} />
      </FormSection>
    </FormScreen>
  );
}
