// Display and hide pop-up window
function showPopUp (event) {
  const parentElement = event.currentTarget;
  const lastElement = parentElement.lastElementChild;
  let myTimeOut = setTimeout(hidePopUp, 6000);

  lastElement.style.visibility = "visible";
  lastElement.style.animation = "fadeIn 1s";
  
  function hidePopUp() {
    lastElement.style.animation = "fadeOut 1s";
    setTimeout(visibilityHidden, 990); 

    function visibilityHidden() {
      lastElement.style.visibility = "hidden";
    }
  }
}