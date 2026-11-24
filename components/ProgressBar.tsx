import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colores';
import { getProgressPercentage } from '@/utils/training';

type ProgressBarProps = {
  value: number;
  total: number;
};

export function ProgressBar({ value, total }: ProgressBarProps) {
  const percentage = getProgressPercentage(value, total);
  const label = `${value} de ${total} completados · ${percentage} %`;

  return (
    <View style={styles.container}>
      <Text style={styles.label} accessibilityLiveRegion="polite">{label}</Text>
      <View
        style={styles.track}
        accessibilityRole="progressbar"
        accessibilityLabel="Progreso de la sesión"
        accessibilityValue={{ min: 0, max: 100, now: percentage }}
      >
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
  track: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: colors.border,
  },
  fill: {
    height: '100%',
    backgroundColor: colors.link,
  },
});
