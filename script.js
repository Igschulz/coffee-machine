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
          requestAnimationFrame(function() {
          bigCup.style.opacity = readyPercent + "%";
          progressBar.style.width = readyPercent + "%";
          });
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
  //-----------------Drag'n'Drop--------------------------------------//
  
  let money = document.querySelectorAll(".money img");
  for(let i = 0; i < money.length; i++) {
    let bill = money[1]; // 
  }
  for(let bill of money) {
    bill.onmousedown = function(event) {
      takeMoney(event, bill);
    };
  }
  function takeMoney(event, bill) {
     event.preventDefault(); //приостанавливает перемещения купюры (призрака)
     let mousX = event.clientX;
     let mousY = event.clientY;
     bill.style.transform = "rotate(90deg)";
     let billCoords = bill.getBoundingClientRect();
     console.log(billCoords);
     
     
     bill.style.position = "absolute";
     
     
     window.onmousemove = function(event) {
      let mousX = event.clientX;
      let mousY = event.clientY; 
      bill.style.top = mousY - billCoords.width/2 + "px";
      bill.style.left = mousX - billCoords.height/2 + "px";
     };
     bill.onmouseup = function(event) {
       window.onmousemove = null;
       if ( inAtm(bill) ) {
       let balance = document.querySelector(".form-control");
       balance.value = +balance.value + +bill.dataset.cost;
       bill.remove();
       }
     };
  }
   function inAtm(bill) {
    let atm = document.querySelector(".atm");
    let atmCoords = atm.getBoundingClientRect();
    let billCoords = bill.getBoundingClientRect();
    
    let atmLeftTopX = atmCoords.x;
    let atmLeftTopY = atmCoords.y;
    
    let atmLeftBottomX = atmCoords.x;
    let atmLeftBottomY = atmCoords.y + atmCoords.height/3;
    
    let atmRightTopX = atmCoords.x + atmCoords.width;
    let atmRightTopY = atmCoords.y;
    
    let billLeftTopX = billCoords.x;
    let billLeftTopY = billCoords.y;
    
    let billRightTopX = billCoords.x + billCoords.width;
    let billRightTopY = billCoords.y;
    
    // console.log([atmLeftTopX, atmLeftTopY, atmLeftBottomX, atmLeftBottomY, atmRightTopX, atmRightTopY, billLeftTopX, billLeftTopY, billRightTopX, billRightTopY]);
    if (billLeftTopX > atmLeftTopX
      && billLeftTopY > atmLeftTopY
      && billLeftTopY < atmLeftBottomY
      && billRightTopX < atmRightTopX)
    
   {
     return true;
   } else {
     return false;
   }
}
 //----------------Создание элементов----------------------- 
 let changeButton = document.querySelector(".change-button");
 changeButton.onclick = function() {
   takeChange();
 };
function takeChange() {
  let balance = document.querySelector (".form-control");
  if (balance.value >= 10) {
    balance.value -= 10;
    createCoin("10");
    return setTimeout(function() {
      takeChange();
    }, 300);
    
  } else if (balance.value >= 5) {
    balance.value -= 5;
    createCoin("5");
    return setTimeout(function() {
      takeChange();
    }, 300);
  } else if (balance.value >= 2) {
    balance.value -= 2;
    createCoin("2");
    return setTimeout(function() {
      takeChange();
    }, 300); 
  } else if (balance.value >= 1) {
    balance.value -= 1;
    createCoin("1");
    return setTimeout(function() {
      takeChange();
    }, 300);
  }
}
 function createCoin(nominal) {
   let coinSrc = "";
   switch (nominal) {
     case "10":
       coinSrc = "img/10rub.png";
       break;
      case "5":
       coinSrc = "img/5rub.png";
       break;
       case "2":
       coinSrc = "img/2rub.png";
       break;
       case "1":
       coinSrc = "img/1rub.png";
       break;
       default:
       return console.error("Неправильный номинал монеты");
       
   }
   let coin = document.createElement("img");
   coin.setAttribute("src", coinSrc);
   coin.style.width = "50px";
   coin.style.heigth = "50px";
   coin.style.position = "absolute";
   let changeContainer = document.querySelector(".change-container");
   let containerCoords = changeContainer.getBoundingClientRect();
   coin.style.top = Math.floor(Math.random() * (containerCoords.height - 50)) + "px";
   coin.style.left = Math.floor(Math.random() * (containerCoords.width - 50)) + "px";
   coin.style.transition = "transform 300ms ease-in";
   coin.style.transform = "translateY(-40%)";
   setTimeout(function() {
    coin.style.transform = "translateY(0%)";
   }, 30);
   changeContainer.append(coin);
   /*внутрь в начало - prepend
   рядом перед - before
   рядом после - after
   вместо - replaceWith
   */
 } 
  
  
  
  
  
  
  
  
  