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
 /*Define Global Variables*/



//  const sections = document.getElementsByTagName("section")
//  const navbar__list = document.querySelector('#navbar__list');
//  for (section of sections){
//      let myListItem = section.id;
//      let li = document.createElement('li');
//      let a = document.createElement('a');
//      a.textContent = myListItem;
//      a.href = '#' + section.id;
//      a.className = 'menu__link';
//      li.appendChild(a)
//      navbar__list.appendChild(li);
//  }
const navbar__list = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
let firstLink = true;
for (section of sections){
    let li = document.createElement('li');
    li.innerHTML =
    `<a href="#${section.id}" class="menu__link ${firstLink ? "link__active" : ""}" data-link="${section.dataset.nav}">
        ${section.dataset.nav}
    </a>`
    li.className = 'list'
    navbar__list.appendChild(li);
    firstLink = false;
}

document.addEventListener("DOMContentLoaded", () => {
    //  little hack to detect if the user is on ie 11
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    // get all the links with an ID that starts with 'section'
    const listOfLinks = document.querySelectorAll("a[href^='#section");
    // loop over all the links
    listOfLinks.forEach(function (link) {
      // listen for a click
      link.addEventListener('click',  () => {
        // toggle highlight on and off when we click a link
        listOfLinks.forEach( (link) => {
          if (link.classList.contains('highlighted')) {
            link.classList.remove('highlighted');
          }
        });
        link.classList.add('highlighted');
        // get the element where to scroll
        let ref = link.href.split('#section');
        ref = "#section" + ref[1];
        // ie 11 does not support smooth scroll, so we will simply scroll
        if (isIE11) {
          window.scrollTo(0, document.querySelector(ref).offsetTop);
        } else {
          window.scroll({
            behavior: 'smooth',
            left: 0,
            // top gets the distance from the top of the page of our target element
            top: document.querySelector(ref).offsetTop
          });
        }
      })
    })
  })

 /*End Global Variables*/

 /* Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


