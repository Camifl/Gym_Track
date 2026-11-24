import { StyleSheet, Text, View } from 'react-native';

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
    color: '#14232D',
    fontSize: 15,
    fontWeight: '600',
  },
  track: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#D8E1E7',
  },
  fill: {
    height: '100%',
    backgroundColor: '#174D70',
  },
});
