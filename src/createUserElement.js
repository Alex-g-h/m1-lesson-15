export const createUserElement = (userName) => {
    const liElem = document.createElement('li');
    const refElem = document.createElement('a');
    refElem.setAttribute('href', '#');
    refElem.textContent = userName;
    liElem.append(refElem);
    return liElem;
}