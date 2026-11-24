import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors } from '@/constants/colores';
import { muscleGroupLabels } from '@/data/labels';
import type { MuscleGroup } from '@/types/gym';
import { hasInjuryWarning } from '@/utils/injuries';

type InjuryWarningProps = {
  group: MuscleGroup;
  injuries: readonly MuscleGroup[];
  style?: StyleProp<ViewStyle>;
};

export function InjuryWarning({ group, injuries, style }: InjuryWarningProps) {
  if (!hasInjuryWarning(injuries, group)) return null;

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>Aviso: lesión registrada en {muscleGroupLabels[group]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
    backgroundColor: colors.warningSurface,
  },
  text: { fontSize: 14, fontWeight: '600', color: colors.warningText },
});
