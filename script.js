import * as domManipulation from "./domManipulation.js";
import { listeners } from "./listeners.js";

document.addEventListener("DOMContentLoaded", () => {
  listeners.init();
});
