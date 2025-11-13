async function loadJobs() {
  try {
    const res = await fetch('JSon/jobs3.json');
    const jobs = await res.json();
    const container = document.getElementById('jobsTable');

    container.innerHTML = jobs.map(job => `
      <article class="job-card2">
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
      </article>
    `).join('');
  } catch (err) {
    console.error('Lỗi tải jobs.json', err);
  }
}

function toggleHeart(btn) {
  btn.classList.toggle('liked');
  const img = btn.querySelector('img');
  if (btn.classList.contains('liked')) {
    img.src = 'Img/heart-filled.png';
  } else {
    img.src = 'Img/traitim.png';
  }
}

loadJobs();

