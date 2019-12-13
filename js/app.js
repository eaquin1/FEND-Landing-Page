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
//const navItems = null;
const headers = document.querySelectorAll('h2');




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

//Check if element is in the viewport
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
 // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
 const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
 const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

 // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
 const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
 const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

 return (vertInView && horInView);
};

//toggling "your-active-state" if the header is in the is in the viewport
const toggling = () => {
  for (header of listOfSections) {
  if (isInViewport(header)) {
  header.classList.add("your-active-class");
} else {
  header.classList.remove("your-active-class")
  }
}
}


//toggle active state for reaching each header's top coordinate
//const toggle = () => {
//  const coordHeaders = getOffset(headers)
//}
//var x = getOffset( document.getElementById('yourElId') ).left; 
//Write function for what Event Listener will do



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
buildMenu(listOfSections);

// Add class 'active' to section when near top of viewport

//place an event listener on each header's coordinate
window.addEventListener('scroll', toggling, false);
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
