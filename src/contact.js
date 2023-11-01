function buildContact(){
    //generated a lot of this function with Bard

    const div = document.createElement('div');
    div.classList.add('main');


    // Create an h2 element for the contact us heading
    const h2 = document.createElement("h2");
    h2.textContent = "Contact Us";

    // Append the h2 element to the div element
    div.appendChild(h2);

    const hr = document.createElement("hr");
    div.appendChild(hr);


    // Create an h3 element for the address heading
    const addressH3 = document.createElement("h3");
    addressH3.textContent = "Address";

    // Append the address h3 element to the div element
    div.appendChild(addressH3);

    // Create a p element for the address
    const address = document.createElement("ul");

    const addressLI1 = document.createElement("li");
    const addressLI2 = document.createElement("li");
    const addressLI3 = document.createElement("li");
    addressLI1.textContent = "Gabagool Galleria";
    addressLI2.textContent = "123 Main Street";
    addressLI3.textContent = "Kansas City, Arkansas 12345";

    address.appendChild(addressLI1);
    address.appendChild(addressLI2);
    address.appendChild(addressLI3);

    // Append the address p element to the div element
    div.appendChild(address);

    // Create an h3 element for the hours of operation heading
    const hoursOfOperationH3 = document.createElement("h3");
    hoursOfOperationH3.textContent = "Hours of Operation";

    // Append the hours of operation h3 element to the div element
    div.appendChild(hoursOfOperationH3);

    // Create a p element for the hours of operation
    const hoursOfOperation = document.createElement("ul");
    
    const hoursLI1 = document.createElement("li");
    hoursLI1.textContent = "Sunday - Thursday: 11am - 9pm";
    const hoursLI2 = document.createElement("li");
    hoursLI2.textContent = "Friday - Saturday: 11am - 10pm";
    hoursOfOperation.appendChild(hoursLI1);
    hoursOfOperation.appendChild(hoursLI2);

    div.appendChild(hoursOfOperation);

    return div;
}

function contact(){
    const content = document.getElementById('content');
    const contactBtn = document.getElementById('contact');
    contactBtn.classList.add('selected');

    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');

    content.appendChild(buildContact());
}


export default contact;
