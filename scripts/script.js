var hamburgerMenu = document.querySelector("body nav");
var hamburgerOpenButton = document.querySelector(
  "body header > ul > li:nth-of-type(3) button:nth-of-type(1)"
);
var hamburgerCloseButton = document.querySelector(
  "body header > ul > li:nth-of-type(3) button:nth-of-type(2)"
);

var hamburgerActivateButton1 = document.querySelector(
  "body header > ul > ul > li:nth-of-type(1)"
);
var subHamburgerActivateButton1 = document.querySelector(
  "body nav > ul:nth-of-type(1) > li:nth-of-type(1)"
);
var subHamburgerMenu1 = document.querySelector(
  "body nav > ul:nth-of-type(2) > ul:nth-of-type(1)"
);

var hamburgerActivateButton2 = document.querySelector(
  "body header > ul > ul > li:nth-of-type(2)"
);
var subHamburgerActivateButton2 = document.querySelector(
  "body nav > ul:nth-of-type(1) > li:nth-of-type(2)"
);
var subHamburgerMenu2 = document.querySelector(
  "body nav > ul:nth-of-type(2) > ul:nth-of-type(2)"
);

var hamburgerActivateButton3 = document.querySelector(
  "body header > ul > ul > li:nth-of-type(3)"
);
var subHamburgerActivateButton3 = document.querySelector(
  "body nav > ul:nth-of-type(1) > li:nth-of-type(3)"
);
var subHamburgerMenu3 = document.querySelector(
  "body nav > ul:nth-of-type(2) > ul:nth-of-type(3)"
);

function setHamburgerMenuActive() {
  hamburgerCloseButton.classList.remove("hidden");
  hamburgerMenu.classList.remove("hidden");
}

function setHamburgerMenuActive1() {
  setHamburgerMenuActive();
  subHamburgerMenu1.classList.remove("hidden");
  subHamburgerMenu2.classList.add("hidden");
  subHamburgerMenu3.classList.add("hidden");
}
hamburgerOpenButton.addEventListener("click", setHamburgerMenuActive1);
hamburgerActivateButton1.addEventListener("click", setHamburgerMenuActive1);
subHamburgerActivateButton1.addEventListener("click", setHamburgerMenuActive1);

function setHamburgerMenuActive2() {
  setHamburgerMenuActive();
  subHamburgerMenu1.classList.add("hidden");
  subHamburgerMenu2.classList.remove("hidden");
  subHamburgerMenu3.classList.add("hidden");
}
console.log(hamburgerActivateButton2);
hamburgerActivateButton2.addEventListener("click", setHamburgerMenuActive2);
subHamburgerActivateButton2.addEventListener("click", setHamburgerMenuActive2);

function setHamburgerMenuActive3() {
  setHamburgerMenuActive();
  subHamburgerMenu1.classList.add("hidden");
  subHamburgerMenu2.classList.add("hidden");
  subHamburgerMenu3.classList.remove("hidden");
}

hamburgerActivateButton3.addEventListener("click", setHamburgerMenuActive3);
subHamburgerActivateButton3.addEventListener("click", setHamburgerMenuActive3);

function setHamburgerMenuInactive() {
  hamburgerCloseButton.classList.add("hidden");
  hamburgerMenu.classList.add("hidden");
}

hamburgerCloseButton.addEventListener("click", setHamburgerMenuInactive);
