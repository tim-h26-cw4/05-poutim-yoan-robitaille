import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }
  init() {
    console.log('hello world');
    const poutines = this.element.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }
    const send = this.element.querySelector('.button-secondary');
    send.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerText = '';
    const nbpoutine = this.element.querySelectorAll('.button.is-active');
    const total = nbpoutine.length;
    console.log(total);
    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) : ${total}`;
    this.container.appendChild(p);
  }
}

// La ligne suivante devrait être au TOUT début du init() du Main
