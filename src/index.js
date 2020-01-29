import $ from 'jquery';

global.jQuery = $;
global.$ = $;

import _ from 'lodash';
import './assets/css/fonts.scss';
import './assets/css/variables.scss';
import './assets/css/main.scss';

$( document ).ready(function() {

    var images=new Array('assets/img/slider-1.png','assets/img/slider-2.png','assets/img/slider-3.png');
    var nextimage=0;

    doSlideshow();

    function doSlideshow() {
        if($('.slideshowimage').length!=0) {
            $('.slideshowimage').fadeOut(500,function(){slideshowFadeIn();$(this).remove()});
        }
        else {
            slideshowFadeIn();
        }
    }
    function slideshowFadeIn() {
        //$('.promo').css('background-image', 'url(' + images[nextimage++] + ')').fadeIn(500,function(){setTimeout(doSlideshow,4000);});
        $('.promo').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(500,function(){setTimeout(doSlideshow,4000);}));
        if(nextimage>=images.length)
            nextimage=0;
    }
});

