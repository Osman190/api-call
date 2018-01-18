'use strict';
class XkcdComic {
  constructor() {
    // Do not remove the next line - this is a needed workaround!
    this.addCorsHeader();
    $.getJSON("https://api.chucknorris.io/jokes/categories")
      .done((data) => {
        console.log(data)
        data.forEach(function (element) {
          document.getElementById('dot').innerHTML += element
        }
      )})
  }

  addCorsHeader() {
    jQuery.ajaxPrefilter(function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
      }
    });
  }
}

let bla = new XkcdComic();