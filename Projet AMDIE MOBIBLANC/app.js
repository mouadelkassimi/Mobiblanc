/* JavaScript */


if ($('.slider-mobile-secteurs').length > 0) {
    $('.slider-mobile-secteurs').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 4,

    });
}
if ($('.slider-mobile-details').length > 0) {
    $('.slider-mobile-details').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,

    });
}


function SetHeightToSlider(){
    var WindowHeight = window.innerHeight;
    var WindowWidth = window.innerWidth;
    var topHeight = document.getElementsByClassName('header-top')[0].offsetHeight;
    var slider = document.getElementById('home-slider');
    var body = document.getElementById('page-pole');
    var heightinfoline = document.getElementsByClassName('infoline_conatiner')[0];
    var first_height_to_get = document.getElementsByClassName('first_height_to_get')[0];
    var sec_height_to_get = document.getElementsByClassName('earthspace_container')[0];

    var checker = document.getElementsByClassName('home-page')[0]


    if ( (heightinfoline != null) && (first_height_to_get != null) && ((sec_height_to_get != null)) )
    {
        heightinfoline = heightinfoline.clientHeight;
        first_height_to_get = first_height_to_get.clientHeight;
        sec_height_to_get = sec_height_to_get.clientHeight;
    }
    else{
        heightinfoline = '';
       first_height_to_get = '';
       sec_height_to_get = '';
    }
    
    if(typeof(slider) != 'undefined' && slider != null)
    {

        if(WindowWidth >= 1290 ){
            if(typeof(body) != 'undefined' && body != null)
            {
                //slider.style.height = WindowHeight + heightinfoline  - topHeight + "px";
                slider.style.height = "1670px";
            }
            else 
            {
                if (checker != null)
                {
                    slider.style.height =  WindowHeight + first_height_to_get + sec_height_to_get + heightinfoline + "px";
                }
                else
                {
                    slider.style.height =  first_height_to_get + heightinfoline + sec_height_to_get + 30 + "px";
                }
                
            }


        } else if(WindowWidth <= 1290){
            if(typeof(body) != 'undefined' && body != null){
                slider.style.height = "1670px";
            }else{
            slider.style.height = "500px";
            }
        }

    }
}
SetHeightToSlider(); // init

