

  const hamburger_menu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");
  const item = document.querySelector(".item-1");
  const item_2 = document.querySelector(".item-2");
  const item_3 = document.querySelector(".item-3");
  const item_4 = document.querySelector(".item-4");
  const item_5 = document.querySelector(".item-5");

  hamburger_menu.addEventListener("click", () =>{
    nav.classList.toggle("active");
    hamburger_menu.classList.toggle("active");
    item.classList.toggle("active");
    item_2.classList.toggle("active");
    item_3.classList.toggle("active");
    item_4.classList.toggle("active");
    item_5.classList.toggle("active");
  })


