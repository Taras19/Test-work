var nav=document.querySelector(".nav");
var menuButton=document.querySelector(".menu-button");
    menuButton.addEventListener("click",function(){
        menuButton.classList.toggle("menu-button-open");
        nav.classList.toggle("nav-open");
        });
var linkNav=document.querySelectorAll(".nav li");
    for(var i=0;i<linkNav.length;i++){
        linkNav[i].addEventListener("click",function(){
            nav.classList.remove("nav-open");
            menuButton.classList.remove("menu-button-open");
                for(var k=0;k<linkNav.length;k++){
                       linkNav[k].classList.remove("li-active"); 
                    }
                this.classList.add("li-active");
        });
    }
$('.li--icon-1').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('.electronic-minds').position().top}, 300);
    });
$('.li--icon-2').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('.info').position().top}, 300);
    });
$('.li--icon-3').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('.footer').position().top}, 300);
    });
var display=document.querySelector(".display");
var timer1 = window.setInterval('timer()',500);

function timer(){
    if(document.documentElement.clientWidth<480){
        var windowHeight=document.documentElement.clientHeight;
        var electronicMinds=document.querySelector(".electronic-minds");
        var electronicMindsStyle=getComputedStyle(electronicMinds);
        var  electronicMindsHeight=parseFloat(electronicMindsStyle.height)+parseFloat(electronicMindsStyle.paddingTop)+ parseFloat(electronicMindsStyle.paddingBottom);
        var info=document.querySelector(".info");
        var infoStyle=getComputedStyle(info);
        var  infoHeight=parseFloat(infoStyle.height)+parseFloat(infoStyle.paddingTop)+ parseFloat(infoStyle.paddingBottom);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(scrollTop<electronicMindsHeight){
            display.src="img/menu-icon-1.jpg";
                for(var k=0;k<linkNav.length;k++){
                    linkNav[k].classList.remove("li-active"); 
                    }
                document.querySelector(".li--icon-1").classList.add("li-active");
            }
        else if(scrollTop>electronicMindsHeight && scrollTop<(infoHeight+electronicMindsHeight-windowHeight)){
            display.src="img/menu-icon-2.jpg";
                for(var k=0;k<linkNav.length;k++){
                    linkNav[k].classList.remove("li-active"); 
                    }
                document.querySelector(".li--icon-2").classList.add("li-active");
            }
        else if(scrollTop>(infoHeight+electronicMindsHeight-windowHeight)){
                display.src="img/menu-icon-3.jpg";
                    for(var k=0;k<linkNav.length;k++){
                       linkNav[k].classList.remove("li-active"); 
                    }
                document.querySelector(".li--icon-3").classList.add("li-active");
                }
        }
    }