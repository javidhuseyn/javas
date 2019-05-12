document.querySelector(".open-icon").addEventListener("click",function(){
    document.querySelector(".layout").classList.add("active");
})
document.querySelector('.layout span').addEventListener('click',function(){
    document.querySelector(".layout").classList.remove("active");
});

var lenta=document.querySelector(".slide-wrapper ul")
var a=0;
function slideRight(){
    a++;
    if(lenta.querySelectorAll("li").length==a){
        a=0;
    }
    lenta.style.left=-(a*1100)+"px"
}
function slideLeft(){
    a--;
    if(a==-1){
    a=lenta.querySelectorAll("li").length-1;
    }
    lenta.style.left=-(a*1100)+"px"
}