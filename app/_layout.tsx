import { Stack } from 'expo-router';
import { GymProvider } from '@/context/GymContext';

export default function RootLayout() {
  return (
    <GymProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GymProvider>
  );
}