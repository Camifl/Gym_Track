import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colores';
import { CatalogExerciseLink } from '@/components/CatalogExerciseLink';
import { exercises } from '@/data/ejercicios';
import { muscleGroupLabels, muscleGroups } from '@/data/labels';
import { filterExercisesByName } from '@/utils/texto';

export default function CatalogScreen() {
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState('');
  const isSearching = query.trim().length > 0;
  const matches = isSearching ? filterExercisesByName(exercises, query) : [];
  // El ancho se actualiza al girar el teléfono. Hasta 600 puntos se mantienen dos columnas.
  const cellStyle = width > 600 ? styles.thirdCell : styles.halfCell;

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.search}>
          <Text style={styles.label}>Buscar ejercicio</Text>
          <TextInput
            accessibilityLabel="Buscar ejercicio"
            placeholder="Nombre del ejercicio"
            placeholderTextColor={colors.placeholder}
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
                <View key={group} style={[styles.cell, cellStyle]}>
                  <Link href={{ pathname: '/grupo/[grupo]', params: { grupo: group } }} asChild>
                    <Pressable style={styles.card}>
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
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16, gap: 16 },
  search: { gap: 6 },
  label: { color: colors.text, fontSize: 16, fontWeight: '600' },
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
  results: { gap: 8 },
  heading: { color: colors.text, fontSize: 18, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -4 },
  cell: { padding: 4 },
  halfCell: { width: '50%' },
  thirdCell: { width: '33.3333%' },
  card: {
    minWidth: 44,
    minHeight: 56,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  cardLabel: { color: colors.text, fontSize: 16, fontWeight: '600' },
  message: { color: colors.secondaryText, fontSize: 16 },
});
