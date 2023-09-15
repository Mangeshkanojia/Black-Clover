document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector("[data-collapse-toggle='mobile-menu-2']");
    const mobileMenu = document.getElementById("mobile-menu-2");

    mobileMenuButton.addEventListener("click", function () {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        mobileMenuButton.querySelectorAll("svg")[0].classList.add("hidden");
        mobileMenuButton.querySelectorAll("svg")[1].classList.remove("hidden");
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenuButton.querySelectorAll("svg")[0].classList.remove("hidden");
        mobileMenuButton.querySelectorAll("svg")[1].classList.add("hidden");
      }
    });
  });