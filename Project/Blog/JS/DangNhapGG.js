 const firebaseConfig = {
      apiKey: "AIzaSyDEyyfIjheNTY3O7klH7tkpGKXEXm2ku4I",
      authDomain: "dangnhap-5069e.firebaseapp.com",
      projectId: "dangnhap-5069e",
      storageBucket: "dangnhap-5069e.firebasestorage.app",
      messagingSenderId: "596384133171",
      appId: "1:596384133171:web:4ab1b9b3bb37d0720c3346",
      measurementId: "G-HDMQ6PJ1BN"
    };


    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

  
    function signInWithGoogle1() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
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
    document.getElementById("navtrai").style.display = "none";

    
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

