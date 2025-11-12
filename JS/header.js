let headerInnerHTML = `<nav id="wrapper">

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
    <span id="closeModalBtn" class="close2">&times;</span>
        <section class = "dangkiungtuyen">

            <table class="tabledk">
                <tr>
                    <td>
            <form class="dkform">
              <br>
              <br>

                <h1 class ="dangki">Đăng kí ứng viên</h1>
            <section class = "nhapthongtin">
                <input required class ="username" type = "text" placeholder="Tên Đăng Nhập">
            <input required class = "email" type="email" placeholder="Email">

            <section class = "password">
            <div class = "nhappassword" id="nhappassne"><input id = "mk" required type = "password" placeholder="Nhập mật khẩu"><span id ="battatmk"><img src = "Img/Eye (1).png"></span></div>
            <div class = "nhappassword"><input id = "nhaplai" required type= "password" placeholder="Nhập lại mật khẩu"><span id ="anhienmk"><img src = "Img/Eye (1).png"></span></div>
             </section>

             <input required class = "sdt" type="text" placeholder="Số điện thoại">
                          <div class ="or"><span>hoặc</span></div>
             <button class ="google" type= "button" aria-label= "Đăng nhập bằng google"  onclick="signInWithGoogle()"><img src = "Img/Google.png">Google</button>
             <div class ="thongbao"><input type="checkbox"><span>Luôn nhận thông báo từ NOVUS</span></div>
             <div class ="thoathuan"><input required type="checkbox"><p>Tôi đồng ý với việc xử lý và cung cấp thông tin dữ liệu cá nhân, đồng thời đã đọc và đồng ý với <a>Chính sách</a> và <a>Quy định bảo mật</a> của NOVUS</p></div>

            <div class ="ntd">Bạn là nhà tuyển dụng? Đăng ký&nbsp;<a>Nhà Tuyển Dụng</a>&nbsp;ngay</div>
            </section>
            <div class ="nutdangki"><input type ="submit" value="Đăng kí" style="cursor: pointer;"></div>
            </form>
            </td>
            <td>
             <section class ="anhdangki">
            <img src ="Img/Banner_doc.png">
            </section>
            </td>
            </tr>
            </table>
</section>
</div>
</div>

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
          <button class="navphaidangnhap" onclick="openLoginPopup()" style="cursor: pointer;">ĐĂNG NHẬP</button>
            <a href="#" class="navphaidangky">Đăng ký</a>
          </section>
          <div id="user-info"></div>


    
        </nav>

       
`;
const headerLinkTagCSS = `
<link rel="stylesheet" href="./CSS/header.css">
<link rel="stylesheet" href="CSS/POPutLogin.css">
<link rel="stylesheet" href="CSS/Popupdangky.css">
<link rel="stylesheet" href="CSS/DangNhapGG.css">`;
document.head.innerHTML += headerLinkTagCSS;

document.body.getElementsByTagName("header")[0].innerHTML = headerInnerHTML;

