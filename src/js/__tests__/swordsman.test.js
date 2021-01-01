import Swordsman from '../swordsman';

test('function automatically set true values', () => {
  const swordsman = new Swordsman('Aragorn');

  expect({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Aragorn', type: 'Swordsman',
  }).toEqual(swordsman);
});

test('Name of character is true', () => {
  const swordsman = new Swordsman('Aragorn');
  const name = swordsman.validateName();

  expect(name).toBeTruthy();
});

test('Type of character is true', () => {
  const swordsman = new Swordsman('Aragorn');
  const type = swordsman.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const swordsman = new Swordsman('12345678901');
    swordsman.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const swordsman = new Swordsman('S');
    swordsman.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const swordsman = new Swordsman('Aragorn');
    swordsman.type = 'Blade';
    swordsman.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});

test('levelUp, all values is right changed', () => {
  const swordsman = new Swordsman('Aragorn');
  swordsman.levelUp();

  expect(swordsman).toEqual({
    attack: 48, defence: 12, health: 100, level: 2, name: 'Aragorn', type: 'Swordsman',
  });
});

test('levelUp, health < 100', () => {
  const swordsman = new Swordsman('Aragorn');
  swordsman.health = 1;
  swordsman.levelUp();

  expect(swordsman.health).toBe(100);
});

test('levelUp, health = 0', () => {
  function deadLevelUp() {
    const swordsman = new Swordsman('Aragorn');
    swordsman.health = 0;
    swordsman.levelUp();
  }

  expect(deadLevelUp).toThrowError(new Error('What is dead may never level up'));
});

test('damage, damage < health', () => {
  const swordsman = new Swordsman('Aragorn');
  swordsman.damage(100);

  expect(swordsman.health).toBe(10);
});

test('damage, damage > health', () => {
  const swordsman = new Swordsman('Aragorn');
  swordsman.health = 1;
  swordsman.damage(100);

  expect(swordsman.health).toBe(0);
});
