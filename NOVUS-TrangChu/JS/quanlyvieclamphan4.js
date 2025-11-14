async function loadJobs() {
  try {
    const res = await fetch('Json/jobs4.json'); 
    const jobs = await res.json();
    const container = document.getElementById('jobsGrid');

    container.innerHTML = jobs.map(job => `
      <article class="job-card">
        <div class="top">
          <div class="logo"><img src="Img/${job.logo}" alt="${job.company}" style="width:40px;height:40px"></div>
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
          <button class="apply-btn" type="button">Ứng tuyển ngay</button>
        </div>
      </article>
    `).join('');
  } catch (err) {
    console.error('Lỗi tải jobs.json', err);
  }
}

loadJobs();