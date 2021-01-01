import Undead from '../undead';

test('function automatically set true values', () => {
  const undead = new Undead('Khamul');

  expect({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Khamul', type: 'Undead',
  }).toEqual(undead);
});

test('Name of character is true', () => {
  const undead = new Undead('Khamul');
  const name = undead.validateName();

  expect(name).toBeTruthy();
});

test('Name of character is true', () => {
  const undead = new Undead('Khamul');
  const type = undead.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const undead = new Undead('12345678901');
    undead.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const undead = new Undead('U');
    undead.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const undead = new Undead('Khamul');
    undead.type = 'Not dead';
    undead.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});

test('levelUp, all values is right changed', () => {
  const undead = new Undead('Khamul');
  undead.levelUp();

  expect(undead).toEqual({
    attack: 30, defence: 30, health: 100, level: 2, name: 'Khamul', type: 'Undead',
  });
});

test('levelUp, health < 100', () => {
  const undead = new Undead('Khamul');
  undead.health = 1;
  undead.levelUp();

  expect(undead.health).toBe(100);
});

test('levelUp, health = 0', () => {
  function deadLevelUp() {
    const undead = new Undead('Khamul');
    undead.health = 0;
    undead.levelUp();
  }

  expect(deadLevelUp).toThrowError(new Error('What is dead may never level up'));
});

test('damage, damage < health', () => {
  const undead = new Undead('Khamul');
  undead.damage(100);

  expect(undead.health).toBe(25);
});

test('damage, damage > health', () => {
  const undead = new Undead('Khamul');
  undead.health = 1;
  undead.damage(100);

  expect(undead.health).toBe(0);
});
