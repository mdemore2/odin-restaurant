import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';


function clearPage(){
    var content = document.getElementById('content');
    content.replaceChildren();
}

function header(){
    const header = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = 'Gabagool Galleria';
    header.appendChild(title);

    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    header.appendChild(nav);
    return header;
}

function resetPage(){
    clearPage();
    content.appendChild(header());
    var navbar = document.querySelector('nav');
    var tabs = Array.prototype.slice.call(navbar.children) //convert iterable to array

    tabs.forEach((tab) => {
        tab.addEventListener('click', navLink)
    });
}

function navLink(e){
    var link = e.currentTarget.innerHTML;
    switch(link) {
        case 'Home':
            resetPage();
            home();
            break;
        case 'Menu':
            resetPage();
            menu();
            break;
        case 'Contact':
            resetPage();
            contact();
            break;
    }

}

function init(){
    resetPage();
    home();
}

init();

console.log('JS Loaded');