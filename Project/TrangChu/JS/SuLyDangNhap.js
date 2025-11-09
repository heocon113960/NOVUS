function kiemTraDangNhap(event) {
  event.preventDefault();

  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;
  const thongbao = document.getElementById("thongbao");

  const taiKhoanDung = "admin";
  const matKhauDung = "123";

  if (username === taiKhoanDung && password === matKhauDung) {
    thongbao.style.display = "none";
    localStorage.setItem("daDangNhap", "true");
    location.reload();
  } else {
    thongbao.style.display = "block";
  }
}

document.querySelector(".nutdangnhap").addEventListener("click", kiemTraDangNhap);

window.addEventListener("DOMContentLoaded", () => {
  const daDangNhap = localStorage.getItem("daDangNhap");

  if (daDangNhap === "true") {
    document.getElementById("navtrai").style.display = "none";

    document.getElementById("user-info").innerHTML = `
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
          <button class="nutavt1"><img src="Img/avatar.png" class="nutavtanh1"></button>
          <button class="nutavt2"><img src="Img/nutxanhcomuiten.png" class="nutavtanh2"></button>
        </div>
      </div>
    `;
  }
});
