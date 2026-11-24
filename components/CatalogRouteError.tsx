import { Link, Stack } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  container: { flex: 1, gap: 8, padding: 16, backgroundColor: '#F5F7F9' },
  message: { color: '#14232D', fontSize: 16 },
  link: { alignSelf: 'flex-start', justifyContent: 'center', minWidth: 44, minHeight: 44 },
  linkText: { color: '#174D70', fontSize: 16, fontWeight: '600' },
});
