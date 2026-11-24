import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colores';
import { DayCard } from '@/components/DayCard';
import { plan } from '@/data/plan';
import { getTodayWeekday } from '@/utils/training';

export default function HomeScreen() {
  const [today, setToday] = useState(() => getTodayWeekday(new Date()));

  // La pestaña puede seguir montada al cambiar de pantalla.
  useFocusEffect(useCallback(() => {
    setToday(getTodayWeekday(new Date()));
  }, []));

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text accessibilityRole="header" style={styles.heading}>Plan semanal</Text>
        {today === null && <Text style={styles.rest}>Día de descanso</Text>}
        {plan.map((day) => (
          <DayCard key={day.day} plan={day} isToday={day.day === today} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  rest: {
    fontSize: 16,
    color: colors.secondaryText,
  },
});
