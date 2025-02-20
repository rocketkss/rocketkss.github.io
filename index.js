document.addEventListener('DOMContentLoaded', function () {
  function getRandomDelay() {
      return Math.random() * 4 + 1; // 0～5秒のランダムな遅延
  }

  const circle = document.querySelector('.circle');

  function startAnimation() {
      // アニメーションをリセット
      circle.style.animation = 'none';

      // 一定時間後にアニメーションを開始
      setTimeout(() => {
          circle.style.animation = 'anim 1s linear infinite';
      }, getRandomDelay() * 1000); // ms単位に変換
      console.log(getRandomDelay())
  }

  // 初回アニメーション開始
  startAnimation();

  // アニメーションが完了するたびに遅延を設定
  circle.addEventListener('animationiteration', function () {
      startAnimation();
  });
});

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
