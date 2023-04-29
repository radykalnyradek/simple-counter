const btns = document.querySelectorAll(".btn");
const spanValue = document.querySelector("#value");

let counter = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    btnClass = event.currentTarget.classList;
    if (btnClass.contains("decrease")) {
      counter--;
    } else if (btnClass.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    spanValue.innerHTML = counter;
    valueColor();
  });
});

function valueColor() {
  if (counter > 0) {
    spanValue.style.color = "green";
  } else if (counter < 0) {
    spanValue.style.color = "red";
  } else {
    spanValue.style.color = "var(--clr-grey-1)";
  }
}
