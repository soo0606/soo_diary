// js for filpbook
$(document).ready(function () {
  var flipbook = $("#flipbook");
  flipbook.turn({
    width: 1200,
height: 880,
page:1,
autoCenter: true,
duration: 1500
  });
  // page move
  window.goToPage = function (pageNumber) {
      flipbook.turn("page", pageNumber);
      return false;
  };
});
// sticker drag&drop
function dragndrop() {
  let xpos = '';
  let ypos = '';
  let decoSticker = '';
  function resetZ() {
    const imgEl = document.querySelectorAll('#sticker-container .deco-stickers');
    for (let i = imgEl.length - 1; i >= 0; i--) {
      imgEl[i].style.zIndex = 5;
    }
  }
  function moveStart(e) {
    decoSticker = e.target;
    xpos = e.offsetX === undefined ? e.layerX : e.offsetX;
    ypos = e.offsetY === undefined ? e.layerY : e.offsetY;
    decoSticker.style.zIndex = 10;
  }
  function moveDragOver(e) {
    e.preventDefault();
  }
  function moveDrop(e) {
    e.preventDefault();
    decoSticker.style.left = e.pageX - xpos + 'px';
    decoSticker.style.top = e.pageY - ypos + 'px';
  }
  function touchStart(e) {
    e.preventDefault();
    const decoSticker = e.target;
    const touch = e.touches[0];
    let moveOffsetX = decoSticker.offsetLeft - touch.pageX;
    let moveOffsetY = decoSticker.offsetTop - touch.pageY;
    resetZ();
    decoSticker.style.zIndex = 10;

    decoSticker.addEventListener('touchmove', function() {
      let posX = touch.pageX + moveOffsetX;
      let posY = touch.pageY + moveOffsetY;
      decoSticker.style.left = posX + 'px';
      decoSticker.style.top = posY + 'px';
    }, false);
  }
  document.querySelector('.page26').addEventListener('dragstart', moveStart, false);
  document.querySelector('.page26').addEventListener('dragover', moveDragOver, false);
  document.querySelector('.page26').addEventListener('drop', moveDrop, false);
  document.querySelector('.page26').addEventListener('touchstart', touchStart, false);
}

