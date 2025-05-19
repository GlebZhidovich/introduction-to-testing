import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');

    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decBtn = screen.getByTestId('btn-decrement');
    const decReset = screen.getByTestId('btn-reset');

    expect(decBtn).toBeDisabled();
    expect(decReset).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const counterUnit = screen.getByTestId('counter-unit');
    const counter = screen.getByTestId('counter-count');

    expect(counter).toHaveTextContent('0');
    expect(counterUnit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count');
    const incBtn = screen.getByTestId('btn-increment');

    expect(counter).toHaveTextContent('0');

    await userEvent.click(incBtn);

    expect(counter).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    const counterUnit = screen.getByTestId('counter-unit');
    const counter = screen.getByTestId('counter-count');
    const incBtn = screen.getByTestId('btn-increment');

    expect(counter).toHaveTextContent('0');

    await userEvent.click(incBtn);

    expect(counter).toHaveTextContent('1');
    expect(counterUnit).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count');
    const incBtn = screen.getByTestId('btn-increment');
    const decBtn = screen.getByTestId('btn-decrement');

    expect(decBtn).toBeDisabled();

    await userEvent.click(incBtn);

    expect(decBtn).not.toBeDisabled();
    expect(counter).toHaveTextContent('1');

    await userEvent.click(decBtn);

    expect(counter).toHaveTextContent('0');
  });

  it('does not allow decrementing below 0', async () => {
    const counter = screen.getByTestId('counter-count');
    const decBtn = screen.getByTestId('btn-decrement');

    await userEvent.click(decBtn);

    expect(counter).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count');
    const incBtn = screen.getByTestId('btn-increment');
    const resetBtn = screen.getByTestId('btn-reset');
    const clickAmount = 2;

    // act is wait page rerender
    await act(async () => {
      await Promise.all(
        new Array(clickAmount).fill().map(() => userEvent.click(incBtn)),
      );
    });

    expect(counter).toHaveTextContent(clickAmount);

    await userEvent.click(resetBtn);

    expect(counter).toHaveTextContent('0');
  });

  it('updates the document title based on the count', async () => {
    const counter = screen.getByTestId('counter-count');
    const incBtn = screen.getByTestId('btn-increment');

    await userEvent.click(incBtn);

    expect(counter).toHaveTextContent('1');
    expect(document.title).toEqual(expect.stringContaining('1 day'));
  });
});
