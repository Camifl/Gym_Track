import assert from 'node:assert/strict';
import test from 'node:test';

import { initialRestTimer, restTimerReducer } from '../utils/restTimer.ts';

test('a new rest starts at 60 seconds and a second start does not extend it', () => {
  assert.deepEqual(initialRestTimer, { status: 'ready', seconds: 60 });
  const running = restTimerReducer(initialRestTimer, { type: 'start', now: 1000 });
  assert.deepEqual(running, { status: 'running', deadline: 61000, seconds: 60 });
  assert.equal(restTimerReducer(running, { type: 'start', now: 3000 }), running);
});

test('a delayed tick uses elapsed time and rounds a partial second up', () => {
  const running = restTimerReducer(initialRestTimer, { type: 'start', now: 0 });
  assert.equal(restTimerReducer(running, { type: 'tick', now: 250 }), running);
  assert.equal(restTimerReducer(running, { type: 'tick', now: 7150 }).seconds, 53);
  assert.equal(restTimerReducer(running, { type: 'tick', now: 59999 }).seconds, 1);
});

test('pausing and continuing preserve the exact remaining milliseconds', () => {
  const running = restTimerReducer(initialRestTimer, { type: 'start', now: 0 });
  const paused = restTimerReducer(running, { type: 'pause', now: 2350 });
  assert.deepEqual(paused, { status: 'paused', remainingMs: 57650, seconds: 58 });
  assert.equal(restTimerReducer(paused, { type: 'tick', now: 82000 }), paused);

  const resumed = restTimerReducer(paused, { type: 'resume', now: 100000 });
  assert.deepEqual(resumed, { status: 'running', deadline: 157650, seconds: 58 });
  assert.equal(restTimerReducer(resumed, { type: 'tick', now: 157649 }).seconds, 1);
  assert.equal(restTimerReducer(resumed, { type: 'tick', now: 157650 }).seconds, 0);
});

test('a rest ends at zero even if the next update arrives after the deadline', () => {
  const running = restTimerReducer(initialRestTimer, { type: 'start', now: 0 });
  const finished = { status: 'finished', seconds: 0 };
  assert.deepEqual(restTimerReducer(running, { type: 'tick', now: 60000 }), finished);
  assert.deepEqual(restTimerReducer(running, { type: 'tick', now: 75000 }), finished);
  assert.deepEqual(restTimerReducer(running, { type: 'pause', now: 75000 }), finished);
  assert.equal(restTimerReducer(finished, { type: 'tick', now: 100000 }), finished);

  const nextRest = restTimerReducer(finished, { type: 'start', now: 100000 });
  assert.deepEqual(nextRest, { status: 'running', deadline: 160000, seconds: 60 });
});

test('reset restores the initial time and ignores ticks from the previous rest', () => {
  const running = restTimerReducer(initialRestTimer, { type: 'start', now: 0 });
  const paused = restTimerReducer(running, { type: 'pause', now: 10000 });
  const finished = restTimerReducer(running, { type: 'tick', now: 60000 });

  for (const state of [running, paused, finished]) {
    const reset = restTimerReducer(state, { type: 'reset' });
    assert.equal(reset, initialRestTimer);
    assert.equal(restTimerReducer(reset, { type: 'tick', now: 100000 }), initialRestTimer);
  }
});
