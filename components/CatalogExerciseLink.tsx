import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { muscleGroupLabels } from '@/data/labels';
import type { Exercise } from '@/types/gym';

export function CatalogExerciseLink({ exercise }: { exercise: Exercise }) {
  return (
    <Link href={{ pathname: '/ejercicio/[id]', params: { id: exercise.id } }} asChild>
      <Pressable style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
        <Text style={styles.name}>{exercise.name}</Text>
        <Text style={styles.group}>{muscleGroupLabels[exercise.group]}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 44,
    padding: 12,
    gap: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8E1E7',
    backgroundColor: '#FFFFFF',
  },
  pressed: { opacity: 0.75 },
  name: { fontSize: 16, fontWeight: '600', color: '#14232D' },
  group: { fontSize: 14, color: '#334651' },
});
