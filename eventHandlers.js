export { events };
import * as DOM from "./domManipulation.js";

const events = {
  closeInstruct: () => {
    DOM.manipulation.closeInstructMenu();
  },
  createBoard: () => {
    console.log("Test");
  },
};
