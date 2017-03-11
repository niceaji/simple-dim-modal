const body = document.body;
const elementId = '__dimmmd_body_bg';

function appendStyle() {

  let style = document.createElement('style');

  style.innerHTML = `
  #${elementId} {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    transition: opacity 0.2s;
    opacity: 0;
    z-index: -1;
  }
  #${elementId}.show{
    opacity: 1;
    z-index: 99;
  }
  #${elementId} > div {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: white;
    overflow: auto;
    display: table;
  }
  #${elementId} > div > div {
    margin: 10px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }`;

  document.head.appendChild(style);
}

let $bg = null;
let $popup = null;

function append() {

  appendStyle();

  let bg = document.createElement('div');
  bg.id = elementId;
  bg.innerHTML = `<div></div>`;
  bg.addEventListener('click', hide);
  body.appendChild(bg);

  $bg = document.getElementById(elementId);
  $popup = document.querySelector(`#${elementId}>div`);
  $popup.addEventListener('click', function(e){e.stopPropagation()});
}

function hide() {
  $bg.className='';
}
function show(msg) {
  $popup.innerHTML = `<div>${msg}</div>`;
  $bg.className='show';
}

append();

module.exports ={
  show: show,
  hide: hide
};
