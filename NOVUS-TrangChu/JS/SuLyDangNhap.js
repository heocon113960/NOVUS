
async function kiemTraDangNhap(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("loginUsername");
  const passwordInput = document.getElementById("loginPassword");
  const thongbao = document.getElementById("thongbao");

  const usernameOrEmail = (usernameInput?.value || "").trim();
  const password = (passwordInput?.value || "");

  try {

    const key = 'dangkyList';
    const list = JSON.parse(localStorage.getItem(key) || '[]');


    const user = list.find(u =>
      (u.tendangnhap && u.tendangnhap.trim().toLowerCase() === usernameOrEmail.toLowerCase()) ||
      (u.email && u.email.trim().toLowerCase() === usernameOrEmail.toLowerCase())
    );


    if (user && user.matkhau === password) {
      localStorage.setItem("daDangNhap", "true");
      localStorage.setItem("username", user.tendangnhap || user.email || "");
      localStorage.setItem("avt", user.avt || "Img/matdinh.png");

      if (thongbao) thongbao.style.display = "none";

      if (typeof closeLoginPopup === "function") closeLoginPopup();
      location.reload();
    } else {
      if (thongbao) thongbao.style.display = "block";
    }
  } catch (error) {
    console.error("Lỗi khi đăng nhập (local):", error);
    if (thongbao) thongbao.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const nutDangNhap = document.querySelector(".nutdangnhap");
  if (nutDangNhap) nutDangNhap.addEventListener("click", kiemTraDangNhap);


  const savedUsername = localStorage.getItem("username");
  const avt = localStorage.getItem("avt");
  if (savedUsername) {
    const navtrai = document.getElementById("hanhdong");
    if (navtrai) navtrai.style.display = "none";

    const userInfo = document.getElementById("user-info");
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
            <button class="nutavt1"><img src="${avt || 'Img/matdinh.png'}" class="nutavtanh1"></button>
            <button class="nutavt2"><img src="Img/nutxanhcomuiten.png" class="nutavtanh2"></button>
          </div>
        </div>
      `;
    }
  }
});

