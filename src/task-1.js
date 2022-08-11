const URL = 'https://jsonplaceholder.typicode.com/users';

const toggleLoading = () => {
    const loadingHTML = document.querySelector('#loader');
    const isLoadingHide = loadingHTML.hasAttribute('hidden');
    if (isLoadingHide) {
        loadingHTML.removeAttribute('hidden');
    } else {
        loadingHTML.setAttribute('hidden', '');
    }
}

const createUserElement = (userName) => {
    const liElem = document.createElement('li');
    const refElem = document.createElement('a');
    refElem.setAttribute('href', '#');
    refElem.textContent = userName;
    liElem.append(refElem);
    return liElem;
}

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