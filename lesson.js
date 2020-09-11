"use script";
//Методы поиска по DOM-элементам

// let images = document.getElementsByTagName("img");
// console.log(images);
// let coffeeList = document.getElementsByTagName("coffee-item");
// console.log(coffeeList);
// let coffee = document.getElementsByTagName("coffee-machine");
// console.log(coffee);

// //Современные методы поиска

// let atm = document.querySelector(".atm-container img");
// console.log(atm);
// let coffeeItem = document.querySelector(".coffee-item");
// console.log(coffeeItem);

// let coffeeNames = document.querySelectorAll("span");
// console.log(coffeeNames);

// let btn = document.querySelectorAll(".btn");
// console.log(btn);

// let cup = document.querySelectorAll(".coffee-item img");
// console.log(cup);

// let buttons = document.querySelectorAll(".coffee-item");
// let cappuccinoButton = buttons[1];
// console.log(cappuccinoButton);

// let coffeeList = cappuccinoButton.parentElement;
// console.log(coffeeList);
// let nextCoffee = cappuccinoButton.nextElementSibling;
// console.log(nextCoffee);
// let previousCoffee = cappuccinoButton.previousElementSibling;
// console.log(previousCoffee);
// let cappuccinoChildren = cappuccinoButton.children;
// console.log(cappuccinoChildren);
// let cappuccinoText = cappuccinoButton.querySelector("span");
// console.log(cappuccinoText);

//Изменение элементов
//Изменение CSS-стилей

// let bigCup = document.querySelector(".cup");
// console.log(bigCup.style.width);
// bigCup.style.width = "300px";

// bigCup.style.display = "none";
// bigCup.style.display = ""; //вернуть как было

// bigCup.style.backgroundColor = "red";

// bigCup.style.transition = "transform 5s";
// setTimeout(function() {
// bigCup.style.transform = "rotate(180deg)";
// }, 5000);

//Изменение атрибутов

// let bigCup = document.querySelector(".cup");
// console.log(bigCup.hasAttribute("src"));
// let cupSrc = bigCup.getAttribute("src");
// console.log(cupSrc);
// bigCup.setAttribute("src", "img/cappuccino.png");

// bigCup.removeAttribute("src");

//1 вариант - espresso
// let bigCup = document.querySelector(".cup");
// console.log(bigCup.hasAttribute("src"));
// let cupSrc = bigCup.getAttribute("src");
// console.log(cupSrc);
// bigCup.setAttribute("src", "img/espresso.png");

// 2 вариант - espresso
// let btns = document.querySelectorAll(".coffee-item");
// let espresso = btns[2];
// let espressoImage = espresso.querySelector("img");
// let espressoSrc = espressoImage.getAttribute("src");
// let bigCup = document.querySelector(".cup");
// bigCup.setAttribute("src", "img/espresso.png");

//Изменение внутреннего содержимого элемента

// let displayText = document.querySelector(".display-text");
// console.log(displayText.innerText);
// displayText.innerText = "Ваш <b>Капучино</b> готовится"; //не работает <b>Капучино</b>
// displayText.innerHTML = "Ваш <b>Латтэ</b> готовится"; //работает <b>Латтэ</b>

// let coffeeList = document.querySelector(".coffee-list"); // ``- перенос текста, копирование
// for(let i=0; i<2; i++) {
//   coffeeList.innerHTML = coffeeList.innerHTML + ` 
//           <div class="coffee-item">
//             <img src="img/americano.png" alt="Американо">
//             <span>Американо - 50руб.</span>        
//           </div>
//   `;
// }


// Изменение классов

// let changeBtn = document.querySelector(".btn");
// // console.log(changeBtn.className);
// // changeBtn.className = "btn btn-success btn-block"; //изменение цвета кнопки

// console.log(changeBtn.classList);
// changeBtn.classList.add("p-3"); //добавить класс
// changeBtn.classList.remove("my-2"); //удалить класс
// console.log(changeBtn.classList.contains("btn")); //Проверить наличие

//планирование
// let coffeeOper = document.querySelector(".coffee-oper");
// setTimeout(function() {
//   coffeeOper.style.backgroundColor = "red";
// }, 3000);

// setTimeout(function() {
//   coffeeOper.style.backgroundColor = "";
// }, 5000);

// let displayInterval = setInterval(function() {
//   let display = document.querySelector(".display");
//   display.classList.toggle("bg-danger");
// }, 1000);

// setTimeout(function() {
// clearInterval(displayInterval);  
// }, 6000);


// function changeDisplayText() {
//   let display = document.querySelector(".display");
//   display.innerHTML = "Ваш кофе готовится";
// }

// //setTimeout(changeDisplayText, 5000);
 
// setTimeout(function() {
// changeDisplayText(); 
// }, 5000);

//События и слушатели событий
/*
click - наж лев клавиши мышки
mouseover - наведение мышкой 
mousdown -
mousout -
dblclick -
contextmenu -
---------------
focus -
change -
keydown - 
keyp -
transitionend - 
submit -
*/
 
 //1.Вешаем событие с помощью атрибута HTML
 
 /* 
 <div onclick="showMessage()">Нажми на меня</div>  - атрибут
 */
 
 //2. Вешаем событие через св-во
 
// let  changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
//   alert("Даем сдачу");
// };
 
// changeBtn.onclick = alert("Даем сдачу"); // дает сразу

//3. Метод addEventListener(event, function)

// let  changeBtn = document.querySelector(".btn");
// changeBtn.addEventListener("click", function() {
//   alert("Даем сдачу");
// });

// changeBtn.addEventListener("click", function() {
//   console.log("Даем сдачу");
// });

//Снимаем слушателя событий
// let  changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
//   alert("Даем сдачу");
// };
// changeBtn.onclick = null;     //кнопка становится не активной

// let  changeBtn = document.querySelector(".btn");
// function handler() {
//   alert("Даем сдачу");
// }
//   changeBtn.addEventListener("click", handler);
//   changeBtn.removeEventListener("click", handler);



// let clickCup = document.querySelector(".cup");
// clickCup.onclick = function() {
// let display = document.querySelector(".display");
//   display.style.backgroundColor = "red";
// };
// let coffeeOper = document.querySelector(".coffee-oper");
// setTimeout(function() {
//   coffeeOper.style.backgroundColor = "red";
// }, 3000);

let coffeeButtons = document.querySelectorAll(".coffee-item");
for (let i = 0; i < coffeeButtons.length; i++) {
  coffeeButtons[i].onclick = function() {    //возвращает объект
  console.log(this);
  // makeCoffee("Американо", 25, this)
  };
}



