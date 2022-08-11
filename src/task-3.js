import { toggleLoading } from "./toggleLoading.js";

const URL = 'https://jsonplaceholder.typicode.com/photos/';

const photosID = [60, 12, 55];

const addPhotoElement = (url, title) => {
    const listHTML = document.querySelector('#data-container');
    
    const liElem = document.createElement('li');
    liElem.className = 'photo-item';
    
    const imgElem = document.createElement('img');
    imgElem.className = 'photo-item__image';
    imgElem.setAttribute('src', url);

    const h3Elem = document.createElement('h3');
    h3Elem.className = 'photo-item__title';
    h3Elem.textContent = title;

    liElem.append(imgElem);
    liElem.append(h3Elem);

    listHTML?.append(liElem);
}

const getFastestLoadedPhoto = (ids) => {
    toggleLoading();
    const photoUrls = ids.map((id) => {
        return fetch(`${URL}${id}`);
    });
    Promise.race(photoUrls)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error(`${response.status}: ${response.statusText}`);
        })
        .then(result => {
            addPhotoElement(result.url, result.title);
        })
        .catch(error => console.error(error))
        .finally(() => toggleLoading());
}

getFastestLoadedPhoto(photosID);
