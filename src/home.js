function home() {
    console.log('home called');
    const content = document.getElementById('content');

    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Gabagool Galleria';
    header.appendChild(title);

    const nav = document.createElement('nav');
    const btn = document.createElement('button');
    btn.textContent = 'Home';
    nav.appendChild(btn);
    header.appendChild(nav);

    content.appendChild(header);

}

export default home;