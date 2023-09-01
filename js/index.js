/* Задание 1 */
/* Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3 */

let num1 = prompt("Введите число 1: ");
let num2 = prompt("Введите число 2: ");

let numberComparison = (num1, num2) => {
    if (num1 !== "" && num2 !== "") {
        num1 = +num1; num2 = +num2;
        num1 <= 1 ? console.log(`${num1} меньше или равно 1`) : console.log(`${num1} больше 1`);
        num2 >= 3 ? console.log(`${num1} больше или равно 3`) : console.log(`${num2} меньше 3`);
    } else {
        console.log("Число не введено")
    }

}
numberComparison(num1, num2);

/* Задание 2 */
/* Перепишите код к тернарному оператору

let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
} */

let test = true;
test ? console.log('+++') : console.log('---');

/* Задание 3 */
/*В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/

let day = prompt("Введите день от 1 до 31: ");
let decadeMonth = (day) => {
    day = +day;
    let decade = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    ]
    if (day >= 1 && day <= 31 && day !== "") {
        for (let index = 0; index < decade.length; index++) {
            for (let value of decade[index]) {
                if (day === value) {
                    console.log(`${day} принадлежит к ${index+1} декаде`);
                    break;
                }
            }
        }
    } else {
        console.log(`Некорректный ввод`)
    }
}
decadeMonth(day);