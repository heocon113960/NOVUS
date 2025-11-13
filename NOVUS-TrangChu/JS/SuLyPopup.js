  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const overlay = document.getElementById('popupOverlay');

  openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

// đăng ký

  document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  if (!registerForm) {
    console.error('registerForm không tìm thấy');
    return;
  }

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(registerForm);
    const pw = (formData.get('matkhau') || '').toString();
    const pw2 = (formData.get('matkhau2') || '').toString();
    const phone = (formData.get('sdt') || '').toString().trim();
    const tendangnhap = (formData.get('tendangnhap') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();

    if (pw !== pw2) {
      alert('❌ Mật khẩu nhập lại không khớp!');
      return;
    }
    if (phone.length !== 10 && phone.length !== 11) {
      alert('❌ Số điện thoại phải có 10 hoặc 11 chữ số!');
      return;
    }

    const key = 'dangkyList';
    const current = JSON.parse(localStorage.getItem(key) || '[]');

    if (current.some(u => u.email === email)) {
      alert('❌ Email đã tồn tại.');
      return;
    }
    if (current.some(u => u.tendangnhap === tendangnhap)) {
      alert('❌ Tên đăng nhập đã tồn tại.');
      return;
    }

    const record = {
      tendangnhap,
      email,
      sdt: phone,
      matkhau: pw,        
      ngayDangKy: new Date().toISOString(),
      trangthai: 'đã duyệt'
    };

    current.push(record);
    localStorage.setItem(key, JSON.stringify(current));

    alert('✅ Đăng ký thành công.');
    registerForm.reset();
    location.reload();
  });
});


// đóng mở cập nhật giao diện avt người dùng

document.addEventListener('DOMContentLoaded', () => {
  const template = document.getElementById('profile-popup-template');
  if (!template) return;

  let popupNode = null;
  let backdropNode = null;
  let escHandler = null;

  function resolveContactFromStorage() {
    let email = localStorage.getItem('email') || '';
    let phone = localStorage.getItem('sdt') || '';

    if ((!email || !phone) && localStorage.getItem('dangkyList')) {
      try {
        const list = JSON.parse(localStorage.getItem('dangkyList') || '[]');
        const savedUsername = (localStorage.getItem('username') || '').toLowerCase();
        if (savedUsername) {
          const found = list.find(u => (u.tendangnhap || '').toLowerCase() === savedUsername);
          if (found) {
            email = email || (found.email || '');
            phone = phone || (found.sdt || '');
          }
        }
      } catch (err) {
        console.error('Lỗi parse dangkyList', err);
      }
    }

    return { email, phone };
  }

  function openProfilePopup(anchorEl, user = {}) {
    closeProfilePopup();

    const clone = template.content.cloneNode(true);
    const backdrop = clone.querySelector('.profile-popup-backdrop');
    const popup = clone.querySelector('.profile-popup');
    if (!backdrop || !popup) return;


    const nameEl = popup.querySelector('.profile-name');
    const emailEl = popup.querySelector('.pp-email');
    const phoneEl = popup.querySelector('.pp-phone');
    const avtImg = popup.querySelector('.pp-avt');

    if (nameEl) nameEl.textContent = user.name || 'TÊN NGƯỜI DÙNG';

    const contact = resolveContactFromStorage();
    const emailVal = user.email || contact.email || '';
    const phoneVal = user.phone || contact.phone || '';

    if (emailEl) emailEl.textContent = emailVal;
    if (phoneEl) phoneEl.textContent = phoneVal;
    if (avtImg && user.avt) avtImg.src = user.avt;

    document.body.appendChild(backdrop);
    backdrop.classList.add('show');


    const rect = anchorEl.getBoundingClientRect();
    const popupWidth = 424;
    const popupHeight = 325;
    let left = rect.left + window.scrollX + rect.width - popupWidth;
    let top = rect.bottom + window.scrollY + 8;

    if (left < 8) left = rect.left + window.scrollX;
    if (left + popupWidth > window.innerWidth - 8) left = window.innerWidth - popupWidth - 8;
    if (top + popupHeight > window.scrollY + window.innerHeight - 8) {
      top = rect.top + window.scrollY - popupHeight - 8;
    }

    backdrop.style.position = 'absolute';
    backdrop.style.left = '0';
    backdrop.style.top = '0';
    popup.style.position = 'absolute';
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;

    popupNode = popup;
    backdropNode = backdrop;


    popup.querySelector('.profile-close')?.addEventListener('click', closeProfilePopup);
    backdrop.addEventListener('mousedown', (ev) => { if (!popup.contains(ev.target)) closeProfilePopup(); });

    escHandler = (e) => { if (e.key === 'Escape') closeProfilePopup(); };
    document.addEventListener('keydown', escHandler);

    backdrop._cleanup = () => { document.removeEventListener('keydown', escHandler); escHandler = null; };
  }

  function closeProfilePopup() {
    if (!backdropNode) return;
    if (typeof backdropNode._cleanup === 'function') backdropNode._cleanup();
    backdropNode.remove();
    backdropNode = null;
    popupNode = null;
  }


  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.nutavt1');
    if (!btn) return;
    e.preventDefault();

    if (backdropNode) { closeProfilePopup(); return; }

    const user = {
      name: localStorage.getItem('username') || 'TÊN NGƯỜI DÙNG',
      email: localStorage.getItem('email') || '',
      phone: localStorage.getItem('sdt') || '',
      avt: localStorage.getItem('avt') || 'Img/matdinh.png'
    };

    openProfilePopup(btn, user);
  });

  window.closeProfilePopup = closeProfilePopup;
});




// logout

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-logout');
    if (!btn) return;

    const keysToRemove = ['daDangNhap', 'username', 'avt', 'email', 'sdt'];
    keysToRemove.forEach(k => localStorage.removeItem(k));

    if (window.firebase && firebase.auth && typeof firebase.auth().signOut === 'function') {
      firebase.auth().signOut().catch(err => console.warn('Firebase signOut error:', err));
    }


    if (typeof window.closeProfilePopup === 'function') {
      try { window.closeProfilePopup(); } catch (e) {  }
    }


    const userInfo = document.getElementById('user-info');
    if (userInfo) userInfo.innerHTML = '';

    const hanhdong = document.getElementById('hanhdong') || document.getElementById('navtrai');
    if (hanhdong) hanhdong.style.display = '';

    location.reload();
  });
});