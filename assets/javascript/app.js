$(document).ready(function(){
 var wins=0;
 var points = 0;
 var losses = 0;
 var submit = $('#submit');
 
    function countdown() {
        var count1 = 90;
        var myTimer = setInterval(function() {
        document.getElementById("main").innerHTML = count1;
        count1--;  
        if (count1 === 0) {
         var tryAgain = prompt("Times up! Would you like to try again? y/n?")
         if (tryAgain === "n"){
            clearInterval(myTimer);
            losses++;
            console.log("Losses: " + losses);
         } else{
            clearInterval(myTimer);
            losses++;
            console.log("Losses: " + losses);
            
         }
         }
          
    }, 1000);
    $(submit).on('click', function (event){
        event.preventDefault();
        //Question One
        var qOne = $("input[name='q1']:checked").val();
        if (qOne === "Rita Skeeter"){
            points++;
            
        }else{
            points--;
            
        }
        console.log(qOne);
        //Question Two
        var qTwo = $("input[name='q2']:checked").val();
        if (qTwo === "Hagrid, Madame Maxime"){
            points++;
            
        }else{
            points--;
            
        }
        console.log(qTwo);
        //Question Three
        var qThree = $("input[name='q3']:checked").val();
        if (qThree === "Remus Lupin"){
            points++;
            
        }else{
            points--;
            
        }
        console.log(qThree);
        //Question Four
        var qFour = $("input[name='q4']:checked").val();
        if (qFour === "Fred Weasley"){
            points++;
            
        }else{
            points--;
            
        }
        console.log(qFour);
        //Question Five
        var qFive = $("input[name='q5']:checked").val();
        if (qFive === "Stag"){
            points++;
            
        }else{
            points--;
            
        }
        console.log(points);
        console.log(qFive);
       if(points === 5){
        wins++;
        console.log(wins);
        var displayWin=$('<h2>');
        displayWin.text("Great Scott! You Won!!! A True Harry Potter Fan You Are!");
        displayWin.appendTo($('.win'));
        document.getElementById("points").innerHTML = points;
        document.getElementById("losses").innerHTML = losses;
        clearInterval(myTimer);
        
      
       }
        else{
        losses++;
        var displayWin=$('<h2>');
        displayWin.text("The Magical Arts are Calling you to Study. Better Luck Next Time.");
        displayWin.appendTo($('.lost'));
        document.getElementById("losses").innerHTML = losses;
        clearInterval(myTimer);
        
       
        }
        
        
    });
}
    countdown();

   
});