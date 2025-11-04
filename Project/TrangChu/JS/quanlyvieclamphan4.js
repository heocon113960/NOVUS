    const jobs = [
      {
        company: "CÔNG TY TNHH VITALIFY Á CHÂU",
        location: "Quận 3, TP.HCM",
        title: "Kỹ sư phát triển phần mềm",
        type: "Full-time",
        description: "Tham gia cùng chúng tôi với vai trò Kỹ sư Phát triển Phần mềm – nơi bạn được thử thách, sáng tạo và phát triển cùng đội ngũ chuyên nghiệp!",
          salary: "15 triệu",
          thang:"1 tháng",
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
          salary: "15 triệu",
          thang:"1 tháng",
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
          <div class="salary">${job.salary}/<span style="color:#808080;font-size:16px">${job.thang}</span></div>
          <button class="apply-btn" type="button" >Ứng tuyển ngay</button>
        </div>
      `;
      jobsGrid.appendChild(card);
    });




  