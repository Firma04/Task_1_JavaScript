'use strict';

let money = +prompt("Ваш бюджет на месяц?: ", " "),
    time = prompt("Введите дату в формате YYYY-MM-DD: ", " "),
    babkiOne = prompt("Введите обязательную статью расходов в этом месяце 1 - ", " "),
    willСost1 = +prompt("Во сколько обойдется? 1 - ", " "),
    babkiTwo = prompt("Введите обязательную статью расходов в этом месяце 2 - ", " "),
    willСost2 = +prompt("Во сколько обойдется? 2 - ", " ");

let appData = {
    cash: money,
    timeData: time,
    expenses: {
        OnePay1: willСost1,
        OnePay2: willСost2,
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

alert("Деньги за 1 день = " + (((appData.cash)-(appData.expenses.OnePay1+appData.expenses.OnePay2))/30 + "USD"));
