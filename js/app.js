/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/* Define Global Variables */

const navbarMenu = document.querySelector("#navbar__list");

const sections = document.querySelectorAll("section");

/* End Global Variables - Start Helper Functions */

/* End Helper Functions - Begin Main Functions */

// build the nav

function buildNav() {
  for (let i = 0; i < sections.length; i++) {
    const element = document.createElement("li");
    const sectionTitle = sections[i].querySelector("h2");
    const link = document.createElement("a");
    link.innerHTML = sectionTitle.innerHTML;
    link.setAttribute("section-id", sections[i].id);
    link.className = "menu__link";
    element.appendChild(link);
    navbarMenu.appendChild(element);
  }
}

// Add class 'active' to section when near top of viewport

function setActiveClass() {
  for (let i = 0; i < sections.length; i++) {
    const position = sections[i].getBoundingClientRect();
    if (
      position.top <= 0 &&
      sections[i].clientHeight -
        (position.top < 0 ? position.top * -1 : position.top) >=
        0
    ) {
      sections[i].className = "active";
    } else {
      sections[i].className = "";
    }
  }
}

// Scroll to anchor ID using scrollTO event

function scrollTo(element) {
  const section = document.querySelector(
    "#" + element.getAttribute("section-id")
  );
  section.scrollIntoView({
    behavior: "smooth"
  });
}

/* End Main Functions - Begin Events */

// Build menu

buildNav();

// Scroll to section on link click

const menuItems = document.querySelectorAll("#navbar__list li a");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo(event.target);
  });
}

// Set sections as active

document.addEventListener("scroll", setActiveClass);
