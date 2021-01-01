import Bowman from '../bowman';

test('function automatically set true values', () => {
  const bowman = new Bowman('Legolas');

  expect(bowman).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Legolas', type: 'Bowman',
  });
});

test('Name of character is true', () => {
  const bowman = new Bowman('Legolas');
  const name = bowman.validateName();

  expect(name).toBeTruthy();
});

test('Name of character is true', () => {
  const bowman = new Bowman('Legolas');
  const type = bowman.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const bowman = new Bowman('Legolas Greenleaf');
    bowman.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const bowman = new Bowman('B');
    bowman.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const bowman = new Bowman('Legolas');
    bowman.type = 'Archer';
    bowman.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});

test('levelUp, all values is right changed', () => {
  const bowman = new Bowman('Legolas');
  bowman.levelUp();

  expect(bowman).toEqual({
    attack: 30, defence: 30, health: 100, level: 2, name: 'Legolas', type: 'Bowman',
  });
});

test('levelUp, health < 100', () => {
  const bowman = new Bowman('Legolas');
  bowman.health = 1;
  bowman.levelUp();

  expect(bowman.health).toBe(100);
});

test('levelUp, health = 0', () => {
  function deadLevelUp() {
    const bowman = new Bowman('Legolas');
    bowman.health = 0;
    bowman.levelUp();
  }

  expect(deadLevelUp).toThrowError(new Error('What is dead may never level up'));
});

test('damage, damage < health', () => {
  const bowman = new Bowman('Legolas');
  bowman.damage(100);

  expect(bowman.health).toBe(25);
});

test('damage, damage > health', () => {
  const bowman = new Bowman('Legolas');
  bowman.health = 1;
  bowman.damage(100);

  expect(bowman.health).toBe(0);
});
