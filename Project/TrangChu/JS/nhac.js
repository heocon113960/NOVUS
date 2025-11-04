  window.addEventListener('DOMContentLoaded', function () {
    const audio = document.querySelector('audio');
    document.body.addEventListener('click', function () {
      audio.play().catch(function (error) {
        console.log("Trình duyệt chặn autoplay:", error);
      });
    });
  });