import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colores';
import { CatalogExerciseLink } from '@/components/CatalogExerciseLink';
import { CatalogRouteError } from '@/components/CatalogRouteError';
import { useGym } from '@/context/GymContext';
import { exercises } from '@/data/ejercicios';
import { muscleGroupLabels, muscleGroups } from '@/data/labels';
import { getCatalogGroup } from '@/utils/catalog';

export default function GroupScreen() {
  const { grupo } = useLocalSearchParams<{ grupo?: string | string[] }>();
  const { member } = useGym();
  const result = getCatalogGroup(grupo, muscleGroups, exercises);

  if (!result) {
    return <CatalogRouteError title="Grupo no encontrado" />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Stack.Screen options={{ title: muscleGroupLabels[result.group] }} />
      <ScrollView contentContainerStyle={styles.list}>
        {result.exercises.length > 0 ? result.exercises.map((exercise) => (
          <CatalogExerciseLink key={exercise.id} exercise={exercise} injuries={member.injuries} />
        )) : (
          <Text style={styles.message}>No hay ejercicios en este grupo.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { padding: 16, gap: 8 },
  message: { color: colors.secondaryText, fontSize: 16 },
});
