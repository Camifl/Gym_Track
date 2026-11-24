import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CatalogExerciseLink } from '@/components/CatalogExerciseLink';
import { exercises } from '@/data/ejercicios';
import { muscleGroupLabels, muscleGroups } from '@/data/labels';
import { filterExercisesByName } from '@/utils/texto';

export default function CatalogScreen() {
  const [query, setQuery] = useState('');
  const isSearching = query.trim().length > 0;
  const matches = isSearching ? filterExercisesByName(exercises, query) : [];

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.search}>
          <Text style={styles.label}>Buscar ejercicio</Text>
          <TextInput
            accessibilityLabel="Buscar ejercicio"
            placeholder="Nombre del ejercicio"
            placeholderTextColor="#526574"
            value={query}
            onChangeText={setQuery}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="search"
            style={styles.input}
          />
        </View>
        {isSearching ? (
          <View style={styles.results}>
            {matches.length > 0 ? matches.map((exercise) => (
              <CatalogExerciseLink key={exercise.id} exercise={exercise} />
            )) : (
              <Text style={styles.message} accessibilityLiveRegion="polite">No se encontraron ejercicios.</Text>
            )}
          </View>
        ) : (
          <View style={styles.results}>
            <Text accessibilityRole="header" style={styles.heading}>Grupos musculares</Text>
            <View style={styles.grid}>
              {muscleGroups.map((group) => (
                <View key={group} style={styles.cell}>
                  <Link href={{ pathname: '/grupo/[grupo]', params: { grupo: group } }} asChild>
                    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
                      <Text style={styles.cardLabel}>{muscleGroupLabels[group]}</Text>
                    </Pressable>
                  </Link>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F9' },
  content: { padding: 16, gap: 16 },
  search: { gap: 6 },
  label: { color: '#14232D', fontSize: 16, fontWeight: '600' },
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
  results: { gap: 8 },
  heading: { color: '#14232D', fontSize: 18, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -4 },
  cell: { width: '50%', padding: 4 },
  card: {
    minHeight: 56,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8E1E7',
    backgroundColor: '#FFFFFF',
  },
  pressed: { opacity: 0.75 },
  cardLabel: { color: '#14232D', fontSize: 16, fontWeight: '600' },
  message: { color: '#334651', fontSize: 16 },
});
