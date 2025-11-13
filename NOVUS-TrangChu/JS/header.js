let headerInnerHTML = `
<nav id="wrapper">

<div id="loginPopup" class="popup">

  <div class="popup-content">
    <span class="close" onclick="closeLoginPopup()">&times;</span>
    <br>
    <h1 class="chaomungNOVUs">NOVUS CHÀO MỪNG BẠN</h1>
    <form>
<input type="text" id="loginUsername" placeholder="Tên đăng nhập">
<input type="password" id="loginPassword" placeholder="Mật khẩu">

<div class="quanly2nut">
  <center>
<button type="button" class="nutdangnhap" onclick="kiemTraDangNhap(event)"><strong>ĐĂNG NHẬP</strong></button>
     
    <button type="button"  class="google" onclick="signInWithGoogle()"><img src="IMG/google.png" width="26px" height="26px" class="anhgg"><strong>Google</strong></button>
     
   </center>
</div>

<br>

   <p id="thongbao" style="color: red; display: none;">Sai Tài Khoản hoặc Mật Khẩu</p>
  <div class="phandkqmk">
    <a href="#" class="quenmatkhau">Quên mật khẩu?</a>
    <span> | </span>
    <a href="#" class="dangkyngay">Đăng ký ngay</a>
  </div>
</form>
  </div>
</div>




<div id="popupOverlay" class="overlay">
  <div class="modal">

     <div class = "khung">
            <section class = "header"><button id="closeModalBtn" class="close2" aria-label="Đóng modal">✕</button></section>
        <section class = "dangkiungtuyen">
            <form id="registerForm">
                <h1 class ="dangki">Đăng kí ứng viên</h1>
            <section class = "nhapthongtin">
                <input required class ="hovaten" name="tendangnhap" type = "text" placeholder="Tên đăng nhập">
            <input required class = "email" name="email" type="email" placeholder="Email">

            <section class = "password">
            <div class = "nhappassword"><input id = "mk" name="matkhau" required type = "password" placeholder="Nhập mật khẩu"><span id ="battatmk"><img src = "Img/Eye (1).png"></span></div>
            <div class = "nhappassword"><input id = "nhaplai" name="matkhau2" required type= "password" placeholder="Nhập lại mật khẩu"><span id ="anhienmk"><img src = "Img/Eye (1).png"></span></div>
             </section>

             <input required class = "sdt" name="sdt" type="text" placeholder="Số điện thoại">
             <div class ="thongbao"><input type="checkbox"><span>Luôn nhận thông báo từ NOVUS</span></div>
             <div class ="thoathuan"><input required type="checkbox"><span style="display:flex;">Tôi đồng ý với   <a href="#" style="white-space:nowrap;"> Chính sách </a> và <a href="#" style="white-space:nowrap;"> Quy định bảo mật </a> của NOVUS</span></div>
             <div class ="or"><span>hoặc</span></div>
             <button class ="google" type= "button" aria-label= "Đăng nhập bằng google" onclick="signInWithGoogle()"><img src ="Img/Google.png">Google</button>
            <div class ="ntd">Bạn là nhà tuyển dụng? Đăng ký&nbsp;<a>Nhà Tuyển Dụng</a>&nbsp;ngay</div>
            </section>
            <div class ="nutdangki"><input type ="submit" value="Đăng kí"></div>
            </form>
             <section class ="anhdangki">
            <img src ="Img/Banner_doc.png">
            </section>
        </section>
    </div>
</div>
</div>


<template id="profile-popup-template">
  <div class="profile-popup-backdrop" role="dialog" aria-modal="true">
    <div class="profile-popup" role="document" style="width:424px; height:325px;">

      <div class="profile-top">
        <div class="profile-left">
          <div class="profile-name">TÊN NGƯỜI DÙNG</div>
          <div class="profile-info">
          <br>
            <div><strong>SĐT:</strong> <span class="pp-phone"></span></div>
            <div><strong>Email:</strong> <span class="pp-email"></span></div>
          </div>
        </div>
        <div class="profile-avatar">
          <img class="pp-avt" src="Img/matdinh.png" alt="Avatar" />
        </div>
      </div>

      <div class="profile-body">
      <div><img src="Img/thanhULnguoidung.png" width="400px" height="1px"></div>
        <div class="profile-language"><button class="nutbamVietNam"><img src="Img/flagvietnam.png" alt="VN" class="flag" width="26" height="26"><strong> Tiếng Việt</strong> <img src="Img/thanhchonngonngu.png" width="15px" height="8px"></button></div>
        <nav class="profile-menu">
          <button class="profile-menu-item"><img src="Img/setting.png" width="20" height="20" alt="Cài đặt"><strong> Cài đặt</strong></button>
          <button class="profile-menu-item"><img src="Img/chinhsach.png" width="20" height="20" alt="chính sách"><strong> Chính sách và hướng dẫn</strong></button>
        </nav>
      </div>
    <br>
      <div class="profile-footer">
        <button class="btn-logout">ĐĂNG XUẤT</button>
      </div>
    </div>
  </div>
</template>


          <section id="logo">
            <img src="./Img/logoKhongMau.png" alt="Logo" />
          </section>


          <section id="nav">
            <a href="#">Trang Chủ</a>
            <a href="#">Tìm Việc</a>
            <a href="#">Thảo Luận</a>
            <a href="#">Liên hệ</a>
          </section>
          <section id="hanhdong">
          <button class="navphaidangnhap" onclick="openLoginPopup()" style="cursor: pointer;border:none;">Đăng nhập</button>
          <div class="dangky_dangxuat"><button id="openModalBtn" class="navphaidangky">Đăng ký</button></div>
          </section>
          <div id="user-info"></div>


    
        </nav>

       
`;
const headerLinkTagCSS = `
<link rel="stylesheet" href="./CSS/header.css">
<link rel="stylesheet" href="CSS/QuanLyPopup.css">`
;
document.head.innerHTML += headerLinkTagCSS;

document.body.getElementsByTagName("header")[0].innerHTML = headerInnerHTML;

