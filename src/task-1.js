import { toggleLoading } from "./toggleLoading.js";
import { createUserElement } from "./createUserElement.js";

const URL = 'https://jsonplaceholder.typicode.com/users';

const listHTML = document.querySelector('#data-container');

fetch(URL)
    .then(response => {
        toggleLoading();

        if (response.ok)
            return response.json();
        else
            throw new Error(`${response.status}: ${response.statusText}`);
    })
    .then(results => {
        results.forEach(res => {
            const newUser = createUserElement(res.name);
            listHTML?.append(newUser);
        });
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        toggleLoading();
    })