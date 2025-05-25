import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {
    render(<AlertButton />);
  });

  afterEach(() => {});

  it.todo('should render an alert button', async () => {});

  it('should trigger an alert', async () => {
    const message = 'Hello';
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    const input = screen.getByTestId('message-input');
    const btn = screen.getByTestId('message-btn');

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, message);
      await userEvent.click(btn);
    });

    expect(alertSpy).toHaveBeenCalledWith(message);
    expect(alertSpy).toHaveBeenCalledTimes(1);
  });
});
