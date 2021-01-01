import Character from './app';

export default class Bowman extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
    this.validateName();
    this.validateType();
  }
}
