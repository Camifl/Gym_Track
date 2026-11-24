import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colores';
import { CatalogRouteError } from '@/components/CatalogRouteError';
import { InjuryWarning } from '@/components/InjuryWarning';
import { useGym } from '@/context/GymContext';
import { exercises } from '@/data/ejercicios';
import { exerciseImages } from '@/data/exerciseImages';
import { muscleGroupLabels, weekdayLabels } from '@/data/labels';
import { plan } from '@/data/plan';
import { findCatalogExercise, getAssignedDays } from '@/utils/catalog';

export default function ExerciseScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const { member } = useGym();
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
          <InjuryWarning group={exercise.group} injuries={member.injuries} />
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
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16, gap: 16 },
  summary: { gap: 8 },
  heading: { fontSize: 18, fontWeight: '700', color: colors.text },
  text: { fontSize: 16, color: colors.secondaryText },
  sets: { fontSize: 16, fontWeight: '600', color: colors.text },
  media: {
    width: '100%',
    height: 176,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  placeholder: { alignItems: 'center', justifyContent: 'center', padding: 12 },
  days: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  day: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderLeftWidth: 4,
    borderRadius: 6,
    backgroundColor: colors.surface,
    fontSize: 15,
    color: colors.text,
  },
});
