export default class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }

  validateName() {
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Wrong name!');
    } else {
      return true;
    }
  }

  validateType() {
    const characters = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof this.type === 'string' && characters.find((i) => i === this.type)) {
      return true;
    }
    throw new Error('Wrong type!');
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += 0.2 * this.attack;
      this.defence += 0.2 * this.defence;
      this.health = 100;
    } else {
      throw new Error('What is dead may never level up');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    this.health = (this.health < 0) ? 0 : this.health;
  }
}
