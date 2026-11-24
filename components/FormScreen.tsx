import { useHeaderHeight } from 'expo-router/react-navigation';
import type { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colores';

export function FormScreen({ children }: { children: ReactNode }) {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={styles.screen} edges={['left', 'right']}>
      <KeyboardAvoidingView
        style={styles.keyboardArea}
        enabled={Platform.OS !== 'web'}
        behavior="padding"
        keyboardVerticalOffset={headerHeight}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
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
  screen: { flex: 1, backgroundColor: colors.background },
  keyboardArea: { flex: 1 },
  scroll: { flex: 1 },
  content: { width: '100%', maxWidth: 680, alignSelf: 'center', padding: 16, gap: 16 },
  section: {
    padding: 16,
    gap: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  heading: { fontSize: 20, fontWeight: '700', color: colors.text },
  actions: { gap: 8 },
  button: {
    minWidth: 44,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  pressed: { opacity: 0.8 },
  buttonText: { fontSize: 16, fontWeight: '700', color: colors.surface },
  error: { fontSize: 14, color: colors.error },
  success: { fontSize: 14, color: colors.success },
});
