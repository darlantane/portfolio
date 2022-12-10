function setMode(oEvent) {
  document.body.classList.replace(
    aModes[Number(!this.checked)],
    aModes[Number(this.checked)]
  );
  document
    .getElementById("nav")
    .classList.replace(
      aModes[Number(!this.checked)],
      aModes[Number(this.checked)]
    );
  if (this.checked) {
    document.getElementById("nav").classList.replace("bg-light", "nav-dark");
    document.body.style.backgroundImage = 'url("./w-dots.png")';
  } else {
    document.getElementById("nav").classList.replace("nav-dark", "bg-light");
    document.body.style.backgroundImage = 'url("./dots.png")';
  }
  const cards = document.getElementsByClassName("card");
  for (const card of cards) {
    card.style.backgroundColor = this.checked
      ? "rgb(54, 54, 54)"
      : "rgb(240, 240, 240)";
  }
  localStorage.setItem("mode", aModes[Number(this.checked)]);
  this.parentNode.nextElementSibling.innerHTML = this.checked
    ? "Dark mode"
    : "White mode";
}

function loadMode() {
  let sMode = localStorage.getItem("mode");
  document.forms["mytheme"]["theme-mode"].checked = sMode == aModes[1];
  setMode.call(document.forms["mytheme"]["theme-mode"]);
}
let aModes = ["mode-white", "mode-dark"];
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add(aModes[0]);
  document.forms["mytheme"]["theme-mode"].addEventListener("click", setMode);
  loadMode();
});
