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
console.log("landed?");
/**
 * Define Global Variables
 *
*/
const listOfSections = document.querySelectorAll("section[data-nav]");
const navBar = document.getElementById("navbar__list");
const navItems = null;




/**
 * End Global Variables
 * Start Helper Functions
 *
*/
const buildMenu = (sections) => {
  const fragment = document.createDocumentFragment();
  for (section of sections) {
    const newLi = document.createElement('li');
    newLi.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`
    fragment.appendChild(newLi);
  }
  navBar.appendChild(fragment);
};
//Write function for what Event Listener will do



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
buildMenu(listOfSections);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu


// Scroll to section on link click
//navItems.addEventListener("click", //helper function)
// Set sections as active
