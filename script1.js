/*jshint esversion: 6 */

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let answ1_1 = prompt("Введите обязательную статью расходов в этом месяце");
let answ1_2 = prompt("Во сколько обойдется?");


let appData = {
    budget : money,
    timeData : time,
    expenses : {
        answ1_1:answ1_2
    }
};

alert("Бюджет на день" + money/30);