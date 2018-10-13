/*
 * Template file for module pattern to get you started with Lab 03.
 */
(function() {
  "use strict";
  /*************************** Variables ******************************/
  let navBar;
  let navBarHeight;

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window. When this event occurs,
   * the attached function (initialize) will be called.
   */
  window.addEventListener("load", initialize);

  let mainNav;
  function initialize() {
    mainNav = document.getElementById('mainNav');
  }

  // When the user scrolls the page, execute scrollCheck
  window.addEventListener('scroll', scrollCheck);

  // Get the navbar

  function scrollCheck() {
    console.log("y: " + window.pageYOffset);
    if(window.pageYOffset >= sticky) {
      mainNav.classList.add("fixed-top");
    } else {
      mainNav.classList.remove("fixed-top");
    }
  }
  // Add the navBarHeightclass to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
})();
