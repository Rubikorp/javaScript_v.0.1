/*
Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/
 */
const getUserData = async (id) => {
    await fetch(`https://reqres.in/api/users/${id}`)
        .then((resp) => resp.json())
        .then((dataUser) => {
            console.log(dataUser.data)
            return dataUser.data;
        })
        .catch(er => console.log(er))
};

/*
Задание 2. Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *

// Пример использования функции
const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });
saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/
 */
const user = {
    "name": "John Doe",
    "job": "unknown"
};
const url = 'https://reqres.in/api/users';

const saveUserData = async (url, user) => {
    try {
        const response = await fetch(url, {
            method: "POST", // или 'PUT'
            body: JSON.stringify(user), // данные могут быть 'строкой' или {объектом}!,
        });
        const json = await response.json();
        console.log("Успех:", JSON.stringify(json));
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

saveUserData(url, user);