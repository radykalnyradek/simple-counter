const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");
const spanValue = document.querySelector("#value");

let counter = 0;

decreaseBtn.addEventListener("click", () => {
  counter--;
  spanValue.innerHTML = counter;
  valueColor();
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  spanValue.innerHTML = counter;
  valueColor();
});

increaseBtn.addEventListener("click", () => {
  counter++;
  spanValue.innerHTML = counter;
  valueColor();
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
