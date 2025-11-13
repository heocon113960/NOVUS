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
};

                const password= document.getElementById('mk');
                const battatpass = document.getElementById('battatmk');
                battatpass.addEventListener('click', () =>
                {
                    if (password.type === 'password')
                {
                    password.type = 'text';
                    battatpass.innerHTML = '<img src = "Img/Eye_off.png">';
                }
                else 
                {
                    password.type = 'password';
                    battatpass.innerHTML = '<img src = "Img/Eye (1).png">';
                }
            });
            const pass= document.getElementById('nhaplai');
                const anhienpass = document.getElementById('anhienmk');
                anhienpass.addEventListener('click', () =>
                {
                    if (pass.type === 'password')
                {
                    pass.type = 'text';
                    anhienpass.innerHTML = '<img src = "Img/Eye_off.png">';
                }
                else 
                {
                    pass.type = 'password';
                    anhienpass.innerHTML = '<img src = "Img/Eye (1).png">';
                }
            });