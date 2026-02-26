export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(e) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    e.currentTarget.classList.add('is-active');
    this.selectedType = e.target.innerText;
    this.updatePhoto();
  }

  updatePhoto() {
    const img = this.element.querySelector('.poutine__image');
    img.classList.add('is-active');
    img.src = `assets/images/${this.selectedType}.png`;
  }
}
