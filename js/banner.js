 $(function () {
    let width=50;
    let height=50;
    let xcount=parseInt($(".my-wrap").width()/width)-1;
    let ycount=parseInt($(".my-wrap").height()/height)-1;

    var img="img/1.jpg";
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
        let minrow=0;
        let mincoloum=0;
        let maxrow=ycount-1;
        let maxcolumn=xcount-1;
        let row=0;
        let colomn=0;
        let max=xcount*ycount
        let timer=setInterval(function () {
            $(".my-wrap>.sp").eq(xcount*row+colomn).addClass("hide")
            if(row==minrow&&colomn<maxcolumn){
                colomn++;
            }else if(colomn==maxcolumn&&row<maxrow){
                row++;
            }else if(row==maxrow&&colomn>mincoloum){
                colomn--;
            }else{
                row--;
            }
            if(row-1==minrow&&colomn==mincoloum){
                minrow++;
                mincoloum++;
                maxrow--;
                maxcolumn--;
            }

            count++;
            if(count>=max){
                clearInterval(timer);
            }
        },1000/60);
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
        $(this).addClass('dot').siblings().removeClass('dot');
    });

    var t = 0;
    var timer1;
    function suspend1(){
        clearInterval(timer1);
        timer1 = setInterval(function(){
            t++;
            if(t>1){
                t=0
            }
            $(".my-wrap>.images>img").eq(t).fadeIn(3000).siblings().fadeOut(3000);
            if(img!=$(".my-wrap>.images>img").eq(t).attr("src")){
                var w = $(".my-wrap").css("width");
                w = parseInt(w);
                if(w > 768){
                    createsp();
                }
                img=$(".my-wrap>.images>img").eq(t).attr("src");
            }

        },6000);
    }
    suspend1();

    $(".my-wrap").hover(function() {
        clearInterval(timer1);
    }, function() {
        suspend1();
    });
});