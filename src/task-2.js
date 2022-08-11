import { toggleLoading } from "./toggleLoading.js";
import { createUserElement } from "./createUserElement.js";

const URL = 'https://jsonplaceholder.typicode.com/users';

const listHTML = document.querySelector('#data-container');

const usersID = [5, 6, 2, 1];

const getUsersByIds = (ids) => {
    toggleLoading();
    const userUrls = ids.map((id) => {
        return fetch(`${URL}/${id}`);
    });
    Promise.all(userUrls)
        .then((responses) => {
            const results = responses.map(response  => response.json());
            return Promise.all(results);
        })
        .then((results) => {
            results.forEach((result) => {
                const newUser = createUserElement(result.name);
                listHTML?.append(newUser);
            })
        })
        .catch(error => { console.error(error); })
        .finally(() => { toggleLoading(); })
}

getUsersByIds(usersID);