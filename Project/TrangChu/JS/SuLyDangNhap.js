async function kiemTraDangNhap(event) {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const thongbao = document.getElementById("thongbao");

  try {
    const querySnapshot = await db.collection("dangky")
      .where("username", "==", username)
      .where("password", "==", password)
      .where("trangthai", "==", "đã duyệt")
      .get();

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();

      localStorage.setItem("daDangNhap", "true");
      localStorage.setItem("username", userData.username);
      localStorage.setItem("avt", userData.avt || "matdinh.png");

      const overlay = document.getElementById("popupOverlay");
      if (overlay) overlay.style.display = "none";

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
            <button class="nutavt1"><img src="${userData.avt || 'matdinh.png'}" class="nutavtanh1"></button>
            <button class="nutavt2"><img src="Img/nutxanhcomuiten.png" class="nutavtanh2"></button>
          </div>
        </div>
      `;

      thongbao.style.display = "none";
    } else {
      thongbao.style.display = "block";
    }
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    thongbao.style.display = "block";
  }
}
