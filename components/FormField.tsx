import { StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';

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
        accessibilityLabel={label}
        accessibilityHint={error}
        placeholderTextColor="#526574"
        style={[styles.input, inputProps.multiline && styles.multiline, !!error && styles.invalid]}
      />
      {error && <Text style={styles.error} accessibilityLiveRegion="polite">{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  field: { gap: 5 },
  label: { fontSize: 16, fontWeight: '600', color: '#14232D' },
  input: {
    minHeight: 48,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#8799A7',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    color: '#14232D',
    fontSize: 16,
  },
  multiline: { minHeight: 96, textAlignVertical: 'top' },
  invalid: { borderColor: '#A42121' },
  error: { fontSize: 14, color: '#A42121' },
});
