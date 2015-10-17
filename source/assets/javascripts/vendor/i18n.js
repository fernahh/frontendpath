var I18n = I18n || {};

I18n.init = function() {
  var langs = new Array("/en", "guide", "guia"),
    pathname = window.location.pathname;

  for (var i = 0; i < langs.length; i++) {
    if (pathname.indexOf(langs[i]) > -1) {
      if (langs[i] === "/en" || langs[i] === "guide") {
        this.setEnglish();
      } else {
        this.setPortuguese();
      }
    }
  };

  if (pathname === "/") {
    this.setPortuguese();
  }
}

I18n.setEnglish = function() {
  this.addDisableClassLang("lang-pt");
  document.documentElement.lang = "en";
}

I18n.setPortuguese = function() {
  this.addDisableClassLang("lang-en");
  document.documentElement.lang = "pt-BR";
}

I18n.addDisableClassLang = function(el) {
  this.el = document.getElementById(el);
  this.el.className += " lang--is-disable";
}
