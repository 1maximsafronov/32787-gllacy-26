console.log("Скрипты подключены");

var buttonWriteUS = document.querySelector(".contacts__write-us");
var modalWriteUs = document.querySelector(".modal--write-us");

if (!!buttonWriteUS && !!modalWriteUs) {
  var closeModalWriteUs = modalWriteUs.querySelector(".modal__close");

  buttonWriteUS.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal--show");
  });

  closeModalWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal--show");
  });
}
