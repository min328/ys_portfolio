$(function(){

    $(window).scroll(function(){
        var scrollValue = $(window).scrollTop();
        $("span#res").text(scrollValue);

        if(scrollValue >= 500 && scrollValue < 800) {
            $("h2#basicInfoLine").css({
                "opacity" : "1"
                , "transition" : "2s"
            });
            let basicInfoBox = $("div.basicInfo");
            for(i = 0; i < basicInfoBox.length; i++) {
                basicInfoBox.eq(i).css({
                    "opacity" : "1"
                    , "transition" : "2s"
                });
            }
        } // Basic info appear

        if(scrollValue >= 1300 && scrollValue < 1500) {
            $("div#q1").css({
                "margin-top" : "0"
                ,"opacity" : "1"
                , "transition" : "2s"
            });
        } // div#q1 appear

        if(scrollValue >= 1700 && scrollValue < 2000) {
            $("div#q2").css({
                "margin-top" : "0"
                ,"opacity" : "1"
                , "transition" : "2s"
            });
        } // div#q2 appear

        if(scrollValue >= 2300 && scrollValue < 2500) {
            $("div#q3").css({
                "margin-top" : "0"
                , "opacity" : "1"
                , "transition" : "2s"
            });
        } // div#q3 appear

        if(scrollValue >= 2800) {
            $("div#resume").css({
                "margin-left" : "0px"
                , "transition" : "1s"
            });
            
            $("div#resume *").delay(1000).fadeIn(500);
        }

    }); // scroll event end

    // #resume download button click event 
    $("#resume div#downloadBtn").click(function(){
        $(this).css({
            "left" : "50%"
            , "bottom" : "80px"
        });
    });
});