export { listeners };
import * as DOM from "./domManipulation.js";
import { events } from "./eventHandlers.js";

const listeners = {
  init() {
    DOM.selector.instructStartButton.addEventListener("click", () => {
      events.closeInstruct();
      events.createBoard();
    });
  },
};
