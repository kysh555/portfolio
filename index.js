// ヘッダー部分のアニメーション
$(function(){
  $(window).on('scroll', function(){
    heightMainImage = $('#image-area').height();
    headerBar = $('#header-bar');
    if($(window).scrollTop() > heightMainImage * 0.9){
      headerBar.addClass('transform');
    } else {
      headerBar.removeClass('transform');
    }
  })
});

// ページ内リンクのスクロール機能
$(function(){
  $('a[href^="#"]').on('click', function(){
    speed = 100;
    href = $(this).attr("href");
    target = $(href == "#" || href == "" ? 'html' : href);
    position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
  })
});


$(function(){
  $(window).on('scroll', function(){
    $(".scroll-anime").each(function(){
      scrollAmount = $(window).scrollTop();
      heightWindow = $(window).height();
      target = $(this).offset().top;
      if(scrollAmount > target - heightWindow + 100){
        $(this).addClass("fadeIn");
      }
    });
  })
});

// ヘッダーとフッターの呼び出し
$(function(){
  $('#header').load("header.html");
  $('#footer').load("footer.html");
});

// 作品詳細表示・非表示の切り替え
$(function(){
  var scrollAmount;
  $(".modal-open").on('click', function(){
    scrollAmount = $(window).scrollTop();
    $(".modal").fadeIn();
    $("body").addClass("fixed").css({top: -scrollAmount});
    return false;
  });
  $(".modal-close, .modal-back").on('click', function(){
    $(".modal").fadeOut();
    $("body").removeClass("fixed");
    $(window).scrollTop(scrollAmount);
    return false;
  });
});