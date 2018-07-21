
     /*Random word generator*/
     var userGuess;
     var num= 7;
     var stockPile = ["WORD", "RED", "TABLE","BATMAN"];
     var random = stockPile[Math.floor(Math.random()*stockPile.length)];
     console.log(random);
     var guessArray = [];
     for (var i =0; i < random.length; i++){
         guessArray[i]="-"
         console.log(guessArray[i]);
     }  
     console.log(guessArray);

     document.onkeyup = function(event){
        var userGuess = event.key;
        userGuess2=userGuess[0].toUpperCase();
        
   
    console.log(userGuess);
    console.log(random.indexOf(userGuess2));
    
    
    if (random.indexOf(userGuess2)==-1){
        console.log("wrong");
        
        num=num-1;
        console.log(num);
              
        if (num=6){
            document.getElementById("myImg").src = "assets/images/gallow6.jpg";
            }
            else if(num=5){
            document.getElementById("myImg").src = "assets/images/gallow5.jpg";
            }
            else if(num=4){
                document.getElementById("myImg").src = "assets/images/gallow4.jpg";
                }
            else if(num=3){
            document.getElementById("myImg").src = "assets/images/gallow3.jpg";
            }
            else if(num=2){
                document.getElementById("myImg").src = "assets/images/gallow2.jpg";
                }
            else if(num=1){
                document.getElementById("myImg").src = "assets/images/gameover.jpg";
                }
       
    } 
    else{      
    for(var j =0; j < random.length; j++){
        if (random[j] === userGuess2){
            guessArray[j] = userGuess2;  
            console.log(guessArray);
        }}
    }

        
       
        }
       




  
   
     

     

