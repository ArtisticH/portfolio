let target;
let shiftX;
let shiftY;
let zIndex = '20';

function DragDrop(e) {
  target = e.currentTarget;
  shiftX = e.clientX - target.getBoundingClientRect().left;
  shiftY = e.clientY - target.getBoundingClientRect().top;
  target.style.zIndex = `${++zIndex}`;
  moveAt(e.clientX, e.clientY);
  document.addEventListener("pointermove", pointerMove);
  target.addEventListener("pointerup", pointerUp);
  target.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
}

function moveAt(clientX, clientY) {
  target.style.left = clientX - shiftX + "px";
  target.style.top = clientY - shiftY - 25 + "px";
}

function pointerMove(e) {
  moveAt(e.clientX, e.clientY);
}

function pointerUp() {
  document.removeEventListener("pointermove", pointerMove);
  target.removeEventListener("pointerup", pointerUp);
}

export { DragDrop }

