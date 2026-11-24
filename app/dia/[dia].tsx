import { Link, router, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExerciseItem } from '@/components/ExerciseItem';
import { ProgressBar } from '@/components/ProgressBar';
import { useGym } from '@/context/GymContext';
import { exercises } from '@/data/ejercicios';
import { muscleGroupLabels, weekdayLabels } from '@/data/labels';
import { plan } from '@/data/plan';
import { findPlannedDay, getSessionProgress, groupDayExercises } from '@/utils/training';

export default function DayScreen() {
  const { dia: day } = useLocalSearchParams<{ dia?: string | string[] }>();
  const { completed, toggleExercise } = useGym();
  const selectedDay = findPlannedDay(day, plan);

  if (!selectedDay) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <Stack.Screen options={{ title: 'Día no encontrado' }} />
        <View style={styles.content}>
          <Text style={styles.text}>Día no encontrado</Text>
          <Link href="/" replace asChild>
            <Pressable style={styles.homeLink}>
              <Text style={styles.homeLabel}>Ir a Inicio</Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    );
  }

  // Cada día tiene sus propias marcas, aunque comparta ejercicios con otro.
  const dayCompleted = completed[selectedDay.day];
  const groups = groupDayExercises(selectedDay.exercises, exercises);
  const progress = getSessionProgress(groups, dayCompleted);

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <Stack.Screen options={{ title: weekdayLabels[selectedDay.day] }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text accessibilityRole="header" style={styles.heading}>{selectedDay.focus}</Text>
        <ProgressBar value={progress.value} total={progress.total} />
        <View style={styles.section}>
          <Text accessibilityRole="header" style={styles.sectionTitle}>Calentamiento inicial · 5 min</Text>
          <Text style={styles.text}>Trote, bicicleta o elíptica</Text>
        </View>
        {groups.length === 0 && <Text style={styles.text}>No hay ejercicios disponibles para este día.</Text>}
        {groups.map(({ group, exercises: groupExercises }) => (
          <View key={group} style={styles.section}>
            <Text accessibilityRole="header" style={styles.sectionTitle}>{muscleGroupLabels[group]}</Text>
            {groupExercises.map((exercise) => (
              <ExerciseItem
                key={exercise.id}
                exercise={exercise}
                completed={dayCompleted.includes(exercise.id)}
                onToggle={() => toggleExercise(selectedDay.day, exercise.id)}
                onViewDetails={() => router.push({
                  pathname: '/ejercicio/[id]',
                  params: { id: exercise.id },
                })}
              />
            ))}
          </View>
        ))}
        {selectedDay.cardioMin !== undefined && (
          <Text accessibilityRole="header" style={styles.sectionTitle}>Cardio · {selectedDay.cardioMin} min</Text>
        )}
        <View style={styles.section}>
          <Text accessibilityRole="header" style={styles.sectionTitle}>Calentamiento final · 10 min</Text>
          <Text style={styles.text}>Trote, bicicleta o elíptica</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7F9',
  },
  content: {
    padding: 16,
    gap: 16,
  },
  heading: {
    color: '#14232D',
    fontSize: 22,
    fontWeight: '700',
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    color: '#14232D',
    fontSize: 17,
    fontWeight: '700',
  },
  text: {
    color: '#334651',
    fontSize: 15,
  },
  homeLink: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    minWidth: 44,
    minHeight: 44,
    paddingHorizontal: 8,
  },
  homeLabel: {
    color: '#174D70',
    fontSize: 15,
    fontWeight: '600',
  },
});
