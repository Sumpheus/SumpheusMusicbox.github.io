// Contrôle du lecteur

$(document).ready(function() {
     var widget = SC.Widget(document.getElementById('soundcloud_widget'));
     widget.bind(SC.Widget.Events.READY, function() {
       console.log('Ready...');
     });
     $('#play').click(function() {
         widget.play();
     });
     $('#stop').click(function(){
         widget.pause();
     });
     $('#previous').click(function() {
         widget.prev();
     });
     $('#next').click(function() {
         widget.next();
     });
     //Contrôle du volume
     $('#lower').click(function() {
         widget.setVolume(50);
     })
     $('#up').click(function() {
         widget.setVolume(100);
     })
   });


// Disque

var a=document.getElementById('disque');
var b=document.getElementById('play');
var c=document.getElementById('stop');
var d=document.getElementById('previous');
var e=document.getElementById('next');




b.addEventListener("click",function(){
  a.animate([
    {transform: 'rotateZ(0deg)'},
    {transform: 'rotateZ(360deg)'}
  ], {
    duration: 3000,
    iterations: Infinity
  }
           )
})

c.addEventListener("click",function(){
  a.animate([
    {transform: 'rotateZ(0deg)'},
    {transform: 'rotateZ(0deg)'}
  ], {
    duration: 3000,
    iterations: Infinity
  }
           )
})


e.addEventListener("click", function(){
    
  a.animate([
    {transform: 'rotateZ(0deg)'},
    {transform: 'rotateZ(360deg)'}
  ], {
    duration: 3000,
    iterations: Infinity
  }
           )

})

$("#b1").click(function(){
    $("#bgvid").css({
        "transition-duration": "1s",
        "filter": "hue-rotate(-50deg) blur(1px) saturate(80%)",
    });
})
$("#b1").dblclick(function(){
    $("#bgvid").css({
        "filter": "hue-rotate(50deg) blur(1px) saturate(80%)",
    });
})


$("#b2").click(function(){
    $("#bgvid").css({
        "transition-duration": "1s",
        "transform": "rotate(180deg)",
    });
})

$("#b3").click(function(){
    $("#bgvid").css({
        "transition-duration": "1s",
        "filter": "grayscale(100%)",
    });
})

$("#b4").click(function(){
    $(".noise").css({
        "transition-duration": "1s",
        "visibility" : "visible",
    })
    $(".noise2nd").css({
        "transition-duration" : "1s",
        "visibility" : "visible",
    });
})

$("#b5").click(function(){
    $("#bgvid").css({
        "transition-duration": "1s",
    })
    $("#bgvid").attr("src", "imgs/bgvids/80s3.mp4");
})
    
$("#b5").dblclick(function(){
    $("#bgvid").css({
        "transition-duration": "1s",
    })
    $("#bgvid").attr("src", "imgs/bgvids/80s2.mp4");
})

// 2nd column

$("#b6").click(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "backgroundImage":"url(imgs/disks/retro02.gif)",
    });
})
$("#b6").dblclick(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "filter": "hue-rotate(-50deg)",
    });
})

$("#b7").click(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "backgroundImage":"url(imgs/disks/retro03.gif)",
    });
})
$("#b7").dblclick(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "filter": "hue-rotate(80deg)",
    });
})

$("#b8").click(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "backgroundImage":"url(imgs/disks/retro04.gif)",
    });    
})
$("#b8").dblclick(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "filter": "hue-rotate(-120deg)",
    });
})

$("#b9").click(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "backgroundImage":"url(imgs/disks/retro05.gif)",
    });    
})
$("#b9").dblclick(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "filter": "hue-rotate(50deg)",
    });
})

$("#b10").click(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "backgroundImage":"url(imgs/disks/retro06.gif)",
    });
})
$("#b10").dblclick(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "filter": "hue-rotate(125deg)",
    });
})

// back to 0
$("#reset").click(function(){
    $("#disque").css({
        "transition-duration": "1s",
        "backgroundImage":"url(imgs/disks/retro01.gif)",
        "border-color": "black",
        "filter":"hue-rotate(0deg)",
    });
    $("#bgvid").css({
       "transition-duration": "1s",
       "filter": "hue-rotate(0deg) blur(0px) saturate(100%)",
       "transform": "rotate(0deg)",        
    });
    $("#bgvid").attr("src", "imgs/bgvids/80s1.mp4");
    $(".noise").css({
        "transition-duration" : "1s",
        "visibility" : "hidden",
    });
    $(".noise2nd").css({
        "transition-duration" : "1s",
        "visibility" : "hidden",
    });
})