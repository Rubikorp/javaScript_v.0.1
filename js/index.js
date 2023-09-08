/*
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]

Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3

*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
 */

// Задание 1
let createArr = () => {
    let arr = [];
    for (let i = 0; i < 11; i++) {
        arr.push(i);
    }
    return arr;
}
let outputConsoleArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) console.log(`${arr[i]} - это ноль`);
        else if (arr[i]%2 !== 0) console.log(`${arr[i]} - нечетное число`);
        else console.log(`${arr[i]} - четное число`);
    }
}
// outputConsoleArr(createArr());

// Задание 2
let array = [1, 2, 3, 4, 5, 6, 7];
let array2 = array.filter(el => el !== 4 && el !== 5);
// console.log(array);
// console.log(array2);

// Задание 3
let createArrRandomEl = (length) => {
    let arr = [];
    for (let i = 0; i < length-1; i++) {
        arr.push(Math.floor(Math.random() * 9))
    }
    return arr
}
let arrRandomEl = createArrRandomEl(5);
// console.log(arrRandomEl)
let checkArr = (arr) => {
    console.log(`минимальный = ${Math.min.apply(null, arr)}`)
    if (arr.indexOf(3) !== -1) {
        console.log(`Элемент 3 есть в массиве`);
    } else console.log(`Элемент 3 нет в массиве`)
}
// checkArr(arrRandomEl);

// Задание 4
let outputConsoleMountain = () => {
    let arr = []
    for (let i = 0; i < 20; i++) {
        console.log(arr.join(''))
        arr.push('x');
    }
}
outputConsoleMountain();