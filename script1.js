/*jshint esversion: 6 */


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();


let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses:{},
    income:[],
    savings:true
};

function chooseExpenses() {
    for(i = 0; i < 2; i++){
    
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?",'');
    
        if((typeof(a) === 'string') && (typeof(b) === 'string') && a != '' && b != '' && 
        a.length < 40){
            appData.expenses[a] = b;
            console.log("Done");
        }else{
            console.log("incorrect data");
            i = i-1;
            
        }
    }
}

chooseExpenses();


appData.moneyPerDay = (appData.budget/30).toFixed();
alert("Ежедневный бюджет: " + appData.moneyPerDay); 

if(appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 500 ){
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay >= 500){
    console.log("Высокий уровень достатка");
} else{
    console.log("Произошла ошибка");
}


function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма депозита?"),
            percent = +prompt("Какой процент депозита?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();