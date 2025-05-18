import { describe, it, expect } from 'vitest';
import { Character } from './character.js';

describe('Character', () => {
  const firstName = 'Gleb';
  const lastName = 'Super';
  const role = 'Rogue';
  const character = new Character(firstName, lastName, role);

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toHaveProperty('firstName', firstName);
    expect(character).toHaveProperty('lastName', lastName);
    expect(character).toHaveProperty('role', role);
  });

  it('should allow you to increase the level', () => {
    const level = character.level + 1;
    character.levelUp();

    expect(character).toHaveProperty('level', level);
  });

  it('should update the last modified date when leveling up', () => {
    const date = character.lastModified;
    character.levelUp();

    expect(character.lastModified).not.toBe(date);
  });
});
