import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/constants/colores';

export default function TabsLayout() {
  const { bottom } = useSafeAreaInsets();
  // Los nombres corresponden a archivos de esta carpeta; los títulos se muestran en la app.
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: styles.label,
        tabBarItemStyle: styles.item,
        // Al abrir el teclado dejamos más espacio para recorrer los formularios.
        tabBarHideOnKeyboard: true,
        // En horizontal la barra puede ser compacta. Reservamos espacio para los botones y el área segura.
        tabBarStyle: { height: 52 + bottom + StyleSheet.hairlineWidth },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          headerTitle: 'Gym Track',
          headerTitleAlign: 'center',
          headerTitleStyle: styles.homeTitle,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="catalogo"
        options={{
          title: 'Catálogo',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }} />
      <Tabs.Screen
        name="medidas"
        options={{
          title: 'Medidas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" size={size} color={color} />
          ),
        }} />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  homeTitle: { color: colors.primary, fontSize: 24, fontWeight: '700' },
  label: { fontSize: 14 },
  item: { minHeight: 44, minWidth: 44 },
});
