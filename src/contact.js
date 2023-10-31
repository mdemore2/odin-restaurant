function buildContact(){
    //generated this function with Bard

    const div = document.createElement('div');

    // Create an h2 element for the contact us heading
    const h2 = document.createElement("h2");
    h2.textContent = "Contact Us";

    // Append the h2 element to the div element
    div.appendChild(h2);


    // Create an h3 element for the address heading
    const addressH3 = document.createElement("h3");
    addressH3.textContent = "Address";

    // Append the address h3 element to the div element
    div.appendChild(addressH3);

    // Create a p element for the address
    const addressP = document.createElement("p");
    addressP.textContent = `
      Gabagool Galleria
      123 Main Street
      Kansas City, Arkansas 12345
    `;

    // Append the address p element to the div element
    div.appendChild(addressP);

    // Create an h3 element for the hours of operation heading
    const hoursOfOperationH3 = document.createElement("h3");
    hoursOfOperationH3.textContent = "Hours of Operation";

    // Append the hours of operation h3 element to the div element
    div.appendChild(hoursOfOperationH3);

    // Create a p element for the hours of operation
    const hoursOfOperationP = document.createElement("p");
    hoursOfOperationP.textContent = `
      Sunday - Thursday: 11am - 9pm
      Friday - Saturday: 11am - 10pm
    `;
    div.appendChild(hoursOfOperationP);

    return div;
}

function contact(){
    const content = document.getElementById('content');

    content.appendChild(buildContact());
}


export default contact;
