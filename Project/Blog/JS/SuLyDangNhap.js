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

