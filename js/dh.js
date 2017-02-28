$(function () {
   var ospan1=$('.span1');
    var mda=document.getElementsByTagName('audio')[0];
       var mdb=document.getElementById('media');
   ospan1.click(function () {
           if(mda.paused){
               mdb.play();
               ospan1.css('animation-play-state','running');
           }else{
               mdb.pause();
               ospan1.css('animation-play-state','paused');
           }

       }
   )
})