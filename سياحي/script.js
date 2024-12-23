const homeBtn = document.getElementById('homeBtn');
const searchBtn = document.getElementById('searchBtn');
const giftsBtn = document.getElementById('giftsBtn');
const homePage = document.getElementById('homePage');
const searchPage = document.getElementById('searchPage');
const giftsPage = document.getElementById('giftsPage');
function showPage(page) {
    homePage.classList.add('hidden');
    searchPage.classList.add('hidden');
    giftsPage.classList.add('hidden');

    page.classList.remove('hidden');
    page.classList.add('active');
}

homeBtn.addEventListener('click', () => showPage(homePage));
searchBtn.addEventListener('click', () => showPage(searchPage));
giftsBtn.addEventListener('click', () => showPage(giftsPage));