import { Pressable, StyleSheet, Text, View } from 'react-native';

import { InjuryWarning } from '@/components/InjuryWarning';
import { colors } from '@/constants/colores';
import type { Exercise, MuscleGroup } from '@/types/gym';

type ExerciseItemProps = {
  exercise: Exercise;
  injuries: readonly MuscleGroup[];
  completed: boolean;
  onToggle: () => void;
  onViewDetails: () => void;
};

export function ExerciseItem({ exercise, injuries, completed, onToggle, onViewDetails }: ExerciseItemProps) {
  return (
    <View style={styles.card}>
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
      <InjuryWarning group={exercise.group} injuries={injuries} style={styles.warning} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    backgroundColor: colors.surface,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  warning: { marginBottom: 8 },
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
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  info: {
    color: colors.secondaryText,
    fontSize: 14,
  },
  detailsLabel: {
    color: colors.link,
    fontSize: 14,
    fontWeight: '600',
  },
});
