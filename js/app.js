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
const sections = document.querySelectorAll("main section");
const navItem = document.getElementById("navbar__list");
const navItemFragment = document.createDocumentFragment();

//improve perfomance
let activeNav = undefined;
let activeSection = undefined;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const isNearTopViewport = element => {
  const rec = element.getBoundingClientRect();
  const headerHeight = document.querySelector(".page__header").offsetHeight;
  return rec.top <= headerHeight + 50 && rec.top >= 0 && rec.bottom > 100;
};

const activateMenu = menu => {
  // target the previous active menu
  if (activateMenu !== menu) {
    // make prev active menu inactive
    activeNav && activeNav.classList.remove("l__active");

    // activate menu
    menu.classList.add("l__active");

    activeNav = menu;
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// create the nav list dynamically
for (const section of sections) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", `#${section.getAttribute("id")}`);
  anchor.className = "menu__link";
  anchor.textContent = section.getAttribute("data-nav");
  li.appendChild(anchor);
  navItemFragment.appendChild(li);
}

// add the list content created to the page
navItem.appendChild(navItemFragment);

// Add 'active' class to section when near top of viewport
const updateActiveSection = () => {
  for (const section of sections) {
    if (isNearTopViewport(section)) {
      if (activeSection !== section) {
        // make prev active menu inactive
        activeSection && activeSection.classList.remove("l__active");

        // activate the section
        section.classList.add("l__active");

        activeSection = section;

        const menuToActivate = document.querySelector(
          `a[href="#${section.getAttribute("id")}"]`
        );

        activateMenu(menuToActivate);
      }

      return;
    }
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to anchor tag ID using scrollIntoView event
navItem.addEventListener("click", event => {
  event.preventDefault();

  // get linked section
  const section = document.getElementById(
    event.target.getAttribute("href").replace("#", "")
  );

  // scroll to linked section
  section.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("scroll", updateActiveSection);
