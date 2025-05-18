import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

// also should add corner cases with null, undefined and etc.
describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe('subtract', () => {
  it('should subtract one positive numbers from another', () => {
    expect(subtract(2, 2)).toBe(0);
  });
});

describe('multiply', () => {
  it('should multiply one positive numbers by another', () => {
    expect(multiply(2, 2)).toBe(4);
  });
});

describe('divide', () => {
  it('should divide one positive numbers by another', () => {
    expect(divide(2, 2)).toBe(1);
  });
});
