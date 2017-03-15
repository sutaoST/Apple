$(function(){
    var Gllerli=$('.gallery li');
    var Lineli=$('.line li');
    var i=0;
    function autoplay(){
        Lineli.eq(i).find('p').animate({width:'100%'},2500,function(){
            Lineli.find('p').css('width','0');
            i++;
            if (i>2) {
                i=0;
            };
        });
        Gllerli.eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    autoplay();
    setInterval(function(){
        autoplay();
    }, 3000);  
});


$(function(){
    $('.apps-item li').click(function(){
        $('.apps-item li').attr('class','');
        $(this).attr('class','active');
        var i=$(this).index();
        $('.app-gallery .gallery-items').css('display','none');
        $('.app-gallery .gallery-items').eq(i).css('display','block')
    });
});

$(function(){
    $('.app-items-all li').click(function(){
        $('.app-items-all li').attr('class','');
        $(this).attr('class','active');
        var i=$(this).index();
        $('.app-gallerys-all .gallery-items-all').css('display','none');
        $('.app-gallerys-all .gallery-items-all').eq(i).css('display','block');
    })
})

