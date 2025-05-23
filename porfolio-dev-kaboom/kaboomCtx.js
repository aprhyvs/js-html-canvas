// kaboomCtx.js
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

window.k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: false,
});
