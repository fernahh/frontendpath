//= require 'vendor/i18n'
//= require 'vendor/page_scroll_indicator'
//= require 'smooth-scroll.js/dist/js/smooth-scroll.min'
//= require 'lib/langs'
//= require 'lib/smooth'
//= require 'lib/scroll_indicator'

var app = app || {};

app.run = function() {
  this.smooth();
  this.langs();

  if (!document.getElementsByTagName("body")[0].className.match(/index/)) {
    this.scrollIndicator();
  }
}

window.onload = function() {
  app.run();
}
