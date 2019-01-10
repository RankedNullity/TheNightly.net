/**
 * Jaron Wang
 * Javascript for loading and maintaining the top navigation bar. Utilizes
* 2
 */
(function() {
  const navBarHeight = 50;

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window. When this event occurs,
   * the attached function (initialize) will be called.
   */
  let mainNav;
  window.onload = function() {
    mainNav = document.getElementById('Main-Nav');
  }

  // When the user scrolls the page, execute scrollCheck
  window.onscroll = function() {
    //console.log("y: " + window.pageYOffset);
    if(window.pageYOffset >= navBarHeight) {
      mainNav.classList.add("scrolled-nav");
    } else {
      mainNav.classList.remove("scrolled-nav");
    }
  }

})();
