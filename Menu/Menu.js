/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(array) {
  //set elemetns
  let menuDiv = document.createElement("div");
  let uL = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let li4 = document.createElement("li");
  let li5 = document.createElement("li");
  let li6 = document.createElement("li");

  //set class
  menuDiv.classList.add("menu");

  //append
  menuDiv.appendChild(uL);

  array.forEach(e => {
    let li = document.createElement("li");
    ul.appendChild((li.textContent = array[array[e]]));
  });

  let menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", e => {
    menuButton.classList.toggle("menu--open");
  });
  return menuDiv;
}

let menuButton = document.querySelector(".menu-button");

menuItems.map(e => {
  menuButton.appendChild(createMenu(e));
});

/*
  uL.appendChild(li1);
  uL.appendChild(li2);
  uL.appendChild(li3);
  uL.appendChild(li4);
  uL.appendChild(li5);
  uL.appendChild(li6);

  //content text
  li1.textContent = "Students";
  li2.textContent = "Faculty";
  li3.textContent = "What's New";
  li4.textContent = "Tech Trends";
  li5.textContent = "Music";
  li6.textContent = "Log Out";
*/
