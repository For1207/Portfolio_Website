// Display navigation menu
function hideMenuIcon() {
   document.getElementById('header').style.display = 'block';
   document.getElementById('nav_link').style.display = 'none';
}
function displayMenu() {
   document.getElementById('nav_menu').style.display = 'flex';
}

function hideIconDisplayMenu () {
   hideMenuIcon();
   displayMenu();
}

const menuListener = document.getElementById('nav_link').addEventListener("click", hideIconDisplayMenu);

// Hide navigation menu
function hideNavigationMenu() {
   document.getElementById('nav_menu').style.display = 'none';
}

function displayNavigationIcon() {
   document.getElementById('header').style.display = 'flex';
   document.getElementById('nav_link').style.display = 'inline-block'; 
}

function hideMenu() {
   document.getElementById('nav_menu').style.display = 'none';
}

function hideMenuDisplayIcon() {
   hideMenu();
   displayNavigationIcon();
}

const closeMenuListener = document.getElementById('close_icon').addEventListener("click", hideMenuDisplayIcon);

// Opens and closes the "Projects" menu section on the main page

function openProjectMenu() {
   document.getElementById('restaurant_review_menu_body').style.display = 'block';
   document.getElementById('first_project').src = "images/icons/triangle_menu_opened.png";
};

function closeProjectMenu() {};

 const openProjectMenuListener = document.getElementById(restaurant_review_menu_header).addEventListener("click", openProjectMenu);