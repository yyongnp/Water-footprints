anime({
  targets: 'div.check1',
  translateY: [
    { value: 5, duration: 1400},
    { value: 0, duration: 900}
  ],
  loop:true,
});
anime({
  targets: 'div.check2',
  translateY: [
    { value: 5, duration: 1400},
    { value: 0, duration: 900}
  ],
  loop:true,
});
anime({
  targets: 'div.check3',
  translateY: [
    { value: 5, duration: 1400},
    { value: 0, duration: 900}
  ],
  loop:true,
});
$(document).ready(function(){
        $("#p2").hide();
        $("#p3").hide();
        $("#p4").hide();
        $("#p5").hide();
        $("#p6").hide();
        $("#p7").hide();
        $("#p8").hide();
        $("#p9").hide();
        $("#p10").hide();
        $("#p11").hide();
        $("#next2").hide();
        $("#next3").hide();
        $("#next4").hide();
        $("#next5").hide();
        $("#next6").hide();
        $("#next7").hide();
        $("#next8").hide();
        $("#subb").hide();
        $("#ending").hide();

    });
    $("#top").click(function(){
      $("#p2").hide();
      $("#p3").hide();
      $("#p4").hide();
      $("#p5").hide();
      $("#p6").hide();
      $("#p7").hide();
      $("#p8").hide();
      $("#p9").hide();
      $("#p10").hide();
      $("#p11").hide();
      $("#next2").hide();
      $("#next3").hide();
      $("#next4").hide();
      $("#next5").hide();
      $("#next6").hide();
      $("#next7").hide();
      $("#next8").hide();
      $("#subb").hide();
      $("#ending").hide();
    
});
    $("#start").click(function(){
    $("#p2").show();
        
});

        $("#check1").click(function(){
        $("#p3").show();
        $("#next2").show();
    });

    $("#bt3a").click(function(){
    $("#p4").show();
    $("#next3").show();
    });
    $("#bt3b").click(function(){
    $("#p4").show();
    $("#next3").show();
    });
    $("#bt3c").click(function(){
    $("#p4").show();
    $("#next3").show();
    });
    $("#bt3d").click(function(){
    $("#p4").show();
    $("#next3").show();
    });

    $("#check2").click(function(){
    $("#p5").show();
    $("#next4").show();
    });
    $("#bt5a").click(function(){
    $("#p6").show();
    $("#next5").show();
    });
    $("#bt5b").click(function(){
    $("#p6").show();
    $("#next5").show();
    });
    $("#bt5c").click(function(){
    $("#p6").show();
    $("#next5").show();
    });
    $("#bt6a").click(function(){
    $("#p7").show();
    $("#next6").show();
    });
    $("#bt6b").click(function(){
    $("#p7").show();
    $("#next6").show();
    });
    $("#bt6c").click(function(){
    $("#p7").show();
    $("#next6").show();
    });
    $("#bt7a").click(function(){
    $("#p8").show();
    $("#next7").show();
    });
    $("#bt7b").click(function(){
    $("#p8").show();
    $("#next7").show();
    });
    $("#bt7c").click(function(){
    $("#p8").show();
    $("#next7").show();
    });
    $("#bt8a").click(function(){
    $("#p9").show();
    $("#next8").show();
    });
    $("#bt8b").click(function(){
    $("#p9").show();
    $("#next8").show();
    });
    $("#bt8c").click(function(){
    $("#p9").show();
    $("#next8").show();
    });
    $("#check3").click(function(){
    $("#p10").show();
    $("#subb").show();
    });
    $("#bt10").click(function(){
    $("#p11").show();
    $("#ending").show();
    });

    $("#roopao").click(function(){
    $("#ending").show();
    });

 