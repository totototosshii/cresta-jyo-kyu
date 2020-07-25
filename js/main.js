$(function () {
  //ファーストビューの高さを取得
  let bgHeight = $('.first-view').outerHeight();
  //ファーストビュー画像の高さを取得
  let imgHeight = $('.first-view-content').outerHeight();

  // ハンバーガーボタン
  $('.drawer-btn').on('click', function () {
    $('.bar').toggleClass('cross');
    $('.header-nav').toggleClass('open');
    $('.header-musk').fadeToggle('300');
    $('body').toggleClass('noscroll');
    //メインビジュアルより下でクリックされた時、ハンバーガーボタンを黒くしたり白くしたりする
    if ($(window).scrollTop() > imgHeight - 50) {
      $(this).toggleClass('black');
    }
  });

  // スクロール時、ロゴとハンバーガーボタンのカラー変更
  $(window).on('load scroll', function () {
    if ($(window).scrollTop() < imgHeight - 50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.header-logo').removeClass('black');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.header-logo').addClass('black');
    };
    if ($(window).scrollTop() < bgHeight - 50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.drawer-btn').removeClass('black');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.drawer-btn').addClass('black');
    };
  });

});
