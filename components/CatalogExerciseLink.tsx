import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { InjuryWarning } from '@/components/InjuryWarning';
import { colors } from '@/constants/colores';
import { muscleGroupLabels } from '@/data/labels';
import type { Exercise, MuscleGroup } from '@/types/gym';

export function CatalogExerciseLink({ exercise, injuries }: { exercise: Exercise; injuries: readonly MuscleGroup[] }) {
  return (
    <Link href={{ pathname: '/ejercicio/[id]', params: { id: exercise.id } }} asChild>
      <Pressable style={styles.row}>
        <Text style={styles.name}>{exercise.name}</Text>
        <Text style={styles.group}>{muscleGroupLabels[exercise.group]}</Text>
        <InjuryWarning group={exercise.group} injuries={injuries} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  row: {
    minWidth: 44,
    minHeight: 44,
    padding: 12,
    gap: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  name: { fontSize: 16, fontWeight: '600', color: colors.text },
  group: { fontSize: 14, color: colors.secondaryText },
});