window.addEventListener("resize", SetHeightToSlider, false);
/* jQuery */
jQuery(document).ready(function($){








      if($('.js-datepicker').length >0){

        $('.js-datepicker').datetimepicker({
              minView: 2,
             format: 'yyyy-mm-dd'
        });

      }


        $('.menu-mobile-wrapper .main-nav>ul>.nav-item > a[href="#"]').on( 'click', function (e) {
            e.preventDefault();
            
            $(this).closest('li').siblings().removeClass('opened-sub-menu');
            $(".sub-menu").hide();
           $(this).closest('li').toggleClass('opened-sub-menu');
           $(".sub-menu").show();
        })




    if($('.extra-menu-btn').length > 0)
    {
        $('.extra-menu-btn').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('is-open');
            $(this).prev('.extra-menu').toggle();
        });
    }

    if($('.main-wrapper .content style').length == 0)
    {
        $('.content').wrap("<div class='container'></div>");
    }


    var timesClicked = 0;

    $('.menu_primary_js #header .main-nav > ul > li.has-child').hover( function(e) {
        e.preventDefault();
        $this = $(this).closest('li');

        //var d = $("#header .main-nav > ul > li.has-child");
        /*if($this.index() == 4)
        {
            timesClicked++;
            if (timesClicked > 1)
            {
                location.href = "/amdie/recherche";//$(this).attr("href"); // "/amdie/recherche"
            }
        }
        else
        {
            timesClicked = 0;
        }*/

        if($this.hasClass('megamenu-is-open'))
        {
            $('body').removeClass('menu-is-open');
            $this.removeClass('megamenu-is-open');
            $('.close_button').hide();
            $('.header-bottom .logo .second_logo').hide();
            $('.header-bottom .logo .first_logo').show();
            $('.mega-menu-overlay').hide();
        }
        else
        {
            if($('.mega-menu').length > 0){

                $this.closest('ul').find('> li').removeClass("megamenu-is-open");
                $('body').addClass('menu-is-open');
                $this.addClass('megamenu-is-open');
                $('.close_button').show();
                $('.header-bottom .logo .second_logo').show();
                $('.header-bottom .logo .first_logo').hide();
                $('.mega-menu-overlay').show();

            }
        }
    });

    $(document).on('click','.mega-menu-overlay',function(e) {

            $('body').removeClass('menu-is-open');
            $('#header .main-nav ul > li').removeClass('megamenu-is-open');
            $('.close_button').hide();
            $('.header-bottom .logo .second_logo').hide();
            $('.header-bottom .logo .img-fluid').show();
            $(this).hide();

    });

    $(document).on('click','.close_button',function (){
        $('body').removeClass('menu-is-open');
        $('#header .main-nav ul > li').removeClass('megamenu-is-open');
        $('.header-bottom .logo .img-fluid').show();
        $('.header-bottom .logo .second_logo').hide();
        $('.mega-menu-overlay').hide();
        $(this).hide();
    });

    if($(document).width() > 1050 ) {

        $(document).on('click', '#dropdown-thumbnail .filter .btn', function (e) {
            e.preventDefault();
            var selectId = $(this).data('href');
            $('#dropdown-thumbnail .filter .btn').removeClass('active');
            $('#dropdown-thumbnail .tabs').removeClass('active');
            $(this).addClass('active');
            $("#" + selectId).addClass('active');
        });
    }

    $(document).on('click','#dropdown-search .filter .btn',function (e) {
        e.preventDefault();
        var selectId = $(this).data('href');
        $('#dropdown-search .filter .btn').removeClass('active');
        $('#dropdown-search .tabs').removeClass('active');
        $(this).addClass('active');
        $("#"+selectId).addClass('active');
    });

    $("#form_search" ).on( "keydown", function(event) {
        if(event.which == 13)
            $(this).closest('form').submit();
    });

    $(document).on('mouseover','.navbar-link',function (e) {
        e.preventDefault();
        $('.left-menu').removeClass('active');
        $('.navbar-link').removeClass('active');
        $(this).addClass('active');
        $(this).siblings('.left-menu').addClass('active');
    });


    $(document).on('click','.search_button, .btn-search',function (e) {
        
        $('#searchmodal').modal('show');
        $('.search_block').addClass('active');
        $('.block_dispaly').addClass('bloque_search');
           /* e.preventDefault();
        $('.close-top').removeClass('d-none');

            $('.search_block').addClass('active');
            $('.block_dispaly').addClass('bloque_search');
        $('.search_button_close').show();
            $('.search_btn').hide();

        $('#titleSliderSearch').hide();
        $('.showSearch').hide();
        $('#subTitleSliderSearch').hide();
        $('.button-header').hide();*/
    });

