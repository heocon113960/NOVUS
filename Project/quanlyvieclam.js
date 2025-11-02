    const jobs = [
      {
        company: "CÔNG TY TNHH VITALIFY Á CHÂU",
        location: "Quận 3, TP.HCM",
        title: "Kỹ sư phát triển phần mềm",
        type: "Full-time",
        description: "Tham gia cùng chúng tôi với vai trò Kỹ sư Phát triển Phần mềm – nơi bạn được thử thách, sáng tạo và phát triển cùng đội ngũ chuyên nghiệp!",
        salary: "15 triệu / Tháng",
        logoText: "V"
      },

      {},
      {},
      {},
      {},
      {}
    ];

    const jobsGrid = document.getElementById('jobsGrid');

    const filled = jobs.map((j, idx) => {
      if (!j.company) {
        return {
          company: "CÔNG TY TNHH VITALIFY Á CHÂU",
          location: "Quận 3, TP.HCM",
          title: "Kỹ sư phát triển phần mềm",
          type: "Full-time",
          description: "Tham gia cùng chúng tôi với vai trò Kỹ sư Phát triển Phần mềm – nơi bạn được thử thách, sáng tạo và phát triển cùng đội ngũ chuyên nghiệp!",
          salary: "15 triệu / Tháng",
          logoText: "V"
        };
      }
      return j;
    }).slice(0,6); 


    filled.forEach(job => {
      const card = document.createElement('article');
      card.className = 'job-card';
      card.innerHTML = `
        <div class="top">
          <div class="logo" aria-hidden="true">${job.logoText || 'V'}</div>
          <div>
            <p class="company">${job.company}</p>
            <p class="location">${job.location}</p>
          </div>
        </div>

        <h3 class="job-title">${job.title}</h3>
        <div class="meta">
          <span class="badge">${job.type}</span>
        </div>

        <p class="description">${job.description}</p>

        <div class="footer">
          <div class="salary">${job.salary}</div>
          <button class="apply-btn" type="button">Ứng tuyển ngay</button>
        </div>
      `;
      jobsGrid.appendChild(card);
    });

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
    {}
  ];

  const jobstable = document.getElementById('jobsTable');

  const filledd = jobst.map((j) => {
    if (!j.cty) {
      return {
        nghe: "Kỹ Sư Phát Triển Phần Mềm",
        cty: "TMTeam",
        daichi: "Hồ Chí Minh",
        luong: "15-20 triệu",
        phanhoi: "Phản hồi trong vòng 3 giờ",
        dadang: "3 ngày trước",
        logo: "traitim.png"
      };
    }
    return j;
  }).slice(0, 4);

  filledd.forEach(job => {
    const card = document.createElement('article');
    card.className = 'job-card2';
    card.innerHTML = `
<table class="job-card3">
  <tr>
    <td class="joblogo" rowspan="2">
      <img src="${job.logo}" alt="Logo">
    </td>

    <td class="nghe">
      <p class="nghetl"><strong>${job.nghe}</strong></p>
    </td>

    <td class="traitim" rowspan="2">
      <button class="thatim" type="button">
        <img src="traitim.png" alt="Yêu thích">
      </button>
    </td>
  </tr>

  <tr>
    <td class="thongtin" colspan="2">
      <div class="ttw">
        <div class="ttcty">
          ${job.cty}<br>${job.daichi}<br>${job.luong}
        </div>
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