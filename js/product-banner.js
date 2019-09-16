
$(function () {
    let width=50;
    let height=50;
    let xcount=parseInt($(".my-wrap").width()/width);
    let ycount=parseInt($(".my-wrap").height()/height);
    let img="../img/1.jpg";

    function createsp(){
        $(".my-wrap>.sp").remove();
        for(let i=0;i<ycount;i++){
            for(let j=0;j<xcount;j++){
                let $p=$("<p class='sp'></p>");
                let _left=j*width;
                let _top=i*height;
                $p.css({"left":_left+"px","top":_top+"px","background":"url('"+img+"')","background-position":"-"+_left+"px -"+_top+"px","background-size":"1226px 460px"});
                $(".my-wrap").append($p);
            }
        }
        let count=0;
        let max=xcount+ycount-2;
        let timer=setInterval(function () {
            $(".my-wrap>.sp").each(function (index,element) {
                let rowindex=parseInt(index/xcount);
                let colomnindex=index%xcount;
                if(count==(rowindex+colomnindex)){
                    $(element).addClass("hide");
                }
            });
            count++;
            if(count>max){
                clearInterval(timer);
            }
        },2000/60);
    }
    $("#my-btn>li").click(function () {
       let $index=$(this).index();
       $(".my-wrap>.images>img").eq($index).fadeIn(1000).siblings().fadeOut(1000);
        if(img!=$(".my-wrap>.images>img").eq($index).attr("src")){
            var w = $(".my-wrap").css("width");
            w = parseInt(w);
            if(w > 768){
                createsp();
            }
            img=$(".my-wrap>.images>img").eq($index).attr("src");
        }
        $(this).addClass('dot').siblings().removeClass('dot')
    });

    var timer1;
    var t = 0;
    function suspend(){
        clearInterval(timer1);
        timer1 = setInterval(function(){
        	t++;
        	if(t > 1){
        		t = 0;
        	}

        	$(".my-wrap>.images>img").eq(t).fadeIn(1000).siblings().fadeOut(1000);
            if(img!=$(".my-wrap>.images>img").eq(t).attr("src")){
                var w = $(".my-wrap").css("width");
                w = parseInt(w);
                if(w > 768){
                    createsp();
                }
                img=$(".my-wrap>.images>img").eq(t).attr("src");
            }
            
        },4000)
    }
    suspend();
    $(".my-wrap").hover(function() {
        clearInterval(timer1);
    }, function() {
        suspend();
    });

});