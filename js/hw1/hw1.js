'use sctrict'
// // 3) Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// a = prompt('Введите сторону квадрата: ');
// alert(`Периметр квадрата = ${a*4}`)

// //4) Запросите у пользователя радиус окружности и выведите
// // площадь такой окружности

// side = prompt('Введите радиус окружности: ');
// alert(`Площадь круга = ${a**2*Math.PI}`)

// // 5. Запросите у пользователя расстояние в км между двумя
// // городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
// // успеть вовремя.

// distance = prompt('Расстояние между городами: ')
// time = prompt('За сколько часов хотите добраться?: ')
// alert(`Требуемая скорость = ${distance/time} км/ч`)

// // Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
// // константе.

// const
//     exchange = 0.93;
// dollar = prompt('Доллары: ')
// alert(`${dollar}$ = ${dollar*exchange}€`)

// // 7. Пользователь указывает объем флешки в Гб. Программа
// // должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

// capacityGB = prompt('Flesh disk capacity in GBs: ')
// const 
//     capacityMB = capacityGB*1024
// alert(`${(capacityMB - capacityMB%840)/840} файлов размеров 840Мб поместятся на данную флешку`)

// // 8. Пользователь вводит сумму денег в кошельке и цену одной
// // шоколадки. Программа выводит сколько шоколадок может
// // купить пользователь и сколько сдачи у него останется.

// const
//     money = prompt('Сколько у вас денег?:'),
//     cost = prompt('Сколько стоит плитка шоколада?:');
// alert(`${(money - money%cost)/cost} шоколадок можно купить\n${money - cost*(money - money%cost)/cost}₽ сдачи останеться`);

// // 9. Запросите у пользователя трехзначное число и выведите
// // его задом наперед. Для решения задачи вам понадобится
// // оператор % (остаток от деления).

// num = prompt('Введите трехзначное число: ')
// alert(`Ваше число наоборот =${num%10}${(num%100 - num%10)/10}${(num-num%100)/100}`)

// 10. Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.

number = prompt('Введите целое число: ')
result = (number % 2 === 0) ? 'четное' : 'нечетное';
alert(`Введенное число ${result}`);