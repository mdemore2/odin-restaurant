function reservations(){

    const reservations = document.createElement('div');
    reservations.classList.add("emphasis");
    const label = document.createElement('h3');
    label.textContent = 'Reservations';
    reservations.appendChild(label);

    const resForm = document.createElement('form')
    
    // Create an input element for Name
    var name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("name", "Name");
    name.setAttribute("placeholder", "Name");

    // Create an input element for email
    var email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "E-Mail");

    var datetime = document.createElement("input");
    datetime.setAttribute("type", "datetime-local");

    var party = document.createElement("input");
    party.setAttribute("type", "number");
    party.setAttribute("placeholder", "Party Size");

    resForm.appendChild(name);
    resForm.appendChild(email);
    resForm.appendChild(datetime);
    resForm.appendChild(party);

    reservations.appendChild(resForm);

    return reservations;

}

function reviews(){
    const reviews = document.createElement('div');
    reviews.classList.add("main");

    const label = document.createElement('h3');
    label.textContent = 'Reviews';
    reviews.appendChild(label);
    const quote = document.createElement('blockquote');

    quote.innerHTML = `<p>Great food, killer vibes, and incredible gabagool!</p><footer>-Tony Soprano</footer>`;

    reviews.appendChild(quote);

    return reviews;
}

function about(){
    const about = document.createElement('div');
    about.classList.add("main");

    const label = document.createElement('h3');
    label.textContent = 'About Us';
    about.appendChild(label);

    const desc = document.createElement('h6');
    desc.textContent = `A family owned Italian eatery proudly serving the greater Kansas City metropolitan area since 1937!`;
    about.appendChild(desc); 
    
    return about;
}

 

function home() {
    const content = document.getElementById('content');
    const homeBtn = document.getElementById('home');
    homeBtn.classList.add('selected');

    const contactBtn = document.getElementById('contact');
    const menuBtn = document.getElementById('menu');
    contactBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');



    content.appendChild(about());
    content.appendChild(reservations());
    content.appendChild(reviews());
}

export default home;