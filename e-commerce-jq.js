
    $(document).ready(function(){
    
    $("#btn").click(function(){
      $(".rdmore").show();
    });
    $("#btn").click(function(){
      $("#btn").hide();
    });
    $("#pym").click(function(){
      $(".pmnt").show();
    });
    $("#pym").click(function(){
      $("#pym").hide();
    });
    
     $("#hlp").click(function(){
      $(".hlpm").show();
    });
    $("#hlp").click(function(){
      $("#hlp").hide();
    });
});
    $(document).ready(function(){
  $("#botn0").click(function(){
    $("#samsung,#huawei,#vivo,#honor").show();
   
  });
  $("#botn1").click(function(){
    $("#huawei,#vivo,#honor").hide();
    $("#samsung").show();
  });
 
  $("#botn2").click(function(){
    $("#samsung,#vivo,#honor").hide();
    $("#huawei").show();
  });
  $("#botn3").click(function(){
    $("#samsung,#huawei,#honor").hide();
    $("#vivo").show();
  });
  $("#botn4").click(function(){
    $("#samsung,#vivo,#huawei").hide();
    $("#honor").show();
  });
  });
  
  $(document).ready(function(){
  $("#botn01").click(function(){
    $("#dell,#acer,#hp,#lenovo").show();
   
  });
  $("#botn5").click(function(){
    $("#acer,#hp,#lenovo").hide();
    $("#dell").show();
  });
 
  $("#botn6").click(function(){
    $("#dell,#hp,#lenovo").hide();
    $("#acer").show();
  });
  $("#botn7").click(function(){
    $("#dell,#acer,#lenovo").hide();
    $("#hp").show();
  });
  $("#botn8").click(function(){
    $("#dell,#acer,#hp").hide();
    $("#lenovo").show();
  });
});
  $(document).ready(function(){
 
 $("#myformel2").click(function(){
   
 $(".myformel1").hide();
 $(".myfo2").show();
 });
 $("#myfo1").click(function(){
   
   $(".myfo2").hide();
   $(".myformel1").show();
   });

   $("#blbtn").click(function(){
   
   $(".forum,#blbtn").hide();
   $(".bill").show();
   });
   $(document).ready(function(){
  $("#myIput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
});
  

  