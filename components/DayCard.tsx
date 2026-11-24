import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { weekdayLabels } from '@/data/labels';
import type { DayPlan } from '@/types/gym';

type DayCardProps = {
  plan: DayPlan;
  isToday: boolean;
};

export function DayCard({ plan, isToday }: DayCardProps) {
  return (
    <Link href={{ pathname: '/dia/[dia]', params: { dia: plan.day } }} asChild>
      <Pressable
        style={({ pressed }) => [
          styles.card,
          { borderColor: plan.color },
          isToday && styles.today,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.title}>{weekdayLabels[plan.day]}</Text>
        {isToday && <Text style={styles.todayLabel}>Hoy</Text>}
        <Text style={styles.focus}>{plan.focus}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 44,
    padding: 14,
    gap: 4,
    borderWidth: 1,
    borderLeftWidth: 5,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  today: {
    borderWidth: 2,
    borderLeftWidth: 5,
    backgroundColor: '#F0F7FC',
  },
  pressed: {
    opacity: 0.8,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#14232D',
  },
  todayLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#174D70',
  },
  focus: {
    fontSize: 15,
    color: '#334651',
  },
});
