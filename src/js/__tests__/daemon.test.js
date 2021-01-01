import Daemon from '../daemon';

test('function automatically set true values', () => {
  const daemon = new Daemon('Balrog');

  expect({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Balrog', type: 'Daemon',
  }).toEqual(daemon);
});

test('Name of character is true', () => {
  const daemon = new Daemon('Balrog');
  const name = daemon.validateName();

  expect(name).toBeTruthy();
});

test('Type of character is true', () => {
  const daemon = new Daemon('Balrog');
  const type = daemon.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const daemon = new Daemon('12345678901');
    daemon.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const daemon = new Daemon('D');
    daemon.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const daemon = new Daemon('Balrog');
    daemon.type = 'Demon';
    daemon.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});

test('levelUp, all values is right changed', () => {
  const daemon = new Daemon('Rakshas');
  daemon.levelUp();

  expect(daemon).toEqual({
    attack: 12, defence: 48, health: 100, level: 2, name: 'Rakshas', type: 'Daemon',
  });
});

test('levelUp, health < 100', () => {
  const daemon = new Daemon('Rakshas');
  daemon.health = 1;
  daemon.levelUp();

  expect(daemon.health).toBe(100);
});

test('levelUp, health = 0', () => {
  function deadLevelUp() {
    const daemon = new Daemon('Rakshas');
    daemon.health = 0;
    daemon.levelUp();
  }

  expect(deadLevelUp).toThrowError(new Error('What is dead may never level up'));
});

test('damage, damage < health', () => {
  const daemon = new Daemon('Rakshas');
  daemon.damage(100);

  expect(daemon.health).toBe(40);
});

test('damage, damage > health', () => {
  const daemon = new Daemon('Rakshas');
  daemon.health = 1;
  daemon.damage(100);

  expect(daemon.health).toBe(0);
});
