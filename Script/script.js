//Ação do botão info
const info = document.getElementById("info");
const footer = document.getElementById("footer");
var onBool = false;
var which = 0;
info.addEventListener("click", function () {
  if (onBool == false) {
    footer.classList.remove("footerCardOffMov");
    footer.classList.add("footerCardOnMov");
    info.classList.add("infobtnOn");
    descriptCard.classList.add("footerDescriptOn");
    pixCard.classList.remove("pixOn");
    onBool = true;
  } else {
    if (which == 0) {
      footer.classList.remove("footerCardOnMov");
      footer.classList.add("footerCardOffMov");
      info.classList.remove("infobtnOn");
      descriptCard.classList.add("footerDescriptOn");
      pixCard.classList.remove("pixOn");
      onBool = false;
    } else {
      footer.classList.remove("footerCardOnMov");
      footer.classList.add("footerCardOffMov");
      info.classList.remove("infobtnOn");
      setTimeout(function () {
        info.classList.add("infobtnOn");
        pixCard.classList.remove("pixOn");
        descriptCard.classList.add("footerDescriptOn");
        footer.classList.remove("footerCardOffMov");
        footer.classList.add("footerCardOnMov");
        onBool = true;
      }, 2000);
    }
  }
  which = 0;
});

//Ação do botão do café
const pixBtn = document.getElementById("pixBtn");
const pixCard = document.getElementById("pixCard");
const descriptCard = document.getElementById("descriptCard");

pixBtn.addEventListener("click", function () {
  if (onBool == false) {
    footer.classList.remove("footerCardOffMov");
    footer.classList.add("footerCardOnMov");
    descriptCard.classList.remove("footerDescriptOn");
    pixCard.classList.add("pixOn");
    info.classList.add("infobtnOn");
    onBool = true;
  } else {
    if (which == 1) {
      footer.classList.remove("footerCardOnMov");
      footer.classList.add("footerCardOffMov");
      info.classList.remove("infobtnOn");
      descriptCard.classList.remove("footerDescriptOn");
      pixCard.classList.add("pixOn");
      onBool = false;
    } else {
      footer.classList.remove("footerCardOnMov");
      footer.classList.add("footerCardOffMov");
      info.classList.remove("infobtnOn");
      setTimeout(function () {
        info.classList.add("infobtnOn");
        descriptCard.classList.remove("footerDescriptOn");
        pixCard.classList.add("pixOn");
        footer.classList.remove("footerCardOffMov");
        footer.classList.add("footerCardOnMov");
        onBool = true;
      }, 2000);
    }
  }
  which = 1;
});
const pixButton = document.querySelector("button");
var clipboard = new ClipboardJS(".btn");

//Ação de copia do pix
clipboard.on("success", function (e) {
  console.log(e);
  pixButton.innerHTML = "Copiado";
  pixButton.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
});

clipboard.on("error", function (e) {
  console.log(e);
});
