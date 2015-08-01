//= require 'smooth-scroll.js/dist/js/smooth-scroll.min'
//= require 'vendor/page_scroll_indicator'
//= require 'lib/smooth'
//= require 'lib/scroll_indicator'

var app = app || {};

app.run = function() {
  this.scrollIndicator();
  this.smooth();
}

window.onload = function() {
  app.run();
}
