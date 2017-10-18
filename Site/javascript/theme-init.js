/* ===================================================
 * THEME INITIALIZATION SCRIPTS
 * ========================================================== */
 
	var isMobile = {
	    Android: function() {
			"use strict";
	        return navigator.userAgent.match(/Android/i) ? true : false;
	    },
	    BlackBerry: function() {
			"use strict";
	        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	    },
	    iOS: function() {
			"use strict";
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true :
	            false;
	    },
	    Windows: function() {
			"use strict";
	        return navigator.userAgent.match(/IEMobile/i) ? true : false;
	    },
	    any: function() {
			"use strict";
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile
	            .iOS() || isMobile.Windows());
	    }
	};
	
	$(function() {
		"use strict";
	    if (!isMobile.any()) {
	        var s = skrollr.init({
	                forceHeight: false
	            }
	            //
	            //	{
	            //    	render: function(data) {
	            //       	 //Log the current scroll position.
	            //        	//console.log(data.curTop);
	            //        	$('#offset').text(data.curTop);
	            //    	}
	            //	}
	        );

	    }
	});

/* ===================================================
 * WOW INIT
 * ========================================================== */
 
 new WOW().init();
 
 
/* ===================================================
 * FANCYBOX
 * ========================================================== */
 
    jQuery(document).ready(function() {
		"use strict";
        jQuery('.fancybox').fancybox({
            padding: 0,
            openEffect: 'elastic'
        });
    });
 
/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / CUSTOMERS / CUSTOMERS 
 * ========================================================== */
 
    jQuery(document).ready(function() {
		"use strict";
        jQuery('#owl-customers').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    });


/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / LAPTOP / LAPTOP 
 * ========================================================== */
 
    jQuery(document).ready(function() {
		"use strict";
        jQuery('#owl-laptop').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    });


/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / LOGOS / LOGOS
 * ========================================================== */
 
    jQuery(document).ready(function() {
		"use strict";
        jQuery('#owl-logos').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 6
                },
                768: {
                    items: 8
                },
                1200: {
                    items: 9
                }
            }
        });
    });


/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / PROJECTS / PROJECTS 
 * ========================================================== */
 
    jQuery(document).ready(function() {
		"use strict";
        jQuery('#owl-projects').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 4
                }
            }
        });
    });


/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / RELATED / RELATED 
 * ========================================================== */
 
    jQuery(document).ready(function() {
		"use strict";
        jQuery('#owl-related').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    });

/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / SERVICES / SERVICES 
 * ========================================================== */
 
     jQuery(document).ready(function() {
		 "use strict";
        jQuery('#owl-services').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    });

/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / SINGLE / SINGLE 
 * ========================================================== */
 
     jQuery(document).ready(function() {
		 "use strict";
        jQuery('#owl-single').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    });

/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / ABOUT / ABOUT 
 * ========================================================== */
 
     jQuery(document).ready(function() {
		 "use strict";
        jQuery('#owl-about').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    });
/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / TEAM / TEAM 
 * ========================================================== */
 
     jQuery(document).ready(function() {
		 "use strict";
        jQuery('#owl-team').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 4
                }
            }
        });
    });

/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / TESTIMONIALS / TESTIMONIALS 
 * ========================================================== */
 
     jQuery(document).ready(function() {
		 "use strict";
        jQuery('#owl-testimonials').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    });

/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / SOCIAL / SOCIAL
 * ========================================================== */
 
    jQuery(document).ready(function() {
		"use strict";
        jQuery('#social-icon').owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });
    });

/* ===================================================
 * LIBRARY / PRO-COMPONENTS / COUNTERS / COUNTDOWN / COUNTDOWN 
 * ========================================================== */
 
     jQuery(document).ready(function() {
		 "use strict";
        if (jQuery().countdown) {
            jQuery('#countdown').countdown({
                until: new Date(2015, 12 - 3, 25)
            });
        }
    });


/* ===================================================
 * LIBRARY / PRO-COMPONENTS / THUMB LOADERS / CLIENTS / HISTORY 
 * ========================================================== */
 
      	jQuery(document).ready(function() {
			"use strict";
    	jQuery(".thumb-load").click(function() {
                jQuery(this).children("img").show();
                var t = jQuery(this).children("img");
                setTimeout(function() {
                    t.hide();
                }, 2e3), jQuery(".thumb-hide").delay(2e3).slideDown()
            });
        });

/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / BS-WELCOME / BS-WELCOME
 * ========================================================== */
		
    $('#bs-welcome').carousel({
        interval: 15000
    });
    
/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / BS-QUOTES / BS-QUOTES
 * ========================================================== */
		
    $('#bs-quotes').carousel({
        interval: 20000
    });
    
/* ===================================================
 * LIBRARY / PRO-COMPONENTS / CAROUSELS / BS-TESTIMONIALS / BS-TESTIMONIALS
 * ========================================================== */

    $('#bs-testimonials').carousel({
        interval: 25000
    });
    
 /* ===================================================
 * LIBRARY / COMPONENTS / CAROUSELS / TEAM-CAROUSEL / TEAM-CAROUSEL
 * ========================================================== */

    $('#ibc').carousel({
        interval: 30000
    });
    

 /* ===================================================
 * LIBRARY / SLIDERS / JUMBOTRON-CAROUSEL / JUMBOTRON-CAROUSEL
 * ========================================================== */

    $('#jumbo-carousel').carousel({
        interval: 8000
    });
    

/* ===================================================
 * LIBRARY / PRO-COMPONENTS / PROGRESSBAR / PROGRESSBAR 
 * ========================================================== */
   // jQuery(window).load(function() {
		//"use strict";
       // setTimeout(function() {
           // jQuery('.progress-bar').addClass('stretchRight');
        //}, 2000);
   // });
    
/* ===================================================
 * YOUTUBEBACKGROUND - index.htm 
 * ========================================================== */
 
    jQuery(function($) {

      jQuery('#background-video').YTPlayer({
        fitToBackground: true,
        videoId: 'RetWBe2cdOs',
        pauseOnScroll: true,
		start: 3,
        callback: function() {
          var player = jQuery('#background-video').data('ytPlayer').player;
          console.log("callback", player);
        }
      });

    });

