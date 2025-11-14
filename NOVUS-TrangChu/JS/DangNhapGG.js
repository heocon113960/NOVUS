   const firebaseConfig = {
    apiKey: "AIzaSyDEyyfIjheNTY3O7klH7tkpGKXEXm2ku4I",
    authDomain: "dangnhap-5069e.firebaseapp.com",
    projectId: "dangnhap-5069e",
    storageBucket: "dangnhap-5069e.appspot.com",
    messagingSenderId: "596384133171",
    appId: "1:596384133171:web:4ab1b9b3bb37d0720c3346",
    measurementId: "G-HDMQ6PJ1BN"
  };


  if (!firebase.apps || firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  window.db = firebase.firestore();
  window.auth = firebase.auth();

 
 function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          document.getElementById("hanhdong").style.display = "none";
          if (typeof closeLoginPopup === 'function') closeLoginPopup();
          document.getElementById("user-info").innerHTML = `
    <div>
    <div style="display:inline;">
      <button class="nutbellvatinnhan"><img src="Img/belltt.png" class="bellvatinnhan1"></button>
      <button class="nutmauxanhla" ><img src="Img/mauxanhcuabell.png" class="bellvatinnhan2"></button>
    </div>

    <div style="display:inline;">
      <button class="nutbellvatinnhan"><img src="Img/tinnhan.png" class="bellvatinnhan1"></button>
     <button class="nutmauxanhla"><img src="Img/mauxanhcuabell.png" class="bellvatinnhan2"></button>
    </div>

<div class="avt">


    <button class="nutavt1"><img src="${user.photoURL}" class="nutavtanh1"></button>
    <button class="nutavt2"><img src="Img/nutxanhcomuiten.png" class="nutavtanh2"></button>

</div>
      </div>
          `;
        })
        .catch((error) => {
          console.error("Lỗi đăng nhập:", error.code, error.message);
          alert("Đăng nhập thất bại: " + error.message);
        });
    }

    auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("hanhdong").style.display = "none";

    
    document.getElementById("user-info").innerHTML = `
    <div>
    <div style="display:inline;">
      <button class="nutbellvatinnhan"><img src="Img/belltt.png" class="bellvatinnhan1"></button>
      <button class="nutmauxanhla" ><img src="Img/mauxanhcuabell.png" class="bellvatinnhan2"></button>
    </div>

    <div style="display:inline;">
      <button class="nutbellvatinnhan"><img src="Img/tinnhan.png" class="bellvatinnhan1"></button>
     <button class="nutmauxanhla"><img src="Img/mauxanhcuabell.png" class="bellvatinnhan2"></button>
    </div>

<div class="avt">


    <button class="nutavt1"><img src="${user.photoURL}" class="nutavtanh1"></button>
    <button class="nutavt2"><img src="Img/nutxanhcomuiten.png" class="nutavtanh2"></button>

</div>
      </div>
    `;
  }
});

function saveUserToLocal(user) {
  if (!user) return;

  const username = user.displayName || user.email || 'TÊN NGƯỜI DÙNG';
  const email = user.email || '';
  const avt = user.photoURL || 'Img/matdinh.png';
  const phone = user.phoneNumber || ''; 

  localStorage.setItem('daDangNhap', 'true');
  localStorage.setItem('username', username);
  if (email) localStorage.setItem('email', email);
  if (phone) localStorage.setItem('sdt', phone);
  localStorage.setItem('avt', avt);
}

function renderUserUIFromLocal() {
  const savedUsername = localStorage.getItem('username');
  const avt = localStorage.getItem('avt') || 'Img/matdinh.png';
  if (savedUsername) {
    const hanhdong = document.getElementById('hanhdong');
    if (hanhdong) hanhdong.style.display = 'none';

    const userInfo = document.getElementById('user-info');
    if (userInfo) {
      userInfo.innerHTML = `
        <div>
          <div style="display:inline;">
            <button class="nutbellvatinnhan"><img src="Img/belltt.png" class="bellvatinnhan1"></button>
            <button class="nutmauxanhla"><img src="Img/mauxanhcuabell.png" class="bellvatinnhan2"></button>
          </div>
          <div style="display:inline;">
            <button class="nutbellvatinnhan"><img src="Img/tinnhan.png" class="bellvatinnhan1"></button>
            <button class="nutmauxanhla"><img src="Img/mauxanhcuabell.png" class="bellvatinnhan2"></button>
          </div>
          <div class="avt">
            <button class="nutavt1"><img src="${avt}" class="nutavtanh1"></button>
            <button class="nutavt2"><img src="Img/nutxanhcomuiten.png" class="nutavtanh2"></button>
          </div>
        </div>
      `;
    }
  }
}

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;

      saveUserToLocal(user);


      renderUserUIFromLocal();

      if (typeof closeLoginPopup === 'function') closeLoginPopup();
    })
    .catch((error) => {
      console.error("Lỗi đăng nhập:", error.code, error.message);
      alert("Đăng nhập thất bại: " + error.message);
    });
}

auth.onAuthStateChanged((user) => {
  if (user) {

    saveUserToLocal(user);

    renderUserUIFromLocal();
  } else {

  }
});

function logoutUser() {

  ['daDangNhap','username','avt','email','sdt'].forEach(k => localStorage.removeItem(k));

  if (window.firebase && firebase.auth) {
    firebase.auth().signOut().catch(err => console.warn('Sign-out error', err));
  }
  const userInfo = document.getElementById('user-info');
  if (userInfo) userInfo.innerHTML = '';
  const hanhdong = document.getElementById('hanhdong');
  if (hanhdong) hanhdong.style.display = '';

  location.reload();
}
