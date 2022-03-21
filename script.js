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
let flag = false; // Uses this flag to define opened / closed menu status
let clickedTriangleId;
let clickedItemID;


function openProjectMenuItem() {

   document.getElementById(clickedItemID).style.display = 'block';
   document.getElementById(clickedTriangleId).src = "images/icons/triangle_menu_opened.png";
}

function closeProjectMenuItem() {
   document.getElementById(clickedItemID).style.display = 'none';
   document.getElementById(clickedTriangleId).src = "images/icons/triangle_menu_closed.png";
}

function openAndCloseProjectMenu() {
   if(flag === false)  {
      openProjectMenuItem();
      flag = true;
   } else {
      closeProjectMenuItem();
      flag = false;
   }
};

function replyClick(clicked_id) {
   switch (clicked_id) {
      case "restaurant_review_app":
         clickedTriangleId = "restaurant_review_app_triangle";
         clickedItemID = "restaurant_review_menu_body";
         break;
      case "feed_reader":
         clickedTriangleId = "feed_reader_triangle";
         clickedItemID = "feed_reader_menu_body";
         break;
      case "arcade_game":
         clickedTriangleId = "arcade_game_triangle";
         clickedItemID = "arcade_game_menu_body";
         break;
      case "memory_game":
         clickedTriangleId = "memory_game_triangle";
         clickedItemID = "memory_game_menu_body";
         break;
      default:
         break;
   }
   console.log("ClickedID = " + clickedItemID + " and Triangle ID = " + clickedTriangleId);
}

// Add click-listeners to items in 'Projects'
 projectMenuListener1 = document.getElementById('restaurant_review_app').addEventListener("click", openAndCloseProjectMenu);
 projectMenuListener2 = document.getElementById('feed_reader').addEventListener("click", openAndCloseProjectMenu);
 projectMenuListener3 = document.getElementById('arcade_game').addEventListener("click", openAndCloseProjectMenu);
 projectMenuListener4 = document.getElementById('memory_game').addEventListener("click", openAndCloseProjectMenu);