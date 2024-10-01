const btns = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('input[type="text"]');

btns.forEach((e) => {
  e.addEventListener("click", () => {
    switch (e.value) {
      case "AC":
        display.value = "";
        break;
      case "Del":
        display.value = display.value.toString().slice(0, -1);
        break;
      case "=":
        display.value = eval(display.value);
        break;
      default:
        display.value += e.value;
    }
  });
});
