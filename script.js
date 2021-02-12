function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list'] ul");
  const menuLogo = document.querySelector(".logo");

  function handleClick() {
    const classe = "ativo";
    this.classList.toggle(classe);
    menuList.parentElement.classList.toggle(classe);
    menuList.classList.toggle(classe);
    menuLogo.classList.toggle(classe);
  }

  menuButton.addEventListener("click", handleClick);
}
initMenuMobile();

function initSwiper() {
  const swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
initSwiper();

function initHeaderFixed() {
  const header = document.querySelector(".header");

  function changeMenuBackground(event) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", changeMenuBackground);
}
initHeaderFixed();
