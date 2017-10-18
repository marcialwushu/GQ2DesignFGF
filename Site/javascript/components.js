/* ===================================================
:: LIBRARY / SHARED / MENU TOP
 * ========================================================== */
// jQuery(function() {
jQuery(".menu-wrap").addClass("navbar");
jQuery(".menu").addClass("nav");
jQuery(".menu ul").addClass("dropdown-menu");

// on the first level li, make it a typical bootstrap top menu drop down
jQuery(".menu > li").each(function() {

    if (jQuery(this).children("ul").length > 0) {
        jQuery(this).addClass("dropdown");
        jQuery(this).children("a").addClass("dropdown-toggle");
        jQuery(this).children("a").attr("data-toggle", "dropdown");
        jQuery(this).children("a").html(jQuery(this).children("a").html() + '<strong class="caret"></strong>');

    }
});

// create sub-level drop downs
jQuery(".menu > li > ul li").each(function() {

    if (jQuery(this).children("ul").length > 0) {
        jQuery(this).addClass("dropdown-submenu");
        jQuery(this).children("a").addClass("dropdown-toggle");
        jQuery(this).children("ul").addClass("dropdown-menu");
    }

});



jQuery(document).ready(function() {
    //H andles menu drop down
    jQuery('.dropdown-menu').find('form').click(function(e) {
        e.stopPropagation();
    });
    jQuery('.dropdown-menu').on('touchstart.dropdown.data-api').click(function(e) {
        e.stopPropagation();
    });
});


// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
jQuery('.dropdown').on('show.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
jQuery('.dropdown').on('hide.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});



/* ===================================================
:: LIBRARY / SHARED / MENU SIDE
 * ========================================================== */
jQuery(function() {

    var menuside_ul = jQuery('.menuside > li > ul'),
        menuside_a = jQuery('.menuside > li > a');

    menuside_ul.hide();

    menuside_a.click(function(e) {
        if (jQuery(this).attr("href") == "#") {

            e.preventDefault();
            if (!jQuery(this).hasClass('active')) {
                menuside_a.removeClass('active');
                menuside_ul.filter(':visible').slideUp('normal');
                jQuery(this).addClass('active').next().stop(true, true).slideDown('normal');
            } else {
                jQuery(this).removeClass('active');
                jQuery(this).next().stop(true, true).slideUp('normal');
            }
        }
    });

});

/* ===================================================
:: MENUPUSH
 * ========================================================== */
jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.menupush-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.menupush-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});

/* ===================================================
:: LIBRARY / COMPONENTS / INFO BOX CAROUSEL
 * ========================================================== */

      !function (jQuery) {
        jQuery(function(){
          // carousel demo
          jQuery('#ibc').carousel({ interval: 80000 })
        })
      }(window.jQuery)
      
          // circle sizer
      circleSizer = function () {
	  circleSize(".ibc-image-wrapper", ".ibc-circle1", .18);
	  circleSize(".ibc-image-wrapper", ".ibc-circle2", .10);
	  circleSize(".ibc-image-wrapper", ".ibc-circle3", .05);
	};
	function circleSize(wrapper, target, percentage) {
	    var fontSize = jQuery(wrapper).width() * percentage; // 10% of container width
	    jQuery(target).css('font-size', fontSize );
	}
	jQuery(window).resize(circleSizer);
	jQuery(document).ready(circleSizer);		


/* ===================================================
:: LIBRARY / PRO-COPMPONENTS / CAROUSELS / WELCOME = index page header
 * ========================================================== */
 
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('.bs-animate'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
})(jQuery);

/* ===================================================
:: LIBRARY / PRO-COMPONENTS / COUNTERS / CLIENTS
 * ========================================================== */

jQuery(document).ready(function() {
    jQuery.fn.countTo && (jQuery(".count").countTo(), jQuery(".appear-count").appear(),
        jQuery(".appear-count").on("appear", function() {
            jQuery(this).hasClass("activated") || (jQuery(".count").countTo(),
                jQuery(this).addClass("activated"))
        }))
});


/* ===================================================
:: YOUTUBEBACKGROUND
 * ========================================================== */

/*
 * YoutubeBackground - A wrapper for the Youtube API - Great for fullscreen background videos or just regular videos.
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Version:  1.0.1
 *
 */

