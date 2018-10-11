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


  function initialize() {
    navBar = document.getElementById('mainNav');
    navBarHeight= navBar.offsetTop;
  }

  // When the user scrolls the page, execute scrollCheck
  window.addEventListener('scroll', scrollCheck);

  // Get the navbar

  function scrollCheck() {
    if (window.scrollY >= navBarHeight) {
      navBar.classList.add("sticky")
    } else {
      navBar.classList.remove("sticky");
    }
  }
  // Add the navBarHeightclass to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
})();
