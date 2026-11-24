import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Exercise } from '@/types/gym';

type ExerciseItemProps = {
  exercise: Exercise;
  completed: boolean;
  onToggle: () => void;
  onViewDetails: () => void;
};

export function ExerciseItem({ exercise, completed, onToggle, onViewDetails }: ExerciseItemProps) {
  return (
    <View style={styles.row}>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: completed }}
        onPress={onToggle}
        style={({ pressed }) => [styles.toggle, pressed && styles.pressed]}
      >
        <Text style={[styles.name, completed && styles.completed]}>{exercise.name}</Text>
        <Text style={styles.info}>{exercise.series} × {exercise.repetitions}</Text>
        <Text style={styles.info}>{completed ? 'Completado' : 'Pendiente'}</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Ver ficha de ${exercise.name}`}
        onPress={onViewDetails}
        style={({ pressed }) => [styles.details, pressed && styles.pressed]}
      >
        <Text style={styles.detailsLabel}>Ver ficha</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D8E1E7',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  toggle: {
    flex: 1,
    minWidth: 44,
    minHeight: 44,
    paddingVertical: 10,
    gap: 4,
  },
  details: {
    justifyContent: 'center',
    minWidth: 44,
    minHeight: 44,
    maxWidth: '40%',
    paddingHorizontal: 8,
  },
  pressed: {
    opacity: 0.65,
  },
  name: {
    color: '#14232D',
    fontSize: 16,
    fontWeight: '600',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  info: {
    color: '#334651',
    fontSize: 14,
  },
  detailsLabel: {
    color: '#174D70',
    fontSize: 14,
    fontWeight: '600',
  },
});
