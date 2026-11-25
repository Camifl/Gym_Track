const restDurationMs = 60_000;

type RestTimerState =
  | { status: 'ready' | 'finished'; seconds: number }
  | { status: 'running'; deadline: number; seconds: number }
  | { status: 'paused'; remainingMs: number; seconds: number };

type RestTimerAction =
  | { type: 'start' | 'pause' | 'resume' | 'tick'; now: number }
  | { type: 'reset' };

export const initialRestTimer: RestTimerState = {
  status: 'ready',
  seconds: restDurationMs / 1000,
};

const finishedRestTimer: RestTimerState = { status: 'finished', seconds: 0 };

export function restTimerReducer(state: RestTimerState, action: RestTimerAction): RestTimerState {
  switch (action.type) {
    case 'start':
      if (state.status !== 'ready' && state.status !== 'finished') return state;
      return { status: 'running', deadline: action.now + restDurationMs, seconds: initialRestTimer.seconds };
    case 'resume':
      if (state.status !== 'paused') return state;
      return { status: 'running', deadline: action.now + state.remainingMs, seconds: state.seconds };
    case 'reset':
      return initialRestTimer;
    case 'pause':
    case 'tick': {
      if (state.status !== 'running') return state;

      // El límite fija el final del descanso aunque se retrase una actualización.
      const remainingMs = Math.min(restDurationMs, state.deadline - action.now);
      if (remainingMs <= 0) return finishedRestTimer;

      const seconds = Math.ceil(remainingMs / 1000);
      if (action.type === 'pause') return { status: 'paused', remainingMs, seconds };
      return seconds === state.seconds ? state : { ...state, seconds };
    }
  }
}
