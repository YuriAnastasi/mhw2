function OpenSearch() {
    const search = document.querySelector('#search');
    search.classList.remove('hidden');
}

const search1 = document.querySelector('.itemiconasearch');
search1.addEventListener('click', OpenSearch);

function CloseSearch() {
    const search = document.querySelector('#search');
    search.classList.add('hidden');
}

const search2 = document.querySelector('.flex-itemsearchclose');
search2.addEventListener('click', CloseSearch);

function OpenLogin() {
    const login = document.querySelector('#login');
    login.classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

const login1 = document.querySelector('.itemiconalogin');
login1.addEventListener('click', OpenLogin);

function CloseLogin() {
    const login = document.querySelector('#login');
    document.body.classList.remove('no-scroll');
    login.classList.add('hidden');
}

const login2 = document.querySelector('.flex-itemcloselogin');
login2.addEventListener('click', CloseLogin);

function RedSearch1() {
    const image = event.currentTarget;
    image.src = 'search(red).png';

}

const searchred1 = document.querySelector('.itemiconasearch img');
searchred1.addEventListener('mouseover', RedSearch1);

function RedSearch2() {
    const image = event.currentTarget;
    image.src = 'search.png';

}

const searchred2 = document.querySelector('.itemiconasearch img');
searchred2.addEventListener('mouseout', RedSearch2);

function RedLogin1() {
    const image = event.currentTarget;
    image.src = 'login(red).png';

}

const loginred1 = document.querySelector('.itemiconalogin img');
loginred1.addEventListener('mouseover', RedLogin1);

function RedLogin2() {
    const image = event.currentTarget;
    image.src = 'login.png';

}

const loginred2 = document.querySelector('.itemiconalogin img');
loginred2.addEventListener('mouseout', RedLogin2);

function activatefavorite() {
    const icon = document.createElement('img');
    icon.src = 'favorite(on).png';
    icon.style.width = "10%";
    icon.style.height = "10%";
    const container = event.currentTarget;
    container.innerHTML = '';
    container.appendChild(icon);
}
const favorite1 = document.querySelector('[data-index="1"]');
favorite1.addEventListener('click', activatefavorite);

const favorite2 = document.querySelector('[data-index="2"]');
favorite2.addEventListener('click', activatefavorite);

const favorite3 = document.querySelector('[data-index="3"]');
favorite3.addEventListener('click',activatefavorite);

const favorite4 = document.querySelector('[data-index="4"]');
favorite4.addEventListener('click', activatefavorite);

const favorite5 = document.querySelector('[data-index="5"]');
favorite5.addEventListener('click', activatefavorite);

const favorite6 = document.querySelector('[data-index="6"]');
favorite6.addEventListener('click', activatefavorite);

const favorite7 = document.querySelector('[data-index="7"]');
favorite7.addEventListener('click', activatefavorite);

const favorite8 = document.querySelector('[data-index="8"]');
favorite8.addEventListener('click', activatefavorite);

const favorite9 = document.querySelector('[data-index="9"]');
favorite9.addEventListener('click', activatefavorite);