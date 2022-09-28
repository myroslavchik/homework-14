// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let numberO = 0.1;
let numberT = 0.2;
let sum = (numberO + numberT).toFixed(1);
alert(sum);


// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
// добийся математично правильної відповіді.

let numberOne = +"1";
let numberTwo = 2;
alert(`${numberOne + numberTwo}`)

// Користувач вказує обсяг флешки в Гб.
// Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let amount = +prompt('Вкажіть обсяг флешки в гігабайтах');
let megabite = amount * 1024;
let result = (megabite / 820).toFixed(1);
let resultFloor = Math.floor(result);
alert(`${resultFloor} файлів розміром в 820 Мб поміщається на флешку.`);


// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let money = +prompt('Вкажіть суму грошей в гаманці');
let chocolate = +prompt(`Вкажіть ціну шоколадки`);
let resultD = Math.floor(money / chocolate);
let change = money - (chocolate * resultD);

alert(`Ви можете купити ${resultD.toFixed(0)} шоколадок(ки), у вас залишиться ${change.toFixed(1)} грн`);


// Запитай у користувача тризначне число і виведи його задом наперед.
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).


let number = prompt(`Вкажіть тризначне число`);
let units = number % 10;
let hundreds = Math.floor(number / 100);
let dozens = ((number - hundreds * 100 - 2) / 10).toFixed(0);
alert(`${units}${dozens}${hundreds}`)


// Користувач вводить суму вкладу в банк на 2 місяці,
// з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

let sumDeposit = +prompt(`Вкажіть суму вкладу`);
let duration = 2;
let percent = 5;
let profit = ((sumDeposit * 0.05) / 12) * 2;
alert(`Cума нарахованих відсотків ${profit.toFixed(1)} грн, на 2 місяці під 5% річних.`)


