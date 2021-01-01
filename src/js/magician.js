import Character from './app';

export default class Magician extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
    this.validateName();
    this.validateType();
  }
}
