"use scrict";

let progressBar = document.querySelector(".progress-bar"); 
let bigCup = document.querySelector(".cup");
let state = "idle"; /* Переменная state отвечает за текущее состояние машины. возможные значения:
"idle" - ожидание
"cooking" - готовка
"ready"- кофе готов, но пока не взят.
После забора кофе state возвращается в значение "idle" */

  function makeCoffee(name, price, element) {
    if (state != "idle") {
      return;
    }
    let balanse = document.querySelector(".form-control");
    // console.log(name, price); //выводит на консоль вид кофе с ценой
    console.log(element); 
    // console.log(balanse.value); //получаем баланс 
      if (+balanse.value >= price) {
        balanse.value -= price; //balanse.value = balanse.value - price
        balanse.style.backgroundColor = ""; 
        changeDisplayText(`Ваш ${name} готовится`);
        state = "cooking";
        
        let coffeeCup = element.querySelector("img"); //ищем кружку
        let cupSrc = coffeeCup.getAttribute("src");
        console.log(cupSrc);
        bigCup.setAttribute("src", cupSrc);
        bigCup.style.display = "inline";
        
        let readyPercent = 0;
          let cookingInterval = setInterval(function() {
           readyPercent++;
          // console.log(readyPercent);
          bigCup.style.opacity = readyPercent + "%";
          progressBar.style.width = readyPercent + "%";
          changeDisplayText(`Ваш ${name} готовится. ${readyPercent}%`);
               if(readyPercent >= 100) {
                 clearInterval(cookingInterval);
                 changeDisplayText(`Ваш ${name} готов!`);
                 state = "realy";
                 bigCup.style.cursor = "pointer";
                 bigCup.onclick = function() {
                   takeCoffee();
                 };
               }
          }, 30);
      } else {
        balanse.style.backgroundColor = "red"; // при недостатка баланса выводит в красное
        changeDisplayText("Не достаточно средств");
        }
 }
    function takeCoffee() {
    bigCup.style.display = "none";
    bigCup.style.opacity = 0;
    
    progressBar.style.width = 0;
    
    changeDisplayText("Выберите кофе");
    bigCup.onclick = null;
    state = "idle";
    }
  function changeDisplayText(message) {
    let displayText = document.querySelector(".display-text");
    displayText.innerHTML = message;
  }