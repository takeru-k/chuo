$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.header__menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

var Swiper = new Swiper('.swiper', {

  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // 画面幅が 1024px 以上の場合（window width >= 1024px）
    900: {
      slidesPerView: 1.5,
       centeredSlides : true, 
      spaceBetween: 24
    },
  },
})
