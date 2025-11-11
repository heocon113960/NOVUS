const password= document.getElementById('mk');
const battatpass = document.getElementById('battatmk');
battatpass.addEventListener('click', () =>
                {
                    if (password.type === 'password')
                {
                    password.type = 'text';
                    battatpass.innerHTML = '<img src = "Img/Eye_off.png">';
                }
                else 
                {
                    password.type = 'password';
                    battatpass.innerHTML = '<img src = "Img/Eye (1).png">';
                }
            });
            const pass= document.getElementById('nhaplai');
                const anhienpass = document.getElementById('anhienmk');
                anhienpass.addEventListener('click', () =>
                {
                    if (pass.type === 'password')
                {
                    pass.type = 'text';
                    anhienpass.innerHTML = '<img src = "Img/Eye_off.png">';
                }
                else 
                {
                    pass.type = 'password';
                    anhienpass.innerHTML = '<img src = "Img/Eye (1).png">';
                }
            });



document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.dkform');

    form.addEventListener('submit', function (e) 
    {
      e.preventDefault();

      const username = document.querySelector('.username').value.trim();
      const email = document.querySelector('.email').value.trim();
      const matkhau = document.getElementById('mk').value;
      const nhaplai = document.getElementById('nhaplai').value;
      const sdt = document.querySelector('.sdt').value.trim();
      const thongbao = document.querySelector('.thongbao input').checked;
      const thoathuan = document.querySelector('.thoathuan input').checked;

      if (matkhau !== nhaplai) {
        alert("❌ Mật khẩu nhập lại không khớp!");
        return;
      }
      
      db.collection("dangky").add({
        username,
        email,
        matkhau,
        sdt,
        thongbao,
        thoathuan,
        ngayDangKy: new Date(),
        trangthai: "chờ duyệt"
      })
      .then(() => {
        alert("✅ Đăng ký thành công! Vui lòng chờ duyệt.");
        form.reset();
        document.getElementById('popupOverlay').style.display = 'none';
      })
      .catch((error) => {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("❌ Đã xảy ra lỗi. Vui lòng thử lại.");
      });
    });
  });