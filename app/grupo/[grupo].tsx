import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { exercises } from '@/data/ejercicios';
import { muscleGroupLabels } from '@/data/labels';

export default function GroupScreen() {
  // El parámetro de la ruta indica qué grupo se quiere consultar.
  const { grupo: group } = useLocalSearchParams<{ grupo: string }>();

  // Buscamos los ejercicios que pertenecen al grupo recibido en la ruta.
  const groupExercises = typeof group === 'string'
    ? exercises.filter((exercise) => exercise.group === group)
    : [];

  // Si no hay coincidencias, mostramos un enlace para volver al catálogo.
  if (groupExercises.length === 0) {
    return (
      <View>
        <Stack.Screen options={{ title: 'Grupo no encontrado' }} />
        <Text>Grupo no encontrado</Text>
        <Link href="/catalogo">Ir al catálogo</Link>
      </View>
    );
  }

  return (
    <View>
      <Stack.Screen options={{ title: muscleGroupLabels[groupExercises[0].group] }} />
      <Text>{muscleGroupLabels[groupExercises[0].group]}</Text>
      {groupExercises.map((exercise) => (
        <Link key={exercise.id} href={{ pathname: '/ejercicio/[id]', params: { id: exercise.id } }}>
          {exercise.name}
        </Link>
      ))}
    </View>
  );
}
