


function lapAnhLienTuc() {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");

  setInterval(() => {
    const src1 = img1.src;
    const src2 = img2.src;
    const src3 = img3.src;


    img1.src = src3;
    img2.src = src1;
    img3.src = src2;
  }, 5000);
}

window.onload = lapAnhLienTuc;



 
 const jobst = [
    {
      nghe: "Kỹ Sư Phát Triển Phần Mềm",
      cty: "TMTeam",
      daichi: "Hồ Chí Minh",
      luong: "15-20 triệu",
      phanhoi: "Phản hồi trong vòng 3 giờ",
      dadang: "3 ngày trước",
      logo: "traitim.png"
    },
    {},
    {},
    {},
    {},
    {}
  ];

  const jobstable = document.getElementById('jobsTable');

  const filledd = jobst.map((j) => {
    if (!j.cty) {
      return {
        nghe: "Kỹ Sư Phát Triển Phần Mềm",
        cty: "TMTeam",
        daichi: " Hồ Chí Minh",
        luong: "15-20 triệu",
        phanhoi: "Phản hồi trong vòng 3 giờ",
        dadang: "3 ngày trước",
        logo: "traitim.png"
      };
    }
    return j;
  }).slice(0, 6);

  filledd.forEach(job => {
    const card = document.createElement('article');
    card.className = 'job-card2';
    card.innerHTML = `
<table class="job-card3">
  <tr>
    <td class="joblogo" rowspan="2">
      <img src="Img/${job.logo}" alt="Logo">
    </td>

    <td class="nghe">
      <p class="nghetl"><strong>${job.nghe}</strong></p>
    </td>

    <td class="traitim" rowspan="2">
<button class="thatim" type="button" onclick="toggleHeart(this)">

        <img src="Img/traitim.png" alt="Yêu thích">
      </button>
    </td>
    
  </tr>

  <tr>
    <td class="thongtin" colspan="2">
      <div class="ttw">
        <div class="ttcty">
        ${job.cty}<br>  
        <img src="Img/vitri.png" width="15" height="15"> ${job.daichi}<br>  
        <span class="tienluong"><img src="Img/tien.png" width="13" height="13"> ${job.luong}</span>
        </div>
        <img src="Img/thanhUL.jpg" width="387" height="1">
        <div class="ttduoi">
          <div class="traloi">${job.phanhoi}</div>
          <div class="dadang">${job.dadang}</div>
        </div>
      </div>
    </td>
  </tr>
</table>
    `;
    jobstable.appendChild(card);
  });
let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % filledd.length;
  jobstable.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000);

