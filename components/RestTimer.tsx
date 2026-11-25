import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { AppState, Pressable, StyleSheet, Text, View, type AppStateStatus } from 'react-native';

import { colors } from '@/constants/colores';
import { initialRestTimer, restTimerReducer } from '@/utils/restTimer';

const controls = {
  ready: { label: 'Iniciar', action: 'start' },
  running: { label: 'Pausar', action: 'pause' },
  paused: { label: 'Continuar', action: 'resume' },
  finished: { label: 'Iniciar', action: 'start' },
} as const;

export function RestTimer() {
  const [timer, dispatch] = useReducer(restTimerReducer, initialRestTimer);
  const [isVisible, setIsVisible] = useState(false);
  const deadline = timer.status === 'running' ? timer.deadline : undefined;

  useFocusEffect(useCallback(() => {
    const updateVisibility = (status: AppStateStatus) => setIsVisible(status === 'active');
    const subscription = AppState.addEventListener('change', updateVisibility);
    updateVisibility(AppState.currentState ?? 'active');

    // Una ficha puede cubrir la sesión sin desmontarla. También se reinicia al perder el foco.
    return () => {
      subscription?.remove();
      setIsVisible(false);
      dispatch({ type: 'reset' });
    };
  }, []));

  useEffect(() => {
    if (!isVisible || deadline === undefined) return;

    const tick = () => dispatch({ type: 'tick', now: Date.now() });
    // Al volver a primer plano, se actualiza la cuenta antes de esperar al siguiente intervalo.
    tick();
    const interval = setInterval(tick, 250);
    return () => clearInterval(interval);
  }, [deadline, isVisible]);

  const { label, action } = controls[timer.status];
  const minutes = String(Math.floor(timer.seconds / 60)).padStart(2, '0');
  const seconds = String(timer.seconds % 60).padStart(2, '0');
  const remainingLabel = timer.seconds === 1 ? '1 segundo restante' : `${timer.seconds} segundos restantes`;

  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.heading}>Descanso entre series</Text>
      <Text accessibilityLabel={remainingLabel} style={styles.time}>
        {minutes}:{seconds}
      </Text>
      <Text accessibilityLiveRegion="polite" style={styles.status}>
        {timer.status === 'finished' ? 'Descanso terminado' : ' '}
      </Text>
      <View style={styles.controls}>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.button, styles.primaryButton, pressed && styles.pressed]}
          onPress={() => dispatch({ type: action, now: Date.now() })}
        >
          <Text style={[styles.label, styles.primaryLabel]}>{label}</Text>
        </Pressable>
        {timer.status !== 'ready' && (
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={() => dispatch({ type: 'reset' })}
          >
            <Text style={styles.label}>Reiniciar</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mutedSurface,
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    gap: 4,
  },
  heading: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  time: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  status: {
    color: colors.success,
    fontSize: 14,
    fontWeight: '600',
  },
  controls: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.inputBorder,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 44,
    minWidth: 44,
    paddingHorizontal: 12,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    color: colors.link,
    fontSize: 15,
    fontWeight: '600',
  },
  primaryLabel: {
    color: colors.surface,
  },
});
