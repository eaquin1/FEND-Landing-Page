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

/**
 * Define Global Variables
 *
*/
const listOfSections = document.querySelectorAll("section[data-nav]");
const navBar = document.getElementById("navbar__list");

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
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

 // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
 const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
 const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

 return (vertInView && horInView);
};

//toggling "your-active-state" if the header is in the viewport
const toggling = () => {
  for (header of listOfSections) {
    if (isInViewport(header)) {
      header.classList.add("your-active-class");
    } else {
      header.classList.remove("your-active-class")
    }
  }
};

//smooth scrolling when navigation item is chosen
const smoothScrolling = () => {
  let menuLink = document.querySelectorAll('.menu__link');
  menuLink.forEach(anchor => {
    anchor.addEventListener('click', function(element) {
      element.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
};

// build the nav
buildMenu(listOfSections);
// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', toggling, false);
// Scroll to anchor ID using scrollTO event
smoothScrolling();
