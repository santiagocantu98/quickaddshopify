

    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1606942831092').children('.module');
  
  var handles = [
    "6131923255491",
    "3-pack-all-black",
    "3-pack-classic-distressed",
    "3-pack-classic-slub",
    "3-pack-long-sleeve",
    "3-pack-smiley",
    "4-pack-xpocket-classic",
    "6-pack-xpocket-curved",
    "3-pack-xpocket-curved",
    "3-pack-xpocket-curved-colores",
    "3-pack-polo",
    "5-pack-henley",
    "3-pack-basics-sin-mangas",
    "3-pack-sueteres-tejidos"
  ];
  
  function setEventListeners() {
  	var forms = Array.from(document.getElementsByClassName("AddToCartForm "));
    forms.forEach(function(form){
        form.addEventListener("submit", function (event) {
            console.log(event);
          var product_id = form["data-productid"];
          console.log(product_id);
          if(handles.includes(String(product_id))) {
            event.preventDefault();
            event.stopPropagation();
            addToCart();
          }
        });        
    });
  }
  
  setEventListeners();
  
  
  function getVariantsArray(product_id) {
    var variants = getVariants(product_id);
    var data = Object.keys(variants).map(key => ({
      id: variants[key],
      quantity: 1
    }));
    return data;
  }
  
  function getVariants(product_id) {
    switch(product_id){
      case "basictee-3packb":
        var stone, military, navy;
        //XS
        if(selected == 32443327283297) {
           stone = 32431196438625;
           military = 32431195914337;
           navy = 32431196045409;
        //S
        } else if(selected == 32443327316065) {
           stone = 32431196471393;
           military = 32431195947105;
           navy = 32431196078177;
        //M
        } else if(selected == 32443327348833) {
           stone = 32431196504161;
           military = 32431195979873;
           navy = 32431196110945;
        //L
        } else {
           stone = 32431196536929;
           military = 32431196012641;
           navy = 32431196012641;
        }
        return {
          military,
          navy,
          stone 
        }
      case "3-pack-all-black":
        var xpocket, distressed, classic;
        //XS
        if(selected === 37704428748995) {
           xpocket = 37690611761347;
           distressed = 32431196176481;
           classic = 32431196569697;
        //S
        } else if(selected === 37704428781763) {
          xpocket = 37690611794115;
          distressed = 32431196209249;
          classic = 32431196602465;
        //M
        } else if(selected === 37704428814531) {
          xpocket = 37690611826883;
          distressed = 32431196242017;
          classic = 32431196635233;
        //L
        } else if(selected === 37704428847299) {
          xpocket = 37690611859651;
          distressed = 32431196274785;
          classic = 32431196668001;
        }
        return {
          xpocket,
          distressed,
          classic
        }
      case "3-pack-classic-distressed":
      	var black, turbulence, stone, white;
        //XS
        if(selected === 37705650176195) {
          black = 32431196569697;
          turbulence = 37696566165699;
          stone = 32431196438625;
          white = 32431196700769;
        //S
        } else if(selected === 37705650208963) {
          black = 32431196602465;
          turbulence = 37696566198467;
          stone = 32431196471393;
          white = 32431196733537;
        //M
        } else if(selected === 37705650241731) {
          black = 32431196635233;
          turbulence = 37696566231235;
          stone = 32431196504161;
          white = 32431196766305;
        //L
        } else if(selected === 37705650274499) {
          black = 32431196668001;
          turbulence = 37696566264003;
          stone = 32431196536929;
          white = 32431196799073;
        }
        return {
          black,
          turbulence,
          //stone,
          white
        }
      case "3-pack-classic-slub":
        var white, black, military;
        //XS
        if(selected === 37705693462723) {
           white = 37690792640707;
           black = 37690792476867;
           military = 37690792345795;
        //S
		} else if(selected === 37705693495491) {
           white = 37690792673475;
           black = 37690792509635;
           military = 37690792378563;
        //M
        } else if(selected === 37705693561027) {
           white = 37690792706243;
           black = 37690792542403;
           military = 37690792411331;
        //L
        } else{
           white = 37690792739011;
           black = 37690792575171;
           military = 37690792444099;
        }
        return {
          white,
          black,
          military
        }
      case "3-pack-long-sleeve":
        var graphite, ivory, sandstone;
        //S
        if(selected === 37705809461443) {
           graphite = 37614969618627;
           ivory = 37614970110147;
           sandstone = 37614969979075;
        //M
        } else if(selected === 37705809494211) {
           graphite = 37614969651395;
           ivory = 37614970142915;
           sandstone = 37614970011843;
        //L
        } else {
           graphite = 37614969684163;
           ivory = 37614970175683;
           sandstone = 37614970044611;
        }
        return {
          graphite,
          ivory,
          sandstone
        }
      case "3-pack-smiley":
        var gris, black, white;
        //XS
        if(selected === 37705818996931) {
          gris = 37690783432899;
          black = 32431196176481;
          white = 32431196307553;
        //S
        } else if(selected === 37705819029699) {
          gris = 37690783465667;
          black = 32431196209249;
          white = 32431196340321;
        //M
        } else if(selected === 37705819062467) {
          gris = 37690783498435;
          black = 32431196242017;
          white = 32431196373089;
        //L
        } else {
          gris = 37690783531203;
          black = 32431196274785;
          white = 32431196405857;
        }
        return {
       	  gris,
          black,
          white
        }
      case "4-pack-xpocket-classic":
        var washed, black, military, oak;
        //XS
        if(selected === 37705825124547) {
          washed = 37690611761347;
          black = 37690611171523;
          military = 37690611007683;
          oak = 37690611564739;
        //S
        } else if(selected === 37705825157315) {
          washed = 37690611794115;
          black = 37690611204291;
          military = 37690611040451;
          oak = 37690611597507;
        //M
        } else if(selected === 37705825190083) {
          washed = 37690611826883;
          black = 37690611237059;
          military = 37690611073219;
          oak = 37690611630275;
        //L
        } else {
          washed = 37690611859651;
          black = 37690611269827;
          military = 37690611105987;
          oak = 37690611663043;
        }
        return {
          washed,
          black,
          military,
          oak
        }
      case "6-pack-xpocket-curved":
      	var black, gris, military, stone, turbulence, washed, white;
        //XS
        if(selected === "") {
          black = 32431210528865;
          gris = 37670699794627;
          military = 32431210004577;
          stone = 37670700024003;
          turbulence = 37670700449987;
          washed = 32431210659937;
          white = 32431210791009;
        //S
        } else if(selected ==="") {
          black = 32431210561633;
          gris = 37670699860163;
          military = 32431210037345;
          stone = 37670700056771;
          turbulence = 37670700482755;
          washed = 32431210692705;
          white = 32431210823777;
        //M
        } else if(selected ==="") {
          black = 32431210594401;
          gris = 37670699892931;
          military = 32431210070113;
          stone = 37670700089539;
          turbulence = 37670700515523;
          washed = 32431210725473;
          white = 32431210856545;
        //L
        } else {
          black = 32431210627169;
          gris = 37670699925699;
          military = 32431210102881;
          stone = 37670700122307;
          turbulence = 37670700548291;
          washed = 32431210758241;
          white = 32431210889313;
        }
        return {
          black,
          gris,
          military,
          //stone,
          turbulence,
          washed,
          white
        }
      case "3-pack-xpocket-curved":
      	var black, gris, white;
        //XS
        if(selected === 37705831907523) {
          black = 32431210528865;
          gris = 37670699794627;
          white = 32431210791009;
        //S
        } else if(selected === 37705831940291) {
          black = 32431210561633;
          gris = 37670699860163;
          white = 32431210823777;
        //M
        } else if(selected === 37705831973059) {
          black = 32431210594401;
          gris = 37670699892931;
          white = 32431210856545;
        //L
        } else {
          black = 32431210627169;
          gris = 37670699925699;
          white = 32431210889313;
        }
        return {
          black,
          gris,
          white
        }
      case "3-pack-xpocket-curved-colores":
        var stone, turbulence, military, washed;
        //XS
        if(selected === 37705835610307) {
        	stone = 37670700024003;
            turbulence = 37670700449987;
            military = 32431210004577;
          	washed = 32431210659937;
        //S
        } else if(selected === 37705835643075) {
            stone = 37670700056771;
            turbulence = 37670700482755;
            military = 32431210037345;
            washed = 32431210692705;
        //M
        } else if(selected === 37705835675843) {
            stone = 37670700089539;
            turbulence = 37670700515523;
            military = 32431210070113;
            washed = 32431210725473;
        //L
        } else {
            stone = 37670700122307;
            turbulence = 37670700548291;
            military = 32431210102881;
            washed = 32431210758241;
        }
        return {
          //stone,
          washed,
          turbulence,
          military
        }
      case "3-pack-polo":
      	var white, iron, turbulence;
        //XS
        if(selected === 37705838985411) {
          white = 37690573848771;
          iron = 37690574078147;
          turbulence = 37690573684931;
        //S
        } else if(selected === 37705839018179) {
          white = 37690573881539;
          iron = 37690574110915;
          turbulence = 37690573717699;
        //M
        } else if(selected === 37705839050947) {
          white = 37690573914307;
          iron = 37690574143683;
          turbulence = 37690573750467;
        //L
        } else {
          white = 37690573979843;
          iron = 37690574176451;
          turbulence = 37690573783235;
        }
        return {
          white,
          iron,
          turbulence
        }
      case "5-pack-henley":
        var white, black, gris, verde, slate;
        //S
        if(selected === 37705848160451) {
          white = 37614967292099;
          black = 37690575683779;
          gris = 37614964506819;
          verde = 37690576011459;
          slate = 37690575847619;
        //M
        } else if(selected === 37705848193219) {
          white = 37614967324867;
          black = 37690575716547;
          gris = 37614964539587;
          verde = 37690576044227;
          slate = 37690575880387;
        //L
        } else {
          white = 37614967357635;
          black = 37690575749315;
          gris = 37614964572355;
          verde = 37690576076995;
          slate = 37690575913155;
        }
        return {
          white,
          black,
          gris,
          verde,
          slate
        }
      case "3-pack-basics-sin-mangas":
        var negro = 37680081731779;
        var blanco = 37680075243715;
        var militar = 37680079962307;
        return {
          negro,
          blanco,
          militar,
        };
      case "3-pack-sueteres-tejidos":
        var gris = 37680060956867;
        var negro = 37680069050563;
        var caramelo = 37680066003139;
        return {
        	gris,
         	caramelo,
         	negro
        }
    }
  }
  
  function addToCart(product_id) {
    var data = getVariantsArray(product_id);
  	jQuery.post('/cart/add.js',{
      items: data,
      success: function(cart){
        setTimeout(() => {
        	location.reload();
        }, 1000);
      }
    });
  }
  
  /*onst collectionArrays = jQuery(".regalos-collection");
  
  /*for(var i = 0; i < collectionArrays.length; i++) {
    const row = jQuery(collectionArrays[i]).contents().find(".gf_row_no_tools");
    if(i === 0) {
        row.append(`
            <div class="gf_column gf_col_no_tools gf_col-xs-4 gf_col-sm-4 gf_col-md-4 gf_col-lg-3 view-all-button" style="padding:12px">
                <a class="regalos-collection-link" href="/collections/regalos-hombre-500">
                    Ver Todo $500
                </a>
            </div>`);        
    } else if(i === 1) {
        row.append(`
            <div class="gf_column gf_col_no_tools gf_col-xs-4 gf_col-sm-4 gf_col-md-4 gf_col-lg-3 view-all-button" style="padding:12px">
                <a class="regalos-collection-link" href="/collections/regalos-hombre-1000">
                    Ver Todo < $1,000
                </a>
            </div>`);
    } else if (i === 2) {
        row.append(`
            <div class="gf_column gf_col_no_tools gf_col-xs-4 gf_col-sm-4 gf_col-md-4 gf_col-lg-3 view-all-button" style="padding:12px">
                <a class="regalos-collection-link" href="/collections/regalos-hombre-2000">
                    Ver Todo < $2,000
                </a>
            </div>`);     
    } else if(i === 3) {
        row.append(`
            <div class="gf_column gf_col_no_tools gf_col-xs-4 gf_col-sm-4 gf_col-md-4 gf_col-lg-3 view-all-button" style="padding:12px">
                <a class="regalos-collection-link" href="/collections/regalos-mujeres-500">
                    Ver Todo < $500
                </a>
            </div>`);     
    } else if(i === 4) {
        row.append(`
            <div class="gf_column gf_col_no_tools gf_col-xs-4 gf_col-sm-4 gf_col-md-4 gf_col-lg-3 view-all-button" style="padding:12px">
                <a class="regalos-collection-link" href="/collections/regalos-mujeres-1000">
                    Ver Todo < $1,000
                </a>
            </div>`);     
    } else if(i === 5) {
        row.append(`
            <div class="gf_column gf_col_no_tools gf_col-xs-4 gf_col-sm-4 gf_col-md-4 gf_col-lg-3 view-all-button" style="padding:12px">
                <a class="regalos-collection-link" href="/collections/regalos-mujeres-2000">
                    Ver Todo < $2,000
                </a>
            </div>`);
    }
  }*/
  
  if (mode == 'dev') {
      jQuery('#m-1606942831092').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1606942831092');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1606942831092').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1606942831092').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1606942831092').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