// Chain of Responsibility pattern. Creates base class that can be overridden.
if (typeof Object.create !== "function") {
  Object.create = function(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

(function($, window, document) {
  var
    loadAPI = function loadAPI(callback) {

      // Load Youtube API
      var tag = document.createElement('script'),
      head = document.getElementsByTagName('head')[0];

      tag.src = 'http://www.youtube.com/iframe_api';

      head.appendChild(tag);

      // Clean up Tags.
      head = null;
      tag = null;

      iframeIsReady(callback);
    },
    iframeIsReady = function iframeIsReady(callback) {
      // Listen for Gobal YT player callback
      if (typeof YT === 'undefined' && typeof window.loadingPlayer === 'undefined') {
        // Prevents Ready Event from being called twice
        window.loadingPlayer = true;

        
        // Creates deferred so, other players know when to wait.
        window.dfd = $.Deferred();
        window.onYouTubeIframeAPIReady = function() {
          window.onYouTubeIframeAPIReady = null;
          window.dfd.resolve( "done" );
          callback();
        };
      } else if (typeof YT === 'object')  {
        callback();
      } else {
        window.dfd.done(function( name ) {
          callback();
        });
      }
    };

  // YTPlayer Object
  YTPlayer = {
    player: null,

    // Defaults
    defaults: {
      ratio: 16 / 9,
      videoId: 'LSmgKRx5pBo',
      mute: true,
      repeat: true,
      width: $(window).width(),
      playButtonClass: 'YTPlayer-play',
      pauseButtonClass: 'YTPlayer-pause',
      muteButtonClass: 'YTPlayer-mute',
      volumeUpClass: 'YTPlayer-volume-up',
      volumeDownClass: 'YTPlayer-volume-down',
      start: 3,
      pauseOnScroll: false,
      fitToBackground: true,
      playerVars: {
        modestbranding: 1,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        wmode: 'transparent',
        branding: 0,
        rel: 0,
        autohide: 0
      },
      events: null
    },

    /**
     * @function init
     * Intializes YTPlayer object
     */
    init: function init(node, userOptions) {
      var self = this;

      self.userOptions = userOptions;

      self.$body = $('body'),
      self.$node = $(node),
      self.$window = $(window);

      // Setup event defaults with the reference to this
      self.defaults.events = {
        'onReady': function(e) {
          self.onPlayerReady(e);

          // setup up pause on scroll
          if (self.options.pauseOnScroll) {
            self.pauseOnScroll();
          }

          // Callback for when finished
          if (typeof self.options.callback == 'function') {
            self.options.callback.call(this);
          }
        },
        'onStateChange': function(e) {
          if (e.data === 1) {
            self.$node.addClass('loaded');
          } else if (e.data === 0 && self.options.repeat) { // video ended and repeat option is set true
            self.player.seekTo(self.options.start);
          }
        }
      }


      self.options = $.extend(true, {}, self.defaults, self.userOptions);
      self.options.height = Math.ceil(self.options.width / self.options.ratio);
      self.ID = (new Date()).getTime();
      self.holderID = 'YTPlayer-ID-' + self.ID;

      if (self.options.fitToBackground) {
        self.createBackgroundVideo();
      } else {
        self.createContainerVideo();
      }
      // Listen for Resize Event
      self.$window.on('resize.YTplayer' + self.ID, function() {
        self.resize(self);
      });

      loadAPI(self.onYouTubeIframeAPIReady.bind(self));

      self.resize(self);

      return self;
    },


    /**
     * @function pauseOnScroll
     * Adds window events to pause video on scroll.
     */
    pauseOnScroll: function pauseOnScroll() {
      var self = this;
      self.$window.on('scroll.YTplayer' + self.ID, function() {
        var state = self.player.getPlayerState();
        if (state === 1) {
          self.player.pauseVideo();
        }
      });
      self.$window.scrollStopped(function(){
        var state = self.player.getPlayerState();
        if (state === 2) {
          self.player.playVideo();
        }
      });
    },
    /**
     * @function createContainerVideo
     * Adds HTML for video in a container
     */
    createContainerVideo: function createContainerVideo() {
      var self = this;

      /*jshint multistr: true */
      var $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" >\
                                    <div id="' + self.holderID + '" class="ytplayer-player"></div> \
                                    </div> \
                                    <div id="ytplayer-shield"></div>');

      self.$node.append($YTPlayerString);
      self.$YTPlayerString = $YTPlayerString;
      $YTPlayerString = null;
    },

    /**
     * @function createBackgroundVideo
     * Adds HTML for video background
     */
    createBackgroundVideo: function createBackgroundVideo() {
      /*jshint multistr: true */
      var self = this,
        $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" class="ytplayer-container background">\
                                    <div id="' + self.holderID + '" class="ytplayer-player"></div>\
                                    </div>\
                                    <div id="ytplayer-shield"></div>');

      self.$node.find('img').fadeOut();
      self.$node.append($YTPlayerString);
      self.$YTPlayerString = $YTPlayerString;
      $YTPlayerString = null;
    },

    /**
     * @function resize
     * Resize event to change video size
     */
    resize: function resize(self) {
      //var self = this;
      var container = $(window);

      if (!self.options.fitToBackground) {
        container = self.$node;
      }

      var width = container.width(),
        pWidth, // player width, to be defined
        height = container.height(),
        pHeight, // player height, tbd
        $YTPlayerPlayer = $('#' + self.holderID);

      // when screen aspect ratio differs from video, video must center and underlay one dimension
      if (width / self.options.ratio < height) {
        pWidth = Math.ceil(height * self.options.ratio); // get new player width
        $YTPlayerPlayer.width(pWidth).height(height).css({
          left: (width - pWidth) / 2,
          top: 0
        }); // player width is greater, offset left; reset top
      } else { // new video width < window width (gap to right)
        pHeight = Math.ceil(width / self.options.ratio); // get new player height
        $YTPlayerPlayer.width(width).height(pHeight).css({
          left: 0,
          top: 0
        }); // player height is greater, offset top; reset left
      }

      $YTPlayerPlayer = null;
      container = null;
    },

    /**
     * @function onYouTubeIframeAPIReady
     * @ params {object} YTPlayer object for access to options
     * Youtube API calls this function when the player is ready.
     */
    onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
      var self = this;
      self.player = new window.YT.Player(self.holderID, self.options);  
    },

    /**
     * @function onPlayerReady
     * @ params {event} window event from youtube player
     */
    onPlayerReady: function onPlayerReady(e) {
      if (this.options.mute) {
        e.target.mute();
      }
      e.target.playVideo();
    },

    /**
     * @function getPlayer
     * returns youtube player
     */
    getPlayer: function getPlayer() {
      return this.player;
    },

    /**
     * @function destroy
     * destroys all!
     */
    destroy: function destroy() {
      var self = this;

      self.$node
        .removeData('yt-init')
        .removeData('ytPlayer')
        .removeClass('loaded');

      self.$YTPlayerString.remove();

      $(window).off('resize.YTplayer' + self.ID);
      $(window).off('scroll.YTplayer' + self.ID);
      self.$body = null;
      self.$node = null;
      self.$YTPlayerString = null;
      self.player.destroy();
      self.player = null;
    }
  };

  // Scroll Stopped event.
  $.fn.scrollStopped = function(callback) {
    var $this = $(this), self = this;
    $this.scroll(function(){
      if ($this.data('scrollTimeout')) {
        clearTimeout($this.data('scrollTimeout'));
      }
      $this.data('scrollTimeout', setTimeout(callback,250,self));
    });
  };

  // Create plugin
  $.fn.YTPlayer = function(options) {

    return this.each(function() {
      var el = this;

      $(el).data("yt-init", true);
      var player = Object.create(YTPlayer);
      player.init(el, options);
      $.data(el, "ytPlayer", player);
    });
  };

})(jQuery, window, document);

/* ===================================================
:: LIBRARY / PRO-COMPONENTS / PRICING / PRICING
 * ========================================================== */

jQuery(document).ready(function($){
	//hide the subtle gradient layer (.pricing-list > li::after) when pricing table has been scrolled to the end (mobile version only)
	checkScrolling($('.pricing-body'));
	$(window).on('resize', function(){
		window.requestAnimationFrame(function(){checkScrolling($('.pricing-body'))});
	});
	$('.pricing-body').on('scroll', function(){ 
		var selected = $(this);
		window.requestAnimationFrame(function(){checkScrolling(selected)});
	});

	function checkScrolling(tables){
		tables.each(function(){
			var table= $(this),
				totalTableWidth = parseInt(table.children('.pricing-features').width()),
		 		tableViewport = parseInt(table.width());
			if( table.scrollLeft() >= totalTableWidth - tableViewport -1 ) {
				table.parent('li').addClass('is-ended');
			} else {
				table.parent('li').removeClass('is-ended');
			}
		});
	}

	//switch from monthly to annual pricing tables
	bouncy_filter($('.pricing-container'));

	function bouncy_filter(container) {
		container.each(function(){
			var pricing_table = $(this);
			var filter_list_container = pricing_table.children('.pricing-switcher'),
				filter_radios = filter_list_container.find('input[type="radio"]'),
				pricing_table_wrapper = pricing_table.find('.pricing-wrapper');

			//store pricing table items
			var table_elements = {};
			filter_radios.each(function(){
				var filter_type = $(this).val();
				table_elements[filter_type] = pricing_table_wrapper.find('li[data-type="'+filter_type+'"]');
			});

			//detect input change event
			filter_radios.on('change', function(event){
				event.preventDefault();
				//detect which radio input item was checked
				var selected_filter = $(event.target).val();

				//give higher z-index to the pricing table items selected by the radio input
				show_selected_items(table_elements[selected_filter]);

				//rotate each pricing-wrapper 
				//at the end of the animation hide the not-selected pricing tables and rotate back the .pricing-wrapper
				
				if( !Modernizr.cssanimations ) {
					hide_not_selected_items(table_elements, selected_filter);
					pricing_table_wrapper.removeClass('is-switched');
				} else {
					pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {		
						hide_not_selected_items(table_elements, selected_filter);
						pricing_table_wrapper.removeClass('is-switched');
						//change rotation direction if .pricing-list has the .price-bounce-invert class
						if(pricing_table.find('.pricing-list').hasClass('price-bounce-invert')) pricing_table_wrapper.toggleClass('reverse-animation');
					});
				}
			});
		});
	}
	function show_selected_items(selected_elements) {
		selected_elements.addClass('is-selected');
	}

	function hide_not_selected_items(table_containers, filter) {
		$.each(table_containers, function(key, value){
	  		if ( key != filter ) {	
				$(this).removeClass('is-visible is-selected').addClass('is-hidden');

			} else {
				$(this).addClass('is-visible').removeClass('is-hidden is-selected');
			}
		});
	}
});

/* ===================================================
:: BACK TO TOP
 * ========================================================== */

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
