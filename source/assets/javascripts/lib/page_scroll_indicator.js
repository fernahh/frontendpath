/*
 * Create by @alssndro
 * Repository: https://github.com/alssndro/page-scroll-indicator
 *
 * Adaptad by @fernahh
 */

var PageScrollIndicator = PageScrollIndicator || {};

PageScrollIndicator.createProgressBar = function(progressBarLocation, contentToTrack) {

  // Create the container div
  var progressContElement = document.createElement("div");
  progressContElement.id = "progress-cont";

  // Create the progress bar itself
  var progressBarElement = document.createElement("div");
  progressBarElement.id = "progress-bar";
  progressBarElement.style.width = "0%";

  progressContElement.appendChild(progressBarElement);

  var locationObject = document.getElementById(progressBarLocation);

  if (locationObject.children === undefined) {
    locationObject.appendChild(progressContElement);
  } else {
    locationObject.insertBefore(progressContElement, locationObject.firstChild);
  }

  // Event handler that updates the width of the progress bar based
  // on how far the contentToTrack elemt has been scrolled
  window.onscroll = function(event) {
    var pageHeight = window.innerHeight;
    var container = document.getElementById(contentToTrack);

    var adjustedHeight = container.clientHeight - pageHeight;

    var progress = ((window.pageYOffset / adjustedHeight) * 100);

    progressBarElement.style.width = progress + "%";
  }
}

