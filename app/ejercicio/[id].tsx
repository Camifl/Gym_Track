import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CatalogRouteError } from '@/components/CatalogRouteError';
import { exercises } from '@/data/ejercicios';
import { exerciseImages } from '@/data/exerciseImages';
import { muscleGroupLabels, weekdayLabels } from '@/data/labels';
import { plan } from '@/data/plan';
import { findCatalogExercise, getAssignedDays } from '@/utils/catalog';

export default function ExerciseScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const exercise = findCatalogExercise(id, exercises);
  if (!exercise) {
    return <CatalogRouteError title="Ejercicio no encontrado" />;
  }

  const days = getAssignedDays(exercise.id, plan);
  const imageSource = exercise.image ?? exerciseImages[exercise.id];

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Stack.Screen options={{ title: exercise.name }} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.summary}>
          <Text style={styles.text}>{muscleGroupLabels[exercise.group]}</Text>
          <Text style={styles.sets}>
            {exercise.series} × {exercise.repetitions} (series × repeticiones)
          </Text>
        </View>
        {imageSource !== undefined ? (
          <Image
            source={imageSource}
            resizeMode="contain"
            accessible
            accessibilityLabel={`Ilustración de ${exercise.name}`}
            style={styles.media}
          />
        ) : (
          <View style={[styles.media, styles.placeholder]}>
            <Text style={styles.text}>Imagen no disponible</Text>
          </View>
        )}
        <View style={styles.summary}>
          <Text accessibilityRole="header" style={styles.heading}>Días asignados</Text>
          {days.length > 0 ? (
            <View style={styles.days}>
              {days.map(({ day, color }) => (
                <Text key={day} style={[styles.day, { borderLeftColor: color }]}>
                  {weekdayLabels[day]}
                </Text>
              ))}
            </View>
          ) : (
            <Text style={styles.text}>Sin días asignados</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F9' },
  content: { padding: 16, gap: 16 },
  summary: { gap: 8 },
  heading: { fontSize: 18, fontWeight: '700', color: '#14232D' },
  text: { fontSize: 16, color: '#334651' },
  sets: { fontSize: 16, fontWeight: '600', color: '#14232D' },
  media: {
    width: '100%',
    height: 176,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8E1E7',
    backgroundColor: '#FFFFFF',
  },
  placeholder: { alignItems: 'center', justifyContent: 'center', padding: 12 },
  days: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  day: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderLeftWidth: 4,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
    color: '#14232D',
  },
});
