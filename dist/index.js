(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.SimpleDimModal = mod.exports;
  }
})(this, function (module) {
  'use strict';

  var body = document.body;
  var elementId = '__dimmmd_body_bg';

  function appendStyle() {

    var style = document.createElement('style');

    style.innerHTML = '\n  #' + elementId + ' {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    transition: opacity 0.2s;\n    opacity: 0;\n    z-index: -1;\n  }\n  #' + elementId + '.show{\n    opacity: 1;\n    z-index: 99;\n  }\n  #' + elementId + ' > div {\n    position: absolute;\n    top: 25%;\n    left: 25%;\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    overflow: auto;\n    display: table;\n  }\n  #' + elementId + ' > div > div {\n    margin: 10px;\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle;\n  }';

    document.head.appendChild(style);
  }

  var $bg = null;
  var $popup = null;

  function append() {

    appendStyle();

    var bg = document.createElement('div');
    bg.id = elementId;
    bg.innerHTML = '<div></div>';
    bg.addEventListener('click', hide);
    body.appendChild(bg);

    $bg = document.getElementById(elementId);
    $popup = document.querySelector('#' + elementId + '>div');
    $popup.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  function hide() {
    $bg.className = '';
  }
  function show(msg) {
    $popup.innerHTML = '<div>' + msg + '</div>';
    $bg.className = 'show';
  }

  append();

  module.exports = {
    show: show,
    hide: hide
  };
});
