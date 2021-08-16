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

/* End Global Variables - Start Helper Functions */

/* End Helper Functions - Begin Main Functions */

// build the nav

const navbar__menu = documents.getElementsbyClassName("navbar__list");

// Add class 'active' to section when near top of viewport

const toggleButton = document.getElementsbyClassName("toggle-button");

togglebutton.addEventListener("click", () => {
  navbar__menu.toggle("active");
});

// Scroll to anchor ID using scrollTO event

/* End Main Functions - Begin Events */

// Build menu

// Scroll to section on link click

// Set sections as active
