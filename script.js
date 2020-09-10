"use scrict";

function makeCoffee(name, price) {
  let balanse = document.querySelector(".form-control");
  // console.log(name, price); //выводит на консоль вид кофе с ценой
  // console.log(balanse.value); //получаем баланс 
  if (+balanse.value >= price) {
    balanse.value -= price; //balanse.value = balanse.value - price
    balanse.style.backgroundColor = ""; 
    changeDisplayText(`Ваш ${name} готовится`);
  } else {
    balanse.style.backgroundColor = "red"; // при недостатка баланса выводит в красное
    changeDisplayText("Не достаточно средств");
  }
}
function changeDisplayText(message) {
  let displayText = document.querySelector(".display-text");
  displayText.innerHTML = message;
}