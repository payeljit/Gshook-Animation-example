
(function($){
  // // jQuery methods go here...
  // var proimg = $('#proimg');
  // TweenLite.to(proimg, 2.5, { ease: Power2.easeInOut, y: -500  });

var leftImage = $('#left-img'),
    rightImage = $('#right-img'),
    logo = $('#logo'),
    btn = $('#btnPlay'),
    li1 = document.getElementsByClassName('lists')[0].firstElementChild,
    li2 = document.getElementsByClassName('lists2')[0].firstElementChild,
    tl = new TimelineLite();


tl
.from(leftImage, 0.5,{ease: Back.easeOut.config(1.7), x: -500  })
.from(rightImage, 0.5, {ease: SlowMo.ease.config(0.7, 0.7, false), y: -500 })
.from(li1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeIn, delay: 0.8})
.from(li2, 0.3, {x: -15, autoAlpha: 0, ease:Power1.easeIn, delay: 1})
.from(btn, 0.2, {ease: Bounce.easeIn, y: -500});


 $('#btnPlay').on('click', function(){
   tl.restart();
 });

// TweenLite.from(lists, 1, { ease: Elastic.easeOut.config(1, 0.3), x: -500});

TweenMax.from( logo, 0.5,
      {css:{scale:0.05, opacity:0, rotation: 280},
      ease:Quad.easeInOut
});
})(jQuery);
