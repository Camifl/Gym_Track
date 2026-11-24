import { useHeaderHeight } from 'expo-router/react-navigation';
import type { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function FormScreen({ children }: { children: ReactNode }) {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={styles.screen} edges={['left', 'right']}>
      <KeyboardAvoidingView
        style={styles.keyboardArea}
        enabled={Platform.OS !== 'web'}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text accessibilityRole="header" style={styles.heading}>{title}</Text>
      {children}
    </View>
  );
}

type FormSubmitProps = {
  label: string;
  onPress: () => void;
  hasErrors: boolean;
  message: string;
};

export function FormSubmit({ label, onPress, hasErrors, message }: FormSubmitProps) {
  return (
    <View style={styles.actions}>
      {hasErrors ? (
        <Text accessibilityLiveRegion="polite" style={styles.error}>Revisa los campos marcados.</Text>
      ) : !!message && (
        <Text accessibilityLiveRegion="polite" style={styles.success}>{message}</Text>
      )}
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F7F9' },
  keyboardArea: { flex: 1 },
  content: { width: '100%', maxWidth: 680, alignSelf: 'center', padding: 16, gap: 16 },
  section: {
    padding: 16,
    gap: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D8E1E7',
    backgroundColor: '#FFFFFF',
  },
  heading: { fontSize: 20, fontWeight: '700', color: '#14232D' },
  actions: { gap: 8 },
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#184C62',
  },
  pressed: { opacity: 0.8 },
  buttonText: { fontSize: 16, fontWeight: '700', color: '#FFFFFF' },
  error: { fontSize: 14, color: '#A42121' },
  success: { fontSize: 14, color: '#176144' },
});
