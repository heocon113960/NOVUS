const submitBtn = document.getElementById("submitBtn");
const popup = document.getElementById("popup");
const form = document.querySelector("form");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.innerHTML =
      '<i class="fas fa-check-circle"></i> Đã gửi thành công!';
    submitBtn.classList.add("success");
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.display = "none";
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Đăng tuyển';
      submitBtn.classList.remove("success");
      form.reset();
    }, 4000);
  }, 2000);
});
