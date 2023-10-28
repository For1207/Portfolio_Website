let flag = 0;

function showHideContacts() {
   const contacts = document.getElementById("contacts-item");
   const getInTouch = document.getElementById("get-in-touch");

   if(flag === 0) {
      contacts.style.backgroundColor = "hsla(345, 68%, 30%, 0.7)";
      getInTouch.style.display = "flex";
      flag = 1;
   } else {
      getInTouch.style.display = "none";
      contacts.style.backgroundColor = "initial";

      flag = 0;
   }


}