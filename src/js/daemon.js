import Character from './app';

export default class Daemon extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
    this.validateName();
    this.validateType();
  }
}
