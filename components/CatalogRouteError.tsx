import { Link, Stack } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colores';

export function CatalogRouteError({ title }: { title: string }) {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Stack.Screen options={{ title }} />
      <Text style={styles.message}>{title}</Text>
      <Link href="/catalogo" dismissTo asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>Ir al catálogo</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: 8, padding: 16, backgroundColor: colors.background },
  message: { color: colors.text, fontSize: 16 },
  link: { alignSelf: 'flex-start', justifyContent: 'center', minWidth: 44, minHeight: 44 },
  linkText: { color: colors.link, fontSize: 16, fontWeight: '600' },
});