jQuery(function () {
  var $hero = jQuery('#m-1606944385151');
  var $module = jQuery('#m-1606944385151').children('.module');

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
    var $module = jQuery('#m-1607152139086').children('.module');

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
  var $module = jQuery('#m-1607152139086-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child1-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child2-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child3-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child4').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child4-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child4-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child5').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child5-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child5-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child5-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child6').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child6-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child6-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child6-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child7').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child7-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child7-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child7-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child8').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child8-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child8-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child8-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child9').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child9-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child9-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child9-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child10').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child10-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child10-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607152139086-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607152139086-child10-5').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607152139086-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867').children('.module');

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
  var $module = jQuery('#m-1607154444867-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child1-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child2-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child3-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child4').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child4-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child4-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child5').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child5-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child5-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child5-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child6').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child6-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child6-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child6-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child7').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child7-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child7-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child7-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child8').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child8-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child8-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child8-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child9').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child9-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child9-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child9-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child10').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child10-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child10-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child10-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child11').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child11-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child11-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607154444867-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607154444867-child11-6').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607154444867-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916').children('.module');

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
  var $module = jQuery('#m-1607137192916-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child1-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child2-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child3-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child4').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child4-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child4-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child5').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child5-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child5-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child5-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child6').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child6-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child6-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child6-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child7').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child7-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child7-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child7-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child8').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child8-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child8-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child8-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child9').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child9-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child9-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child9-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child10').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child10-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child10-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child10-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child11').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child11-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child11-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137192916-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137192916-child11-8').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137192916-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
    
    
    
    
    
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930').children('.module');

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
  var $module = jQuery('#m-1607019891930-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child1-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child2-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child3-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child4').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child4-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child4-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child5').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child5-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child5-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child5-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child6').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child6-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child6-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child6-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child7').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child7-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child7-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child7-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child8').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child8-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child8-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child8-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child9').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child9-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child9-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child9-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child10').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child10-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child10-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child10-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child11').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child11-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child11-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child11-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child12').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child12-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child12-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child12-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child12-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child12-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child13').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child13-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child13-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child13-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child13-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child13-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child14').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child14-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child14-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child14-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child14-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child14-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child15').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child15-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child15-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child15-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child15-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child15-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child16').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child16-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child16-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607019891930-child16-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607019891930-child16-10').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607019891930-child16-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674').children('.module');

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
  var $module = jQuery('#m-1607137627674-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child1-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child2-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child3-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child4').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child4-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child4-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child5').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child5-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child5-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child5-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child6').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child6-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child6-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child6-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child7').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child7-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child7-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child7-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child8').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child8-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child8-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child8-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child9').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child9-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child9-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child9-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child10').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child10-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child10-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child10-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child11').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child11-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child11-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child11-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child12').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child12-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child12-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child12-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child12-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child12-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child13').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child13-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child13-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child13-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child13-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child13-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child14').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child14-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child14-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child14-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child14-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child14-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child15').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child15-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child15-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child15-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child15-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child15-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child16').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child16-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child16-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137627674-child16-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137627674-child16-12').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137627674-child16-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
    
