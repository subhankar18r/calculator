const btns = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('input[type="text"]');
const operators = ["+", "-", "*", "/", ".", "%"];

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
        if (operators.includes(display.value[display.value.length - 1])) {
          //check if the last element of the expression is any operator
          document.querySelector(".equal").classList.add("error");
          return;
        } else if (display.value != "") display.value = eval(display.value);
        break;

      default:
        document.querySelector(".equal").classList.remove("error");
        if (
          (display.value === "" ||
            operators.slice(0, 2).includes(display.value)) &&
          operators.slice(2).includes(e.value)
        ) {
          //  check if the first input is any operator other than + or -
          return;
        } else if (
          operators.includes(display.value[display.value.length - 1]) &&
          operators.includes(e.value)
        ) {
          // check if user enter the same operator twice
          display.value = display.value.slice(0, -1) + e.value;
        } else {
          display.value += e.value;
        }
    }
  });
});
