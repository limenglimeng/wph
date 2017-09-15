/**
 * Created by Administrator on 2017/7/24.
 */
window.onload= function () {
    //scroll();
    var nav=document.querySelector(".nav");
    var bodyHeight=document.body.offsetHeight;
    var navMinDistance=bodyHeight-nav.offsetHeight-nav.offsetTop;
    scrollVertical(nav,100,navMinDistance);
}
function scroll(){
    var nav=document.querySelector(".nav");
    var navHeight=nav.offsetHeight;
    var header=document.querySelector(".wph_header");
    var headerHeight=header.offsetHeight;
    var bodyHeight=document.body.offsetHeight;
    var maxHeight=0;
    var minHeight=bodyHeight-navHeight-headerHeight;
    var startY=0;
    var moveY=0;
    var distance=0;
    var extral=50;
    nav.addEventListener('touchstart', function (event) {
        startY= event.touches[0].clientY;

    });
    nav.addEventListener('touchmove', function (event) {
        moveY= event.touches[0].clientY-startY;
        if((distance+moveY)>(maxHeight+extral)){
            moveY=0;
            distance=maxHeight+extral;
        }else if((distance+moveY)<(minHeight-extral)){
            moveY=0;
            distance=minHeight-extral;
        }
        nav.style.transiton="";
        nav.style.transform='translateY('+(moveY+distance)+'px)';

    });
    nav.addEventListener('touchend', function () {
        distance+=moveY;
        if(distance>maxHeight){
           distance=maxHeight;
        }else if(distance<minHeight){
            distance=minHeight;
        }
        nav.style.transform='translateY('+distance+'px)';
        nav.style.transiton="all .5s";
    });
}
function scrollVertical(move,delayDistance,minDistance){
    var maxDistance=0;
    var startY=0;
    var moveY=0;
    var distanceY=0;
    var startTransition= function () {
        move.style.transition="all .5s";
    };
    var endTransition= function () {
        move.style.transition="";
    };
    var setTransform= function (distance) {
        move.style.transform="translateY("+distance+"px)";
    };
    move.addEventListener('touchstart',function(event){
        startY=event.touches[0].clientY;
        console.log(event);
    });
    move.addEventListener('touchmove',function(event){
        moveY=event.touches[0].clientY-startY;
        if((distanceY+moveY)>(maxDistance+delayDistance)){
            moveY=0;
            distanceY=maxDistance+delayDistance;
        }else if((distanceY+moveY)<(minDistance-delayDistance)){
            moveY=0;
            distanceY=minDistance-delayDistance;
        }
        endTransition();
        setTransform(moveY+distanceY);
    });
    move.addEventListener('touchend',function(event){
        distanceY+=moveY;
        if(distanceY>maxDistance){
            distanceY=maxDistance;
        }else if(distanceY<minDistance){
            distanceY=minDistance;
        }
        startTransition();
        setTransform(distanceY);
    });

}