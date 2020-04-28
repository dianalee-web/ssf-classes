export class planet {
  width: number;
  color: string;

  constructor(width, color) {
    this.width = width;
    this.color = color;
  }
}

export let krypton = new planet(25, 'red');
export let omicronPersei8 = new planet(1, 'green');
export let nemesis = new planet(2, 'blue');
