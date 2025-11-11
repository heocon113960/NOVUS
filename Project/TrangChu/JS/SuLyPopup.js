  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const overlay = document.getElementById('popupOverlay');

  openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });