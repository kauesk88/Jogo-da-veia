
$(function() {
    var player = 1; 
    $(".botao").val(null)
    
    $(".botao").click(function() { 
        if(player == 1) { 
            $(this).val(1);
            $(this).text("X"); 
            player = 2; 
            
        } else {
            $(this).val(2);
            $(this).text("O");
            player = 1; 
            
        } 
    $("h1").text
    ("É a vez do jogador " + player); 
    
    
    
    var b1 = $("#b1").val();
    var b2 = $("#b2").val();
    var b3 = $("#b3").val();
    var b4 = $("#b4").val();
    var b5 = $("#b5").val();
    var b6 = $("#b6").val();
    var b7 = $("#b7").val();
    var b8 = $("#b8").val();
    var b9 = $("#b9").val();
    
    //alert (b1 + b2 + b3 +"\n"+ b4 + b5 + b6+"\n"+
    //b7 + b8 + b9)
    
    if(
    b1 == 1 && b2 == 1 && b3 == 1 ||
    b4 == 1 && b5 == 1 && b6 == 1 ||
    b7 == 1 && b8 == 1 && b9 == 1 ||
    
    b1 == 1 && b4 == 1 && b7 == 1 ||
    b2 == 1 && b5 == 1 && b8 == 1 ||
    b3 == 1 && b6 == 1 && b9 == 1 ||
    
    b1 == 1 && b5 == 1 && b9 == 1 ||
    b3 == 1 && b5 == 1 && b7 == 1
    ){
        $("p").text
         ("O jogador 1 Venceu");
        $(".botao").val(null);
        $(".botao").text(".");
         
         
    } 
    if(
    b1 == 2 && b2 == 2 && b3 == 2 ||
    b4 == 2 && b5 == 2 && b6 == 2 ||
    b7 == 2 && b8 == 2 && b9 == 2 ||
    
    b1 == 2 && b4 == 2 && b7 == 2 ||
    b2 == 2 && b5 == 2 && b8 == 2 ||
    b3 == 2 && b6 == 2 && b9 == 2 ||
    
    b1 == 2 && b5 == 2 && b9 == 2 ||
    b3 == 2 && b5 == 2 && b7 == 2
    ){
        $("p").text
         ("O jogador 2 Venceu");
        $(".botao").val(null);
        $(".botao").text(".");
         
         
    };
    
    //if(    
    //b1 != null && b2 != null  && b3 != null &&
    //b4 != null && b5 != null  && b6 != null && 
    //b7 != null && b8 != null && b9 != null 
    //){
      //  $("p").text
      //   ("Deu Velha");
        
   // }
    
    });

    $("#iniciar").click(function() {
        $(".botao").text(".");
        $(".botao").val(null);
        player = 1;
        $("p").text("");
        $("h1").text
         ("É a vez do jogador " + player); 
    });
 

});