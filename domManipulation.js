export { selector, manipulation };

const selector = {
  instructStartButton: document.querySelector(".instruct-window-start-button"),
  instructMenuWin: document.querySelector(".instruct-window-wrap"),
};

const manipulation = {
  closeInstructMenu: () => {
    selector.instructMenuWin.setAttribute("class", "invisible");
  },
};
