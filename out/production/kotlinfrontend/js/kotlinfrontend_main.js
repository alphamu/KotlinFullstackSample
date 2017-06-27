if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlinfrontend_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinfrontend_main'.");
}
var kotlinfrontend_main = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda$lambda(closure$input) {
    return function (event) {
      fetch(closure$input.value);
    };
  }
  function main$lambda(it) {
    var tmp$, tmp$_0;
    fetch('1');
    var head = document.getElementsByTagName('head');
    (tmp$ = head[0]) != null ? tmp$.appendChild(createStylesheetLink('style.css')) : null;
    var input = Kotlin.isType(tmp$_0 = document.getElementById('count_id'), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    var button = document.getElementById('button_id');
    return button != null ? button.addEventListener('click', main$lambda$lambda(input)) : null;
  }
  function main(args) {
    window.onload = main$lambda;
  }
  function fetch$lambda(closure$req) {
    return function (event) {
      var tmp$;
      var text = closure$req.responseText;
      println(text);
      var objArray = JSON.parse(text);
      var textarea = Kotlin.isType(tmp$ = document.getElementById('textarea_id'), HTMLTextAreaElement) ? tmp$ : Kotlin.throwCCE();
      textarea.value = '';
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== objArray.length; ++tmp$_0) {
        var element = objArray[tmp$_0];
        var message = element['message'];
        textarea.value = textarea.value + (Kotlin.toString(message) + '\n');
      }
    };
  }
  function fetch(count) {
    var url = 'http://localhost:8080/api/ping/' + count;
    var req = new XMLHttpRequest();
    req.onloadend = fetch$lambda(req);
    req.open('GET', url, true);
    req.send();
  }
  function createStylesheetLink(filePath) {
    var style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', filePath);
    return style;
  }
  _.main_kand9s$ = main;
  _.fetch_61zpoe$ = fetch;
  _.createStylesheetLink_61zpoe$ = createStylesheetLink;
  main([]);
  Kotlin.defineModule('kotlinfrontend_main', _);
  return _;
}(typeof kotlinfrontend_main === 'undefined' ? {} : kotlinfrontend_main, kotlin);

//# sourceMappingURL=kotlinfrontend_main.js.map
