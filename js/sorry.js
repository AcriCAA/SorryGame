console.log("loaded"); 


function sorryCard() {

number = getNumber();
var message = getMessage(number);  


}




function getNumber() {


        var number = 6;
        
        var min = Math.ceil(1); 
        var max = Math.floor(13); 
        

        // 6 and 9 are not in the deck 
        while (number == 6 || number == 9) {
            


            number = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 



        }

    return number; 

}


function getMessage(num){


 var message = "Card Message";  

 switch (num) {
            case 1:
                
                message = "Either start a pawn our OR"
                        + " move one pawn forward 1 space";
                printCard(1, message);
                break;

            case 2:
                
                message = "Either start a pawn our OR"
                        + " move one pawn forward 2 spaces "
                        + "Whichever you do--or even "
                        + "if you couldn't move-DRAW AGAIN and move accordingly";
                printCard(2, message);            
                break;

            case 3:
                
                message = "Move one pawn forward 3 spaces";
                printCard(3, message);
                break;

            case 4:
                
                message = "Move one pawn backwards 4 spaces";
                printCard(4, message);
                break;

            case 5:
                
                message = "Move one pawn forward 5 spaces";
                printCard(5, message);
                break;

            case 7:
                
                message = "Either move one pawn forward 7 spaces-OR split the forward move between\n"
                        + "any two pawns. Notes:"
                        + "• You may not use 7 to start a pawn."
                        + "• If you use part of the 7 to get a pawn HOME, you must be able to use the\n"
                        + "balance of the move for another pawn";
                printCard(7, message);
                break;

            case 8:
                
                message = "Move one pawn forward 8 spaces";
                printCard(8, message);
                break;

            case 10:
                
                message = "Either move one pawn forward 10 spaces-OR move one pawn\n"
                        + "backwards 1 space.";
                printCard(10, message);

                break;

            case 11:
                
                message = "Move one pawn forward 11 spaces-OR switch any one of your pawns with\n"
                        + "one of·any opponent's. Notes:"
                        + "•You may forfeit your move if you do not wish to change places and it is\n"
                        + "impossible to go forward I I spaces. You may only use H for pawns in play on the open track-not al START.\n"
                        + "HOME or in a SAFETY ZONE."
                        + "•If your swilch landed you.on ;1 triangle at the beginning of anolher player's\n"
                        + "slide. slide to the end!";
                printCard(11, message);
                break;

            case 12:
                
                message = "Move one pawn forward 12 spaces";
                printCard(12, message);
                break;

            case 13:
                
                
                message = "Take one pawn from your START. place it on any space that is\n"
                        + "occupied by any opponent, and bump that opponent's pawn back to its\n"
                        + "START. If there is no pawn on your START or no opponent's pawn on any\n"
                        + "space you can move to. you forfeit your move.";
                printCard(13, message);
                break;

            default:
                
                message = "Move one pawn forward 3 spaces";
                printCard(3, message);

        } //end switch 


        return message; 


}


    function printCard(num, message) {

    if(num < 13){
        document.getElementById("num").innerHTML= num; 
        document.getElementById("msg").innerHTML = message; 
    }
    else {
        document.getElementById("num").innerHTML = "SORRY"; 
        document.getElementById("msg").innerHTML = message; 
    }

        

    }



  