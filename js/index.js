let loginCheck = document.querySelector("#login");
let ibendobuttonCheck = document.querySelector("#ibendo-button");
let loader = document.querySelector("#loader");
let pageHide = document.querySelector("#page-1");

let login = () => {
  loginCheck.style.display = "none";
  ibendobuttonCheck.style.display = "flex";
};

let ready = () => {
  pageHide.style.opacity = "1";
  loader.style.opacity = "0";
};
