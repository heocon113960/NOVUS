  function toggleHeart(button) {
    const img = button.querySelector("img");
    const img1 = "traitim.png";    
    const img2 = "timhong.png";  

    if (img.src.includes(img1)) {
      img.src = img2;
    } else {
      img.src = img1;
    }
  }

