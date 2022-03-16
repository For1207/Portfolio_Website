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