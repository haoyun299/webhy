$(function(){
    var method = {
        grid:function(){
            $(".grid").isotope({
                itemSelector: '.grid-item',
                percentPosition: true
            });
        },
        navTab:function(){
            $('a[data-toggle="tab"]').on('shown.bs.tab',function () {
                method.grid();
            });
        },
        panelCollapse:function () {
            $('.collapse').on('shown.bs.collapse', function () {
                method.grid();
            });
        },
        accordion:function () {
            $(".voice_2 ul li").each(function(){
                var fold = $(this).find(".fold");
                 $('.voice_2 li:first').find(".fold").hide();
                 $('.voice_2 li:first').find(".unfold").show();
                if(fold.is(":hidden")){
                    $(this).width("58%");
                }else{
                    $(this).width("7%");
                }
            });
            $(".voice_2 ul li").click(function(){
                var li_index = $(this).index();
                $(this).siblings().animate({width:"7%"},200);
                $(this).siblings().find(".unfold").hide();
                $(this).siblings().find(".fold").show();
                $(this).animate({width:"58%"},200);
                $(this).find(".fold").hide();
                $(this).find(".unfold").show();
            });
        },
        bxslide:function(){
            $('.bxslider').bxSlider();
        }
    }
    method.navTab();
    method.panelCollapse();
    method.accordion();
    method.grid();
    method.bxslide();
});