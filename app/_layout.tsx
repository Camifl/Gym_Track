import { Stack } from 'expo-router';
import { GymProvider } from '@/context/GymContext';

export default function RootLayout() {
  // El proveedor comparte los datos del gimnasio con todas las pantallas.
  return (
    <GymProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GymProvider>
  );
}
