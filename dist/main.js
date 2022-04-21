$(window).on('load', function(){
    $('.overlay, body').addClass('loaded');
    setTimeout(function() {
        $('.overlay').css({'display':'none'})
    }, 1000)
    var vid = document.getElementById("video_main"); 
    $('.video_main').css('display', 'block');
    vid.play();
    setTimeout(function() {
        $('.bs-video').css({'display':'none','opacity':'0'});
        Showfullpage();
    }, 6500)
    
});
function Showfullpage(){
    myFullpage = new fullpage('#fullpage', {
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      	menu: '#menu',
		scrollOverflow: true,
		onLeave: function(){
        jQuery('.section [data-aos]').removeClass("aos-animate");
    },
    onSlideLeave: function(){
        jQuery('.slide [data-aos]').removeClass("aos-animate");
    },
    afterSlideLoad: function(){
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
    },
    afterLoad: function(){
        jQuery('.section.active [data-aos]').addClass("aos-animate");
       //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
    }
    });
}