jQuery(function() {
    var $module = jQuery('#m-1607137650525').children('.module');

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
  var $module = jQuery('#m-1607137650525-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137650525-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137650525-child1-14').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137650525-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137650525-child2-14').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607137650525-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607137650525-child3-14').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607137650525-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
    
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978').children('.module');

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
  var $module = jQuery('#m-1607141513978-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child1-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child2-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child3-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child4').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child4-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child4-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child5').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child5-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child5-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child5-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child6').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child6-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child6-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child6-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child7').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child7-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child7-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child7-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child8').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child8-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child8-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child8-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child9').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child9-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child9-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child9-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child10').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child10-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child10-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child10-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child11').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child11-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child11-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child11-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child12').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child12-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child12-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child12-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child12-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child12-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child13').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child13-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child13-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child13-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child13-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child13-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child14').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child14-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child14-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child14-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child14-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child14-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child15').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child15-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child15-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child15-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child15-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child15-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child16').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child16-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child16-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141513978-child16-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141513978-child16-16').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141513978-child16-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035').children('.module');

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
  var $module = jQuery('#m-1607141589035-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child1-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child2-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child3-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child4').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child4-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child4-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child5').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child5-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child5-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child5-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child6').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child6-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child6-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child6-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child7').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child7-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child7-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child7-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child8').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child8-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child8-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child8-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child9').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child9-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child9-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child9-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child10').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child10-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child10-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child10-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child11').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child11-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child11-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607141589035-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1607141589035-child11-18').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
  var $module = jQuery('#m-1607141589035-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
var gemFlag=!1;for(var i=0;i<pageLibs.length;i++){if(pageLibs[i].indexOf('gfv3product.js')!==-1){if(jQuery.gfV3Product==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfv3restabs.js')!==-1){if(jQuery.gfV3ResTabs==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfaccordion.js')!==-1){if(jQuery.gfAccordion==undefined){gemFlag=!0;break}}}if(gemFlag){var count=0;for(var i=0;i<pageLibs.length-1;i++){jQuery.getScript(pageLibs[i],function(){count++;if(count==pageLibs.length-1){jQuery.getScript(pageLibs[pageLibs.length-1],function(){})}})}}