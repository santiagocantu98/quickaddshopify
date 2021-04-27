

          jQuery(function() {
  var $hero = jQuery('#m-1607041108073');
  var $module = jQuery('#m-1607041108073').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    function changeImage(){
      var backgroundImage = $module.parent().css('background-image');
      if(backgroundImage){
       backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
       $module.find('.gf_hero-fixed').attr('src', backgroundImage);
       $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
   changeImage();

    jQuery(window).resize(function(){
      changeImage();
    });
  } else {
    $module.parent().removeAttr('style');
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
      
      
      
          jQuery(function() {
  var $hero = jQuery('#m-1607041108106');
  var $module = jQuery('#m-1607041108106').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    function changeImage(){
      var backgroundImage = $module.parent().css('background-image');
      if(backgroundImage){
       backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
       $module.find('.gf_hero-fixed').attr('src', backgroundImage);
       $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
   changeImage();

    jQuery(window).resize(function(){
      changeImage();
    });
  } else {
    $module.parent().removeAttr('style');
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
      
      
      
      
          jQuery(function() {
  var $hero = jQuery('#m-1607046022544');
  var $module = jQuery('#m-1607046022544').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    function changeImage(){
      var backgroundImage = $module.parent().css('background-image');
      if(backgroundImage){
       backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
       $module.find('.gf_hero-fixed').attr('src', backgroundImage);
       $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
   changeImage();

    jQuery(window).resize(function(){
      changeImage();
    });
  } else {
    $module.parent().removeAttr('style');
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
      
      
      
      
          jQuery(function() {
  try {
    var $module = jQuery('#m-1607041108111').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var autoplay = $module.data('autoplay'), 
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
              items:colxs,
              nav: navxs,
              dots:dotsxs,
              margin: marginxs
          },
          768:{
              items:colsm,
              nav: navsm,
              dots:dotssm,
              margin: marginsm
          },
          992:{
              items:colmd,
              nav: navmd,
              dots:dotsmd,
              margin: marginmd
          },
          1200:{
              items:collg,
              nav: navlg,
              dots:dotslg,
              margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
        setTimeout(function() {	
            initCarousel();	
        }, 300)	
    } else {	
        initCarousel();	
    }
  } catch(err) {}
}); 
      
      
    
jQuery(function () {
  var $hero = jQuery('#m-1607044145165');
  var $module = jQuery('#m-1607044145165').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if (mode == 'dev' && $heroLink.length > 0) {
    $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function (e) {
      var $target = jQuery(e.target);
      if ($target.length > 0) {
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr("data-height"));
  if (height == undefined || height == "") {
    $hero.css("height", "auto!important");
  } else {
    $hero.css("height", "inherit");
  }


  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if (effect == 'effect-zoom') {
    $module.parent().addClass(effect);

    setTimeout(function () {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image': 'inherit',
        'background-size': 'inherit',
        'background-position': 'inherit',
        '-webkit-transition': 'transform ' + transition + 's ease-in-out',
        '-moz-transition': 'transform ' + transition + 's ease-in-out',
        '-ms-transition': 'transform ' + transition + 's ease-in-out',
        '-o-transition': 'transform ' + transition + 's ease-in-out',
        'transition': 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image': 'inherit',
        'background-size': 'inherit',
        'background-position': 'inherit',
        '-webkit-transition': 'transform ' + transition + 's ease-in-out',
        '-moz-transition': 'transform ' + transition + 's ease-in-out',
        '-ms-transition': 'transform ' + transition + 's ease-in-out',
        '-o-transition': 'transform ' + transition + 's ease-in-out',
        'transition': 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  } else{
    $module.parent().removeClass("effect-zoom");
  }

  if ($module.attr('data-fixedMode') == '1') {
    function changeImage() {
      var backgroundImage = $module.parent().css('background-image');
      if (backgroundImage) {
        backgroundImage = backgroundImage.replace('url(', '').replace(')', '').replace(/\"/gi, "");
        $module.find('.gf_hero-fixed').attr('src', backgroundImage);
        $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
    changeImage();
    let windowWidth = jQuery(window).width();
    let timeoutResize = 0;
    jQuery(window).resize(function () {
      if (jQuery(window).width() == windowWidth) {
        return;
      }
      windowWidth = jQuery(window).width();

      if (timeoutResize) {
        clearTimeout(timeoutResize);
        timeoutResize = 0;
      }

      timeoutResize = window.setTimeout(function () {
        changeImage();
      }, 16);
    });
  } else {
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
    
    
          jQuery(function() {
    var $module = jQuery('#m-1607041108062').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});
      
    
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child1').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child1-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child2').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child2-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child3').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child3-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child4').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child4-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child4-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child5').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child5-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child5-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child6').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child6-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child6-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child7').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child7-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child7-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child8').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child8-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child8-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child9').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child9-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child9-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child10').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child10-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child10-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child11').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child11-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child11-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child12').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child12-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child12-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child12-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child12-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child13').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child13-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child13-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child13-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child13-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child14').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child14-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child14-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child14-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child14-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child15').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child15-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child15-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child15-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child15-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child16').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child16-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child16-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child16-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child16-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child17').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child17-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child17-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child17-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child17-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child18').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child18-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child18-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child18-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child18-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child19').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child19-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child19-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child19-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child19-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child20').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child20-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child20-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child20-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child20-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child21').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child21-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child21-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child21-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child21-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child22').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child22-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child22-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child22-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child22-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child23').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child23-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child23-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child23-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child23-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child24').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108062-child24-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child24-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108062-child24-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108062-child24-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108141').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});
      
    
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child1').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108141-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child1-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108141-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child2').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108141-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child2-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108141-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child3').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607041108141-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child3-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607041108141-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607041108141-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
      
    
jQuery(function () {
  var $hero = jQuery('#m-1607044260770');
  var $module = jQuery('#m-1607044260770').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if (mode == 'dev' && $heroLink.length > 0) {
    $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function (e) {
      var $target = jQuery(e.target);
      if ($target.length > 0) {
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr("data-height"));
  if (height == undefined || height == "") {
    $hero.css("height", "auto!important");
  } else {
    $hero.css("height", "inherit");
  }


  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if (effect == 'effect-zoom') {
    $module.parent().addClass(effect);

    setTimeout(function () {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image': 'inherit',
        'background-size': 'inherit',
        'background-position': 'inherit',
        '-webkit-transition': 'transform ' + transition + 's ease-in-out',
        '-moz-transition': 'transform ' + transition + 's ease-in-out',
        '-ms-transition': 'transform ' + transition + 's ease-in-out',
        '-o-transition': 'transform ' + transition + 's ease-in-out',
        'transition': 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image': 'inherit',
        'background-size': 'inherit',
        'background-position': 'inherit',
        '-webkit-transition': 'transform ' + transition + 's ease-in-out',
        '-moz-transition': 'transform ' + transition + 's ease-in-out',
        '-ms-transition': 'transform ' + transition + 's ease-in-out',
        '-o-transition': 'transform ' + transition + 's ease-in-out',
        'transition': 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  } else{
    $module.parent().removeClass("effect-zoom");
  }

  if ($module.attr('data-fixedMode') == '1') {
    function changeImage() {
      var backgroundImage = $module.parent().css('background-image');
      if (backgroundImage) {
        backgroundImage = backgroundImage.replace('url(', '').replace(')', '').replace(/\"/gi, "");
        $module.find('.gf_hero-fixed').attr('src', backgroundImage);
        $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
    changeImage();
    let windowWidth = jQuery(window).width();
    let timeoutResize = 0;
    jQuery(window).resize(function () {
      if (jQuery(window).width() == windowWidth) {
        return;
      }
      windowWidth = jQuery(window).width();

      if (timeoutResize) {
        clearTimeout(timeoutResize);
        timeoutResize = 0;
      }

      timeoutResize = window.setTimeout(function () {
        changeImage();
      }, 16);
    });
  } else {
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
    
    
          jQuery(function() {
    var $module = jQuery('#m-1607044260789').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});
      
    
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child1').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child1-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child2').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child2-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child3').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child3-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child4').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child4-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child4-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child5').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child5-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child5-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child6').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child6-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child6-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child7').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child7-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child7-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child8').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child8-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child8-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child9').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child9-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child9-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child10').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child10-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child10-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child11').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child11-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child11-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child12').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260789-child12-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child12-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260789-child12-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260789-child12-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260845').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});
      
    
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child1').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260845-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child1-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260845-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child2').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260845-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child2-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260845-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child3').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1607044260845-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child3-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1607044260845-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1607044260845-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
      
      
          jQuery(function() {
  var $hero = jQuery('#m-1607041229695');
  var $module = jQuery('#m-1607041229695').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    function changeImage(){
      var backgroundImage = $module.parent().css('background-image');
      if(backgroundImage){
       backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
       $module.find('.gf_hero-fixed').attr('src', backgroundImage);
       $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
   changeImage();

    jQuery(window).resize(function(){
      changeImage();
    });
  } else {
    $module.parent().removeAttr('style');
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
      
      
      
      
          jQuery(function() {
  var $hero = jQuery('#m-1607041229744');
  var $module = jQuery('#m-1607041229744').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    function changeImage(){
      var backgroundImage = $module.parent().css('background-image');
      if(backgroundImage){
       backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
       $module.find('.gf_hero-fixed').attr('src', backgroundImage);
       $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
   changeImage();

    jQuery(window).resize(function(){
      changeImage();
    });
  } else {
    $module.parent().removeAttr('style');
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
      
      
      
      
      
          jQuery(function() {
  var $hero = jQuery('#m-1607041229789');
  var $module = jQuery('#m-1607041229789').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    function changeImage(){
      var backgroundImage = $module.parent().css('background-image');
      if(backgroundImage){
       backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
       $module.find('.gf_hero-fixed').attr('src', backgroundImage);
       $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
   changeImage();

    jQuery(window).resize(function(){
      changeImage();
    });
  } else {
    $module.parent().removeAttr('style');
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
      
      
      
var gemFlag=!1;for(var i=0;i<pageLibs.length;i++){if(pageLibs[i].indexOf('gfv3product.js')!==-1){if(jQuery.gfV3Product==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfv3restabs.js')!==-1){if(jQuery.gfV3ResTabs==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfaccordion.js')!==-1){if(jQuery.gfAccordion==undefined){gemFlag=!0;break}}}if(gemFlag){var count=0;for(var i=0;i<pageLibs.length-1;i++){jQuery.getScript(pageLibs[i],function(){count++;if(count==pageLibs.length-1){jQuery.getScript(pageLibs[pageLibs.length-1],function(){})}})}}