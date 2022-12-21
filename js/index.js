let page1 = document.querySelector("#page-1");
let page2 = document.querySelector("#page-2");
let page3 = document.querySelector("#page-3");
let sezume = document.querySelector("#sezume");

let lightBox = (a) => {
  if (a == 1) {
    sezume.style = "display: block;";
  }
  if (a == 2) {
    sezume.style = "display: none;";
  }
};

let changeBox = (a) => {
  if (a == 1) {
    page1.style = "display: block;";
    page2.style = "display: none;";
    page3.style = "display: none;";
  }
  if (a == 2) {
    page2.style = "display: block;";
    page1.style = "display: none;";
    page3.style = "display: none;";
  }
  if (a == 3) {
    page3.style = "display: block;";
    page2.style = "display: none;";
    page1.style = "display: none;";
  }
};
