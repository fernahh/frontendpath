/*
 * Create by @alssndro
 * Repository: https://github.com/alssndro/page-scroll-indicator
 *
 * Adaptad by @fernahh
 */

var PageScrollIndicator = PageScrollIndicator || {};

PageScrollIndicator.createIndicator = function(progressBarLocation, contentToTrack) {
  var progressContElement = document.createElement("div");
  progressContElement.id = "progress-cont";

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

  window.onscroll = function(event) {
    var pageHeight = window.innerHeight;
    var container = document.getElementById(contentToTrack);

    var adjustedHeight = container.clientHeight - pageHeight;

    var progress = ((window.pageYOffset / adjustedHeight) * 100);

    progressBarElement.style.width = progress + "%";
  }
}
