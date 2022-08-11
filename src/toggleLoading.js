export const toggleLoading = () => {
    const loadingHTML = document.querySelector('#loader');
    const isLoadingHide = loadingHTML?.hasAttribute('hidden');
    if (isLoadingHide) {
        loadingHTML.removeAttribute('hidden');
    } else {
        loadingHTML.setAttribute('hidden', '');
    }
}