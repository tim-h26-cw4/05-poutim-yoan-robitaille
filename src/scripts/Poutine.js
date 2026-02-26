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

    if (e.currentTarget.classList.contains('is-active')) {
      e.currentTarget.classList.remove('is-active');
    } else {
      e.currentTarget.classList.add('is-active');
    }

    this.selectedType = e.target.innerText;
    this.updatePhoto();
  }

  updatePhoto() {
    const img = this.element.querySelector('.poutine__image');

    if (img.classList.contains('is-active')) {
      this.selectedType = 'poutine';
      img.classList.remove('is-active');
    } else {
      img.classList.add('is-active');
    }
    img.src = `assets/images/${this.selectedType}.png`;
  }
}
