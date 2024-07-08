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

  const mainTL = gsap.timeline();
  mainTL
    .from('#header', { y: -100, autoAlpha: 0, duration: 1 })
    .from(
      '.now-category > strong',
      { y: +100, autoAlpha: 0, duration: 0.5 },
      '-=0.3'
    );
});
