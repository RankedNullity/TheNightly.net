/**
 * Jaron Wang
 * Javascript for the top navigation bar.
 */
(function() {
  const navBarHeight = 50;

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window. When this event occurs,
   * the attached function (initialize) will be called.
   */
  window.addEventListener("load", initialize);

  let mainNav;
  function initialize() {
    mainNav = document.getElementById('Main-Nav');
  }

  // When the user scrolls the page, execute scrollCheck
  window.addEventListener('scroll', scrollCheck);

  function scrollCheck() {
    //console.log("y: " + window.pageYOffset);
    if(window.pageYOffset >= navBarHeight) {
      mainNav.classList.add("scrolled-nav");
    } else {
      mainNav.classList.remove("scrolled-nav");
    }
  }

})();
