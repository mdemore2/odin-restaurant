function clearPage(){
    var content = document.getElementById('content');
    content.replaceChildren();
}

function header(){
    const header = document.createElement('header');
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
}

export default resetPage;