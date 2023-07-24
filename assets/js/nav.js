let nav = document.getElementById("nav-sm");
let navWrapper = document.getElementById("nav-wrapper");
let navBackdrop = document.getElementById("nav-backdrop");
let openNavButton = document.getElementById("open-nav");
let closeNavButton = document.getElementById("close-nav");

function openNav() {
  // show navigation
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    nav.classList.add("block");

    navWrapper.classList.add("w-full");

    navBackdrop.classList.remove("hidden");
    navBackdrop.classList.add("block");

    openNavButton.classList.remove("block");
    openNavButton.classList.add("hidden");

    closeNavButton.classList.remove("hidden");
    closeNavButton.classList.add("block");
  }
  // hide navigation
  else if (nav.classList.contains("block")) {
    closeNav();
  }
}

function closeNav() {
  nav.classList.remove("block");
  nav.classList.add("hidden");

  navWrapper.classList.remove("w-full");

  navBackdrop.classList.remove("block");
  navBackdrop.classList.add("hidden");

  openNavButton.classList.remove("hidden");
  openNavButton.classList.add("block");

  closeNavButton.classList.remove("block");
  closeNavButton.classList.add("hidden");
}

/*
Alpine.js Alpine.data configuration for navigation links
https://alpinejs.dev/globals/alpine-data
*/
let navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Features",
    url: "/",
  },
  {
    name: "Solutions",
    url: "/",
  },
  {
    name: "Resources",
    url: "/",
  },
  {
    name: "Pricing",
    url: "/",
  }
];
