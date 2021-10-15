$(function(){
    // workMain.html : .item img change automatically
    var imgBoxes = $("#workMain div.imgBox");
    setInterval(screenLoop, 3000);
    function screenLoop(){
        for(i=0; i<imgBoxes.length; i++) {
            imgBoxes.eq(i).children("img").eq(0).css({"opacity":"0","transition":"1.2s"});
            imgBoxes.eq(i).children("img").eq(0).insertAfter(imgBoxes.eq(i).children("img").eq(-1));
            imgBoxes.eq(i).children("img").eq(1).css({"opacity":"1","transition":"1.2s"});
        }
    }

    // workMain.html : item hover function
    $("#workMain .itemBox").hover(
        function(){
            $(this).children(".imgBox").children("img").css({
                "transform" : "scale(1.2)"
                ,"transition" : "0.8s"
            });
        }
        , function(){
            $(this).children(".imgBox").children("img").css({
                "transform" : "scale(1)"
                ,"transition" : "0.8s"
            });
        }
    );

    // When click 'workMain.html - item box' redirect to the info page
    $("#workMain div.itemBox").click(function(){
        if($(this).hasClass("active")) {
            var page = $(this).attr("data-link");
            var url = page + ".html";
            window.open(url, "_self");
        } else {
            return false;
        } 
    });


    // show functions
    $("main#project div#functionArea div.function a").click(function(){
        $("main#project div#functionArea div.function a").removeClass("selected");
        $(this).addClass("selected");

        var divIdVal = $(this).attr("data-link");
        var link = "main#project div#functionContentArea div#" + divIdVal;
        $("main#project div#functionContentArea div.functionItem").css({"display":"none"});
        $(link).slideDown(1000);
    });

    // top button 
    $("div#toTop").click(function(){
        $("html").animate(
            {scrollTop : 0 }
            , 400 
        );
    	return false;
    });

    // go back button 
    $("div#goBack").click(function(){
        history.go(-1);
    });

    // function close button 
    $("div.functionItem div.closeBtn").click(function(){
        $(this).children("div").eq(0).css({
            "right" : "20px"
            , "transform" : "rotate(90deg)"
            , "transition" : "0.5s"
        });
        $(this).children("div").eq(-1).css({
            "top" : "-12px"
            , "right" : "20px"
            , "transform" : "rotate(-90deg)"
            , "transition" : "0.5s"
        });

        $(this).parent("div.functionItem").delay(700).fadeOut(1000);
    });



});