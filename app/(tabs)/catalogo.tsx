import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function CatalogScreen() {
  return (
    <View>
      <Text>Catálogo</Text>
      <Link href="/grupo/pecho">Pecho</Link>
    </View>
  );
}
