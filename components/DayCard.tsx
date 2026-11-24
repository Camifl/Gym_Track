import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/constants/colores';
import { weekdayLabels } from '@/data/labels';
import type { DayPlan } from '@/types/gym';

type DayCardProps = {
  plan: DayPlan;
  isToday: boolean;
};

export function DayCard({ plan, isToday }: DayCardProps) {
  // Link combina objetos de estilo al usar asChild. La tarjeta debe recibir un objeto plano.
  const cardStyle = StyleSheet.flatten([
    styles.card,
    { borderColor: plan.color },
    isToday && styles.today,
  ]);

  return (
    <Link href={{ pathname: '/dia/[dia]', params: { dia: plan.day } }} asChild>
      <Pressable style={cardStyle}>
        <Text style={styles.title}>{weekdayLabels[plan.day]}</Text>
        {isToday && <Text style={styles.todayLabel}>Hoy</Text>}
        <Text style={styles.focus}>{plan.focus}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 44,
    minHeight: 44,
    padding: 14,
    gap: 4,
    borderWidth: 1,
    borderLeftWidth: 5,
    borderRadius: 10,
    backgroundColor: colors.surface,
  },
  today: {
    borderWidth: 2,
    borderLeftWidth: 5,
    backgroundColor: colors.mutedSurface,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },
  todayLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.link,
  },
  focus: {
    fontSize: 15,
    color: colors.secondaryText,
  },
});
