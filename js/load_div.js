/* <div class="card-box">
    <div class="card-img">
        <a href="###"><img src="images/card1.jpg" width="210" height="158" /></a>
    </div>
    <div class="card-info">
        <p class="card-info-title"><a href="###">The Choice</a></p>
        <p class="card-info-type" title="三维-人物/生物">三维-人物/生物</p>
        <p class="card-info-item">
            <span class="statistics-view" title="共1392人气">1392</span>
            <span class="statistics-comment" title="共17评论">17</span>
            <span class="statistics-tuijian" title="共82推荐">82</span>
        </p>
    </div>
    <div class="card-item">
        <span class="user-avatar"><a href="###" title="空梦维深"><img src="images/userimg1.jpg" width="24" height="24" />空梦维深</a></span>
        <span class="time" title="审核通过时间：2018-04-05 13:11:22；创建时间：2018-04-05 01:10:09">7小时前</span>
    </div>
</div> */

// function con_list(number){
    
// }
var main_ele = document.getElementsByClassName("all-work-list")[0];
// var main_ele = document.querySelector(".all-work-list");
var boxlist = "";
for(var i = 0 ; i < 40 ;i++){
    var boxString = `<div class="card-box">
                        <div class="card-img">
                            <a href="###"><img src="images/like4.jpg" width="210" height="158" /></a>
                        </div>
                        <div class="card-info">
                            <p class="card-info-title"><a href="###">The Choice</a></p>
                            <p class="card-info-type" title="人像/摄影">人像/摄影</p>
                            <p class="card-info-item">
                                <span class="statistics-view" title="共1392人气">1392</span>
                                <span class="statistics-comment" title="共17评论">17</span>
                                <span class="statistics-tuijian" title="共82推荐">82</span>
                            </p>
                        </div>
                        <div class="card-item">
                            <span class="user-avatar"><a href="###" title="无限TX"><img src="http://img.zcool.cn/community/04df9157d3d0290000018c1b273960.jpg@80w_80h_1c_1e_1o_100sh.jpg" width="24" height="24" />无限TX</a></span>
                            <span class="time" title="审核通过时间：2018-04-05 13:11:22；创建时间：2018-04-05 01:10:09">7小时前</span>
                        </div>
                    </div>`;
                    boxlist += boxString; 
                                   
}
// console.log(boxlist);  
main_ele.innerHTML += boxlist;


var main_ele = document.getElementsByClassName("all-work-list")[1];
// var main_ele = document.querySelector(".all-work-list");
var boxlist = "";
for(var i = 0 ; i < 5 ;i++){
    var boxString = `<div class="card-box">
                        <div class="card-img">
                            <a href="###"><img src="images/like4.jpg" width="210" height="158" /></a>
                        </div>
                        <div class="card-info">
                            <p class="card-info-title"><a href="###">The Choice</a></p>
                            <p class="card-info-type" title="人像/摄影">人像/摄影</p>
                            <p class="card-info-item">
                                <span class="statistics-view" title="共1392人气">1392</span>
                                <span class="statistics-comment" title="共17评论">17</span>
                                <span class="statistics-tuijian" title="共82推荐">82</span>
                            </p>
                        </div>
                        <div class="card-item">
                            <span class="user-avatar"><a href="###" title="无限TX"><img src="http://img.zcool.cn/community/04df9157d3d0290000018c1b273960.jpg@80w_80h_1c_1e_1o_100sh.jpg" width="24" height="24" />无限TX</a></span>
                            <span class="time" title="审核通过时间：2018-04-05 13:11:22；创建时间：2018-04-05 01:10:09">7小时前</span>
                        </div>
                    </div>`;
                    boxlist += boxString; 
                                   
}
// console.log(boxlist);  
main_ele.innerHTML += boxlist;