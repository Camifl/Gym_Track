import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { plan } from '@/data/plan';
import { weekdayLabels } from '@/data/labels';

export default function DayScreen() {
  // El parámetro se llama «dia» en la ruta y se usa como «day» en el código.
  const { dia: day } = useLocalSearchParams<{ dia: string }>();

  // La ruta puede recibir cualquier texto; solo aceptamos días del plan.
  const selectedDay =
    typeof day === 'string'
      ? plan.find((plannedDay) => plannedDay.day === day)
      : undefined;

  if (!selectedDay) {
    return (
      <View>
        <Stack.Screen options={{ title: 'Día no encontrado' }} />
        <Text>Día no encontrado</Text>
        <Link href="/">Ir a inicio</Link>
      </View>
    );
  }

  return (
    <View>
      <Stack.Screen options={{ title: weekdayLabels[selectedDay.day] }} />
      <Text>{weekdayLabels[selectedDay.day]}</Text>
      <Text>{selectedDay.focus}</Text>
    </View>
  );
}
