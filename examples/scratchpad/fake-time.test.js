import { vi, describe, it, expect } from 'vitest';

vi.useFakeTimers();

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  it('should call callback after delay', () => {
    const cb = vi.fn();

    delay(cb);
    vi.advanceTimersByTime(1000); // or advanceTimersToNextTimer

    expect(cb).toHaveBeenCalled();
  });
});
