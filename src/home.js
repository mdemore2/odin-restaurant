function reservations(){

    const reservations = document.createElement('div')
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
    party.setAttribute("placeholder", "2");

    resForm.appendChild(name);
    resForm.appendChild(email);
    resForm.appendChild(datetime);
    resForm.appendChild(party);

    reservations.appendChild(resForm);

    return reservations;

}

function home() {
    const content = document.getElementById('content');

    content.appendChild(reservations());

}

export default home;