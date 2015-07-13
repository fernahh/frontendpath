//= require 'smooth-scroll.js/dist/js/smooth-scroll.min'
//= require 'lib/page_scroll_indicator'

window.onload = function() {
  PageScrollIndicator.createProgressBar("guide-article", "guide-content");
  smoothScroll.init();
}
