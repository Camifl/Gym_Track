import { StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';

import { colors } from '@/constants/colores';

type FormFieldProps = Pick<TextInputProps, 'keyboardType' | 'multiline' | 'placeholder' | 'autoCapitalize'> & {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  error?: string;
};

export function FormField({ label, error, ...inputProps }: FormFieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...inputProps}
        // En horizontal Android puede abrir un editor a pantalla completa que oculta el formulario.
        disableFullscreenUI
        accessibilityLabel={label}
        accessibilityHint={error}
        placeholderTextColor={colors.placeholder}
        style={[styles.input, inputProps.multiline && styles.multiline, !!error && styles.invalid]}
      />
      {error && <Text style={styles.error} accessibilityLiveRegion="polite">{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  field: { gap: 5 },
  label: { fontSize: 16, fontWeight: '600', color: colors.text },
  input: {
    minWidth: 44,
    minHeight: 48,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 10,
    backgroundColor: colors.surface,
    color: colors.text,
    fontSize: 16,
  },
  multiline: { minHeight: 96, textAlignVertical: 'top' },
  invalid: { borderColor: colors.error },
  error: { fontSize: 14, color: colors.error },
});
