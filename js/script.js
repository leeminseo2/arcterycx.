$(function () {
  // Initialize the work slider
  gsap.registerPlugin(ScrollTrigger);

  const $btnMmenu = $('.btn-menu');
  const $mSubmenu = $('.m-submenu-wrap');
  const $dim = $('.dim');
  const $btnClose = $('.btn-close');
  const $mGnbMenu = $('.m-gnb > li');
  const $mGnbSubmenu = $('.m-gnb-sub');

  // 모바일 용 메뉴를 클릭했을 때
  $mGnbMenu.on('click', function () {
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).find($mGnbSubmenu).stop().slideToggle(duration);
    $(this).siblings().find($mGnbSubmenu).stop().slideUp(duration);
  });

  $btnMmenu.on('click', function () {
    $mSubmenu.addClass('active');
    $dim.fadeIn(duration);
  });

  $btnClose.add($dim).on('click', function () {
    $mSubmenu.removeClass('active');
    $dim.fadeOut(duration);

    // 모바일 용 서브메뉴 초기화
    $mGnbMenu.removeClass('on');
    $mGnbSubmenu.stop().slideUp(duration);
  });

  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);
    $(this).addClass('on');
    $header.addClass('active');
  });

  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });

  $window.on('wheel', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $header.removeClass('hide');
    } else {
      $header.addClass('hide');
    }
  });

  const newSlider = new Swiper('.newcollection-slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    // autoplay: true,
    pagination: {
      el: '.col-swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.btn-after-white',
      prevEl: '.btn-before-white',
    },

    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      621: {
        slidesPerView: 1,
      },
      837: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  const bestSlider = new Swiper('.bestseller-slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.best-swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.btn-after-black',
      prevEl: '.btn-before-black',
    },
    breakpoints: {
      621: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 4,
      },
    },
    // autoplay: true,
  });
  const mainTL = gsap.timeline();
  mainTL
    .from('#header', { y: -100, autoAlpha: 0, duration: 1 })
    .from(
      '.visual-arcterycx',
      { y: +100, autoAlpha: 0, duration: 0.5 },
      '-=0.3'
    )
    .from('.btn-play', { y: +100, autoAlpha: 0, duration: 0.5 }, '-=0.3')
    .from('.visual-title h2', { y: +100, autoAlpha: 0, duration: 0.5 }, '-=0.3')
    .from('.visual-title p', { y: +100, autoAlpha: 0, duration: 0.5 }, '-=0.3');

  const aboutTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.introduce',
      start: 'top 60%', // .about-con-wrap's top reaches 80% of viewport height

      // markers: true,
    },
  });

  aboutTL.from('.introduce-title > *', {
    y: 100,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.5,
  });
  const cloudTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.introduce',
      start: '-=1000px 0', // .about-con-wrap's top reaches 80% of viewport height
      scrub: 1,
      // markers: true,
    },
  });
  cloudTL.to('.introduce-pic-cloud > .cloud1', {
    y: -800,
    autoAlpha: 0.4,
    duration: 6,
    scrub: 1,
  });
  cloudTL.to(
    '.introduce-pic-cloud > .cloud3',
    {
      y: -700,
      autoAlpha: 0.4,
      duration: 6,
    },
    '-=5.5'
  );
  cloudTL.to(
    '.introduce-pic-cloud > .cloud2',
    {
      y: -700,
      autoAlpha: 0.4,
      duration: 6,
    },
    '-=5.5'
  );
  const newTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.new-collection',
      start: 'top 50%', // .about-con-wrap's top reaches 80% of viewport height
      // markers: true,
    },
  });
  newTL.from('.new-collection-title', {
    y: +100,
    autoAlpha: 0,
    duration: 0.7,
  });
  newTL.from(
    '.new-collection-model',
    {
      x: -200,
      autoAlpha: 0,
      duration: 0.7,
    },
    '-=0.3'
  );
  newTL.from(
    '.newcollection-slider-wrap',
    {
      x: 200,
      autoAlpha: 0,
      duration: 0.7,
    },
    '-=0.7'
  );

  newTL.from(
    '.new-collection-con',
    {
      x: 200,
      autoAlpha: 0,
      duration: 0.7,
    },
    '-=0.7'
  );
  const bestTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.best-sellers',
      start: 'top 50%', // .about-con-wrap's top reaches 80% of viewport height
      // markers: true,
    },
  });
  bestTL.from('.best-sellers-title', {
    y: +100,
    autoAlpha: 0,
    duration: 0.7,
  });
  bestTL.from(
    '.best-sellers .swiper-slide',
    {
      y: 100,
      autoAlpha: 0,
      duration: 0.3,
      stagger: 0.15,
    },
    '-=0.7'
  );
  const mentTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.design-ment',
      start: '-=1000px 0', // .about-con-wrap's top reaches 80% of viewport height
      end: 'bottom 50%',
      // markers: true,
      scrub: 1,
    },
  });
  mentTL.from('.ment-item1', {
    x: -200,
    autoAlpha: 0,
    duration: 0.7,
  });
  mentTL.from(
    '.ment-item2',
    {
      x: 200,
      autoAlpha: 0,
      duration: 0.7,
    },
    '-=0.7'
  );
  mentTL.from(
    '.ment-item3',
    {
      x: -200,
      autoAlpha: 0,
      duration: 0.7,
    },
    '-=0.7'
  );

  AOS.init({
    duration: 400,
    easing: 'ease-in',
    once: true,
  });
});
