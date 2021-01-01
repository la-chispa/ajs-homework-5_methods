import Character from '../app';

test('function automatically set true values', () => {
  const character = new Character();

  expect({ health: 100, level: 1 }).toEqual(character);
});
