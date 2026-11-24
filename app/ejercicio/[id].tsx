import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { exercises } from '@/data/ejercicios';
import { muscleGroupLabels } from '@/data/labels';

export default function ExerciseScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Buscamos en el catálogo el ejercicio con el identificador recibido.
  const exercise = typeof id === 'string'
    ? exercises.find((item) => item.id === id)
    : undefined;

  // Si no existe, mostramos un enlace para volver al catálogo.
  if (!exercise) {
    return (
      <View>
        <Stack.Screen options={{ title: 'Ejercicio no encontrado' }} />
        <Text>Ejercicio no encontrado</Text>
        <Link href="/catalogo">Ir al catálogo</Link>
      </View>
    );
  }

  return (
    <View>
      <Stack.Screen options={{ title: exercise.name }} />
      <Text>{exercise.name}</Text>
      <Text>{muscleGroupLabels[exercise.group]}</Text>
    </View>
  );
}
