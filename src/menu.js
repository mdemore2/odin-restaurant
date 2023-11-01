function buildMenu() {
    //generated most of this function with Bard

    // Create an empty HTML div element
    const div = document.createElement("div");
    div.classList.add('emphasis');

    const title = document.createElement("h2");
    title.textContent = "Menu";
    div.appendChild(title);
    
    const hr = document.createElement("hr");
    div.appendChild(hr);
    // Create an unordered list element
    const ul = document.createElement("ul");
  
    // Add the unordered list element to the div element
    div.appendChild(ul);
  
    // Create an array of Italian menu items and prices
    const menuItems = [
      ["Pizza Margherita", 12.99],
      ["Spaghetti Carbonara", 14.99],
      ["Lasagna", 16.99],
      ["Chicken Parmesan", 17.99],
      ["Tilapia Piccata", 18.99],
    ];
  
    // Iterate over the array of menu items and prices
    for (const item of menuItems) {
      // Create a list item element for each menu item
      const li = document.createElement("li");
  
      // Set the text content of the list item element to the menu item name
      li.textContent = item[0];
  
      // Create a span element to contain the price of the menu item
      const span = document.createElement("span");
  
      // Set the text content of the span element to the price of the menu item
      span.textContent = `$${item[1]}`;
  
      // Append the span element to the list item element
      li.appendChild(span);
  
      // Append the list item element to the unordered list element
      ul.appendChild(li);
    }
  
    // Return the div element
    return div;
}

function menu(){
    const content = document.getElementById('content');
    const menuBtn = document.getElementById('menu');
    menuBtn.classList.add('selected');

    const contactBtn = document.getElementById('contact');
    const homeBtn = document.getElementById('home');
    contactBtn.classList.remove('selected');
    homeBtn.classList.remove('selected');

    content.appendChild(buildMenu());
}


export default menu;