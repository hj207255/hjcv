document.getElementById("portfolio-1").onclick=function () {
    document.getElementById("bar").className="bar portfolio-nav-1";
    document.getElementById("img1").className="swiper-slide xianshi";
    $('#img1').siblings('.xianshi').removeClass('xianshi');
};
document.getElementById("portfolio-2").onclick=function () {
    document.getElementById("bar").className="bar portfolio-nav-2";
    document.getElementById("img2").className="swiper-slide xianshi";
    $('#img2').siblings('.xianshi').removeClass('xianshi');
};
document.getElementById("portfolio-3").onclick=function () {
    document.getElementById("bar").className="bar portfolio-nav-3";
    document.getElementById("img3").className="swiper-slide xianshi";
    $('#img3').siblings('.xianshi').removeClass('xianshi');
};

setTimeout(function () {//设置定时器
    document.getElementById("site-welcome").classList.add("active");
},1000);

setTimeout(function () {
    yyy();
},1000);

let dateTags=document.querySelectorAll('[date-x]');
for (let i=0;i<dateTags.length;i++){
    dateTags[i].classList.add("move");
}
window.onscroll=function () {
    if (window.scrollY!=0){
        document.getElementById("top-nav-bar").classList.add("gundong");
    }else if (window.scrollY==0){
        document.getElementById("top-nav-bar").classList.remove("gundong");
    }
    yyy();

};

function yyy(){
        let dateTags=document.querySelectorAll('[date-x]');
        let minIndex=0;
        for (let i=0;i<dateTags.length;i++){
            if (Math.abs(dateTags[i].offsetTop-window.scrollY)<Math.abs(dateTags[minIndex].offsetTop-window.scrollY)){
                minIndex=i;
            }
        }
        dateTags[minIndex].classList.remove("move");
        let id=dateTags[minIndex].id;
        let a=document.querySelector('a[href="#'+id+'"]');
        let li=a.parentNode;
        let lis=li.parentNode.children;
        for (let i=0;i<lis.length;i++){
            lis[i].classList.remove("scrollAct");
        }
        li.classList.add("scrollAct");
}



let liTags=document.querySelectorAll(".top-nav-bar>nav>ul>li");
for (let i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function (x) {
        x.currentTarget.classList.add('active');
    };
    liTags[i].onmouseleave=function (x) {
        x.currentTarget.classList.remove('active');
    };
}


let aTags=document.querySelectorAll(".top-nav-bar>nav>ul>li>a");
for (let i=0;i<aTags.length;i++){
    aTags[i].onclick=function (x) {
        x.preventDefault();
        let a=x.currentTarget;
        let href=a.getAttribute("href");
        let ele=document.querySelector(href);
        let top=ele.offsetTop;
        //window.scrollTo(0,top-70);

        let currentTop=window.scrollY;
        let targetTop=top;
        let s=Math.abs(targetTop-currentTop);
        /*******************************/
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        var coords = { y: currentTop};
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop-70}, (s/100)*100)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
                window.scrollTo(0,coords.y);
            })
            .start();
        /*******************************/
    }
}


/************浮层***************/
$('#button').on('click',function(){
    if($('.layer').is(':hidden')){
        $('.layer').show();
    }else{
        $('.layer').hide();
    }
    $(document).one('click',function(){
        $('.layer').hide();
    });
});
$('.window').on('click',function(e){
    e.stopPropagation()
});

/***************刷新跑到顶端*****************/
window.onload=function(){
    if(document.body.scrollTop>0){
        console.log(1);
        window.scrollTo(0,-1);
        document.body.scrollTop=0;
    }
    window.scrollTo(0,-1);
    document.body.scrollTop=0;
    setTimeout(() => window.scrollTo(0,0), 150)
}