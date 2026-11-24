import { Link, router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Inicio</Text>
      <Link href="/dia/lunes">lunes</Link>
      <Button
        title="Exercise"
        onPress={() =>
          router.push({
            pathname: '/ejercicio/[id]',
            params: { id: 'pec-01' },
          })
        }
      />
    </View>
  );
}
