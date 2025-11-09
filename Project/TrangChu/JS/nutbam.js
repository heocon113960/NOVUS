  function toggleHeart(button) {
    const img = button.querySelector("img");
    const img1 = "Img/traitim.png";    
    const img2 = "Img/timhong.png";  

    if (img.src.includes(img1)) {
      img.src = img2;
    } else {
      img.src = img1;
    }
  }


const applybtns = document.querySelectorAll('.apply-btn');

applybtns.forEach(applybtn => {
  applybtn.onmouseover = function() {
    this.textContent = 'Ứng Tuyển';
  };
  
  applybtn.onmouseout = function() {
    this.textContent = 'Ứng Tuyển Ngay';
  };
});


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