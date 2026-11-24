import { Ionicons } from '@expo/vector-icons';
import type { KeyboardEvent } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colores';
import { muscleGroupLabels, muscleGroups } from '@/data/labels';
import type { MuscleGroup } from '@/types/gym';

type InjuryGroupSelectorProps = {
  selected: readonly MuscleGroup[];
  onToggle: (group: MuscleGroup) => void;
};

export function InjuryGroupSelector({ selected, onToggle }: InjuryGroupSelectorProps) {
  return (
    <View style={styles.options}>
      {muscleGroups.map(group => {
        const checked = selected.includes(group);
        const label = muscleGroupLabels[group];
        // En web, Pressable admite Enter. Añadimos Espacio para el rol de casilla.
        const webKeyboardProps = Platform.select({
          web: {
            onKeyDown: (event: KeyboardEvent) => {
              if (event.key !== ' ' || event.defaultPrevented) return;
              event.preventDefault();
              if (!event.repeat) onToggle(group);
            },
          },
        });
        return (
          <Pressable
            {...webKeyboardProps}
            key={group}
            accessibilityRole="checkbox"
            accessibilityLabel={label}
            aria-checked={checked}
            onPress={() => onToggle(group)}
            style={({ pressed }) => [styles.option, checked && styles.selected, pressed && styles.pressed]}
          >
            <Ionicons name={checked ? 'checkbox-outline' : 'square-outline'} size={18} color={colors.primary} />
            <Text style={styles.label}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  options: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    minWidth: 44,
    minHeight: 44,
    maxWidth: '100%',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  selected: { borderColor: colors.primary, backgroundColor: colors.mutedSurface },
  pressed: { opacity: 0.8 },
  label: { flexShrink: 1, fontSize: 14, color: colors.text },
});
