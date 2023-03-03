// DOM要素の変数定義
var topBtn = $('#pageTop');
var logosp = $('#logosp');
var logos = $('#logos');
var topl = $('#pctopl');
var topr = $('#pctopr');
/*
 * DOM読み込み前処理
 */
jQuery(document).ready(function($) {
  // 読み込み中画面の表示
  $('#container').css('display','none');
  $('#loadwrap').css('display','block');
  
  // ヘッダー下のバーのCSS
  $.scrolline({
		backColor : '#000',
		frontColor : '#2692a8',
		weight : 65,
		zindex : 100
  });

  // スクロールしてコンテンツが現れたときにアニメーションさせる
  // http://weboook.blog22.fc2.com/blog-entry-385.html
  $('.sl').css({
    "opacity":"0",
    "filter":"alpha(opacity=0)",
    "-moz-opacity":"0"
  });

  // "#*"のアンカーをクリックしたらゆっくり移動
	$('a[href^="#"]').on('click', function() {
		// スクロールの速度
		var speed = 500; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({
			scrollTop : position
		}, speed, 'swing');
		return false;
  });
  
  // TOPに戻るボタン、スマホ用ロゴ
  topBtn.hide();
  logosp.hide();
  
  // PC用のヘッダー
  logos.hide();
  topl.css('display','none');
  topr.css('width', '100%');
});

/*
 * DOM読み込み完了後処理
 */
$(window).on('load', function() {
  $('#loadwrap').fadeOut(1000);
  $('#container').css('display', 'block');  
});

// スライドショー
$(window).on('load', function slide() {
	$('.bxslider').bxSlider({
		auto : true,
	});
});

/*
 * スクロール時処理
 */
$(window).scroll(function (){
  $('.sl').each(function(){
    var imgPos = $(this).offset().top;    
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 150){
      $(this).animate({ 
        "margin-top": "20px",
        "opacity": "1",
        "filter":"alpha(opacity=1)",
        "-moz-opacity":"1"
      }, 500);
    }
  });

  // スクロールが200に達したらボタン表示
  if ($(this).scrollTop() > 200) {
      topBtn.fadeIn();
      logosp.fadeIn();
  } else {
      topBtn.fadeOut();
      logosp.fadeOut();
  }
  // スクロールが230に達したらボタン表示
  if ($(this).scrollTop() > 230) {
      logos.fadeIn();
      topr.css('width', '80%');
      topl.delay(200).queue(function(){
    topl.css('display','block');
    topl.css('width', '20%').dequeue();
  });
  } else {
      logos.fadeOut();
      topl.css('display','none');
      topr.delay(200).css('width', '100%');
  }
});

