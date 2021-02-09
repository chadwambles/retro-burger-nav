let lines_container = document.querySelector(".lines-container");
let menu = document.querySelector(".menu");
let pointer = document.querySelector(".pointer");

lines_container.addEventListener("click", () => {
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    pointer.style.display = "none";
    setTimeout(() => {
      pointer.classList.remove("pointer-up");
      pointer.style.display = "block";
    }, 500);
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    pointer.style.display = "none";
    setTimeout(() => {
      pointer.classList.toggle("pointer-up");
      pointer.style.display = "block";
    }, 500);
  }
});
pointer.addEventListener("click", () => {
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    pointer.style.display = "none";
    setTimeout(() => {
      pointer.classList.remove("pointer-up");
      pointer.style.display = "block";
    }, 500);
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    pointer.style.display = "none";
    setTimeout(() => {
      pointer.classList.toggle("pointer-up");
      pointer.style.display = "block";
    }, 500);
  }
});
