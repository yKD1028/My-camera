// 画像保存防止
// document.oncontextmenu = function(){ return false; };
// document.body.oncontextmenu = "return false;"
document.onselectstart = function(){ return false; };
document.onmousedown = function(){ return false; };
document.body.onselectstart = "return false;"
document.body.onmousedown = "return false;"

// フェードイン
$(window).on('load scroll', function (){
    var box = $('.section');
    var animated = 'animated';
    box.each(function(){
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
        if(scrollPos > boxOffset - wh + 300 ){
            $(this).addClass(animated);
        }
    });
});