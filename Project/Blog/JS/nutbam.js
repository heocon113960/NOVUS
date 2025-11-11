

function openLoginPopup() {
  document.getElementById("loginPopup").style.display = "block";
}

function closeLoginPopup() {
  document.getElementById("loginPopup").style.display = "none";
}
  window.onclick = function(event) {
    const popup = document.getElementById("loginPopup");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  };