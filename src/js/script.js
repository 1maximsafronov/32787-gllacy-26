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
