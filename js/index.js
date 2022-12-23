let loginCheck = document.querySelector("#login");
let ibendobuttonCheck = document.querySelector("#ibendo-button");
let loader = document.querySelector("#loader");
let pageHide = document.querySelector("#page-1");

windows.onload = loading;

let loading = () => {
  loader.style.visibility = "hidden";
  pageHide.style.visibility = "visible";
};

let login = () => {
  loginCheck.style.display = "none";
  ibendobuttonCheck.style.display = "flex";
};
