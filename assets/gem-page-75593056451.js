

(function( jQuery ){
  var $hero = jQuery('#m-1612487858214');
  var $module = jQuery('#m-1612487858214').children('.module');

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
})( window.GemQuery || jQuery );
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885').children('.module');

            var sameHeightTitle = $module.data('sameheightitle'),
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
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child1').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child1-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child1-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child1-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child2').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child2-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child2-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child2-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child3').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child3-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child3-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child3-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child4').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child4-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child4-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child4-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child5').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child5-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child5-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child5-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child6').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child6-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child6-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child6-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child7').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child7-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child7-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child7-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child8').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child8-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child8-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570090066885-child8-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497').children('.module');

            var sameHeightTitle = $module.data('sameheightitle'),
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
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child1').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child1-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child1-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child1-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child2').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child2-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child2-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child2-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child3').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child3-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child3-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child3-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child4').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child4-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child4-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child4-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child5').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child5-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child5-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child5-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child6').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child6-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child6-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child6-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child7').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child7-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child7-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child7-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child8').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child8-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child8-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child8-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child9').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child9-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child9-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child9-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child10').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child10-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child10-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child10-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child11').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child11-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child11-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child11-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child12').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child12-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child12-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1612376615497-child12-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
                            jQuery(function(){
                                try{
                                    if(jQuery().gfV2Lazyload){
                                        var $module=jQuery(window);
                                        $module.gfV2Lazyload({delay:125})
                                    }
                                }catch(err){
                                    console.error(err)
                                }
                            })
                        
var gemFlag=!1;for(var i=0;i<pageLibs.length;i++){if(pageLibs[i].indexOf('gfv3product.js')!==-1){if(jQuery.gfV3Product==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfv3restabs.js')!==-1){if(jQuery.gfV3ResTabs==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfaccordion.js')!==-1){if(jQuery.gfAccordion==undefined){gemFlag=!0;break}}}if(gemFlag){var count=0;for(var i=0;i<pageLibs.length-1;i++){jQuery.getScript(pageLibs[i],function(){count++;if(count==pageLibs.length-1){jQuery.getScript(pageLibs[pageLibs.length-1],function(){})}})}}