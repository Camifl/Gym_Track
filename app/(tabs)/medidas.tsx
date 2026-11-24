import { useState } from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colores';
import { FormField } from '@/components/FormField';
import { FormScreen, FormSection, FormSubmit } from '@/components/FormScreen';
import { useGym } from '@/context/GymContext';
import { calculateBmi, classifyBmi } from '@/utils/imc';
import {
  circumferenceFields, circumferenceLabels, emptyMeasurementDraft, getMeasurementHistory,
  validateMeasurement, type MeasurementDraft, type MeasurementErrors,
} from '@/utils/measurements';

const oneDecimal = new Intl.NumberFormat('es-CO', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function formatNumber(value: number): string {
  return String(value).replace('.', ',');
}

function formatWeightChange(value: number): string {
  const amount = oneDecimal.format(Math.abs(value));
  if (amount === '0,0') return '0,0 kg';
  return `${value < 0 ? '−' : '+'}${amount} kg`;
}

export default function MeasurementsScreen() {
  const { measurements, addMeasurement } = useGym();
  const [draft, setDraft] = useState<MeasurementDraft>(emptyMeasurementDraft);
  const [errors, setErrors] = useState<MeasurementErrors>({});
  const [message, setMessage] = useState('');

  const { entries, latest, previousMonth, weightChangeKg } = getMeasurementHistory(measurements);
  const bmi = latest ? calculateBmi(latest.weightKg, latest.heightM) : undefined;

  function changeField(field: keyof MeasurementDraft, value: string) {
    setDraft(previous => ({ ...previous, [field]: value }));
    setErrors(previous => ({ ...previous, [field]: undefined }));
    setMessage('');
  }

  function saveMeasurement() {
    const result = validateMeasurement(draft, measurements);
    if (!result.ok) {
      setErrors(result.errors);
      setMessage('');
      return;
    }

    addMeasurement(result.value);
    setDraft(emptyMeasurementDraft);
    setErrors({});
    Keyboard.dismiss();
    setMessage(`Registro de ${result.value.month} guardado.`);
  }

  return (
    <FormScreen>
      <FormSection title="Última medida">
        {latest && bmi !== undefined ? (
          <>
            <Text style={styles.body}>{latest.month} · {formatNumber(latest.weightKg)} kg · {formatNumber(latest.heightM)} m</Text>
            <Text style={styles.metric}>IMC {oneDecimal.format(bmi)}</Text>
            <Text style={styles.body}>{classifyBmi(bmi)}</Text>
            <Text style={styles.body}>
              {previousMonth && weightChangeKg !== undefined
                ? `Cambio frente a ${previousMonth.month}: ${formatWeightChange(weightChangeKg)}`
                : 'Sin registro del mes anterior'}
            </Text>
          </>
        ) : (
          <Text style={styles.body}>Aún no hay medidas registradas.</Text>
        )}
      </FormSection>

      <FormSection title="Registrar medidas">
        <FormField label="Mes (AAAA-MM)" placeholder="Ej. 2026-12" value={draft.month} error={errors.month}
          onChangeText={value => changeField('month', value)} />
        <FormField label="Estatura (m)" value={draft.heightM} error={errors.heightM}
          onChangeText={value => changeField('heightM', value)} keyboardType="decimal-pad" />
        <FormField label="Peso (kg)" value={draft.weightKg} error={errors.weightKg}
          onChangeText={value => changeField('weightKg', value)} keyboardType="decimal-pad" />
        {circumferenceFields.map(field => (
          <FormField
            key={field}
            label={`${circumferenceLabels[field]} (cm)`}
            value={draft[field]}
            error={errors[field]}
            onChangeText={value => changeField(field, value)}
            keyboardType="decimal-pad"
          />
        ))}
        <FormSubmit label="Guardar medidas" onPress={saveMeasurement}
          hasErrors={Object.values(errors).some(Boolean)} message={message} />
      </FormSection>

      {entries.length > 0 && (
        <FormSection title="Historial de medidas">
          {entries.map(entry => (
            <View key={entry.month} style={styles.entry}>
              <Text accessibilityRole="header" style={styles.month}>{entry.month}</Text>
              <Text style={styles.body}>Peso: {formatNumber(entry.weightKg)} kg · Estatura: {formatNumber(entry.heightM)} m</Text>
              <View style={styles.circumferences}>
                {circumferenceFields.map(field => (
                  <Text key={field} style={styles.circumference}>
                    {circumferenceLabels[field]}: {formatNumber(entry.circumferencesCm[field])} cm
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </FormSection>
      )}
    </FormScreen>
  );
}

const styles = StyleSheet.create({
  metric: { fontSize: 26, fontWeight: '700', color: colors.primary },
  body: { fontSize: 16, color: colors.secondaryText },
  month: { fontSize: 16, fontWeight: '700', color: colors.text },
  entry: { borderTopWidth: 1, borderColor: colors.border, paddingTop: 12, gap: 6 },
  circumferences: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  circumference: { flexBasis: '47%', flexGrow: 1, fontSize: 14, color: colors.secondaryText },
});
