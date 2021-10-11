
// Скрипт для попапа обратной связи
const buttonWriteUS = document.querySelector(".contacts__write-us");
const modalWriteUs = document.querySelector(".modal--write-us");

if (!!buttonWriteUS && !!modalWriteUs) {
  const closeModalWriteUs = modalWriteUs.querySelector(".modal__close");

  buttonWriteUS.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalWriteUs.classList.add("modal--show");
  });

  closeModalWriteUs.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal--show");
  });
}

// Скрипт для слайдера
const promoSlider = document.querySelector(`.promo__slider`);
if (!!promoSlider) {
  const promoSlides = promoSlider.querySelectorAll(`.slider__item`);
  const promoSliderToglers = promoSlider.querySelectorAll(`.slider__toggle`);

  const toggleSlide = (index) => {
    promoSlider.querySelector(`.slider__item--show`).classList.remove(`slider__item--show`);
    promoSlider.querySelector(`.slider__toggle--current`).classList.remove(`slider__toggle--current`);

    promoSliderToglers[index].classList.add(`slider__toggle--current`);
    promoSlides[index].classList.add(`slider__item--show`);
  }

  promoSliderToglers.forEach((item, index) => {
    item.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      if (!item.classList.contains(`slider__toggle--current`)) {
        toggleSlide(index);
      }
    })
  })
}