/*    $(document).click(function(e) {
        if ($(e.target).closest('.search_zone').length === 0){
            $('.search_block').removeClass('active');
            $('.search_button').show();
            $('#form_search').val('');
        }
    });*/

    /*$(document).on('click','.close-top',function (e) {
        e.preventDefault();
        $('.close-top').addClass('d-none');
        $('.search_block').removeClass('active');
        $('.block_dispaly').removeClass('bloque_search');
        $('.search_button, .btn-search').show();
        $('#form_search').val('');
        $('#titleSliderSearch').show();
        $('#subTitleSliderSearch').show();
        $('.showSearch').show();
        $('.button-header').show();
        $('.search_button_close').hide();

    });*/

    if($(document).width() > 1050 ){

        $(document).click(function(e) {
            if ($(e.target).closest('.header-bottom').length === 0){
                $('#navbar-mobile').hide();
                $('.navbar-nav').removeClass('active');
                $('.dis_disktop').removeClass('active');
                $("#header_mobile .dis_disktop").slideUp();
                $('.list_filiere .navbar-link').removeClass('active');
                $('.second_logo').hide();
                $(this).hide();
            }
        });

    }


    var $singleItemCarousel = $('.cs-carousel');
    $($singleItemCarousel.length > 0)
    {
        var slickOptions = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: false,
            speed: 500,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1180,
                    settings: {
                        dots: false,
                        /*variableWidth: true*/
                    }
                }
             ]
        };
        $singleItemCarousel.slick(slickOptions);
    }

    
    $(document).on('click','.play_video',function(e){
         e.preventDefault();
        $('.video-wrapper').show();
        $('.thumbnail-wrapper').hide();
    });




    /*----------------------------------------------------------------*/
    /**************** jQuery for Mobile ****************/
    /*----------------------------------------------------------------*/

    $(document).on('click','#header_mobile .list-item .nav-link[href=""]',function (e) {

    /* s $("#header_mobile .list-item .nav-link").removeClass("active");*/
        e.preventDefault();
        $(this).removeClass('hide');
        $(this).toggleClass("active").next().next().find('.dis_disktop').slideToggle('slow');
        $("#header_mobile .dis_disktop").not($(this).next().next().find('.dis_disktop')).slideUp('slow');

        $(this).parent().siblings().find('.nav-link').removeClass('active').addClass('hide');

    });

    $(document).on('click','#header_mobile .list-item .col-links a',function (e) {

        $(this).removeClass('hide');
        $(this).toggleClass("active").next().slideToggle('slow');
        $("#header_mobile .col-links .navbar-nav").not($(this).next()).slideUp('slow');

        $('.dis_disktop .dropdown-thumbnail .tabs').slideUp('slow');
        $(".dis_disktop .dropdown-thumbnail .btn").removeClass('active');

        $(this).parent().siblings().find('.tabs_list').removeClass('active').addClass('hide');

    });

    $(document).on('click','.dis_disktop .dropdown-thumbnail .btn',function(e){
        e.preventDefault();

        $(this).toggleClass("active").next().slideToggle('slow');
        $("#header_mobile .col-links .navbar-nav").not($(this).next()).slideUp('slow');
        $("#header_mobile .list-item .col-links .tabs_list").removeClass("active");
    });

    $(document).on('click','.dis_disktop .dropdown-thumbnail .list_filiere h4',function(e){
        e.preventDefault();

        $(this).toggleClass("active").next().slideToggle('slow');
        $(".dis_disktop .dropdown-thumbnail .list_filiere .sub_menu").not($(this).next()).slideUp('slow');
        $(this).siblings().removeClass("active");

    });

    $(document).on('click','.dis_disktop .dropdown-thumbnail .sub_menu .link_child',function(e){
        e.preventDefault();

        $(this).removeClass('hide')
        $(this).toggleClass("active").next().slideToggle('slow');
        $(".dis_disktop .dropdown-thumbnail .left-menu").not($(this).next()).slideUp('slow');

        $(this).parent().siblings().find('.link_child').removeClass("active").addClass('hide');

    });


    $(document).on('click','#header_mobile .menu_btn',function (e) {
        $('body').toggleClass('menu-is-visible');
        $('.menu-mobile-wrapper').toggle(1000);

    });

    $('.menu-mobile-wrapper .main-nav .sub-menu h4').on('click', function(e){
        e.preventDefault();
        $(this).closest('li').siblings().find('> ul, > .sub-menu-list').removeClass('active-ul');
        $(this).closest('.col-links').siblings().removeClass('active-ul');
        $(this).parent().toggleClass('active-ul');;
    })


    $(document).on('click','#header_mobile .close_button',function (e) {

        $('#navbar-mobile').hide();
        $('.navbar-nav').removeClass('active');
        $('.dis_disktop').removeClass('active');
        $("#header_mobile .dis_disktop").slideUp();
        $('.list_filiere .navbar-link').removeClass('active');
        $(this).hide();

    });

    if($('body').hasClass('page-pole'))
    {
        var $color = $('#header .header-bottom').data('bg');
        $('#header .header-bottom #form_search, #header .header-bottom .search_block').css('background', $color);

    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if($('#home-slider').length > 0)
        {
            var targetPos =  $('#home-slider').height(); //+ $('#home-slider').position().top ;
            //console.log(scroll + '<==>'+targetPos);
            if (scroll <= targetPos )
            {
                $('body').addClass('skip-hp-slider');
            }
            else
            {
                $('body').removeClass('skip-hp-slider');
            }

        }
        // if (scroll >= 50) {
        //     $("body").addClass("on-scroll");
        //     if($('body').hasClass('page-pole'))
        //     {
        //         var $color = $('#header .header-bottom').data('bg');
        //         $('#header .header-bottom').css('background', $color);

        //     }
        // } else {
        //     $("body").removeClass("on-scroll");
        //     if($('body').hasClass('page-pole'))
        //     {
        //         $('#header .header-bottom').removeAttr('style');
        //     }
        // }
    });




    $('.custom-file-input').on('change', function(){
        var $val = $(this).val();
        if($val)
        {
            var filename = $val.replace(/.*(\/|\\)/, '');
            $(this).next('.custom-file-label').text(filename);
        }
        else 
        {
            $(this).next('.custom-file-label').text('');
        }
    });
    if ($('.block-back').length > 0) {
        $('.block-back').slick({
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
});