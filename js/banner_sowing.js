var prev_btn = document.querySelector(".leftA");
var next_btn = document.querySelector(".rightA");
// console.log(prev_btn,next_btn);
// var aLi = document.getElementsByClassName("banner-img")[0].children;
var aLi = document.querySelector(".banner-img").children;
// console.log(aLi);
var index = 0;
var item_width = aLi[0].offsetWidth;
// console.log(item_width);
next_btn.onclick = function(){
    var hidden,show;
    hidden = index;
    if(index == aLi.length - 1){
        index = 0;
        show = index;
    }else{
        index++;
        show = index;
    }
    console.log(hidden,show);
    aLi[show].style.left = item_width + "px";
    aLi[show].style.zIndex = 1;
    move(aLi[show],0,"left");

    aLi[hidden].style.left = 0 + "px";
    // aLi[show].style.zIndex = 0;
    move(aLi[hidden],-item_width,"left");
    console.log(1);

}