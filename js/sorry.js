console.log("loaded corky"); 


function sorryCard() {

number = getNumber();
var message = getMessage(number);  


}




function getNumber() {


        var number = 3;
        
        var min = Math.ceil(1); 
        var max = Math.floor(12); 
        

        // 6 and 9 are not in the deck 
        // while (number == 6 || number == 9) {
            


            number = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 



        // }

    return number; 

}


function getMessage(num){


 var message = "Card Message";  

 switch (num) {
            case 1:
                
                message = " move one CORK forward 1 space";
                printCard(1, message);
                break;

            case 2:
                
                message = "move one CORK forward 2 spaces ";
                printCard(2, message);            
                break;

            case 3:
                
                message = "Move one CORK forward 3 spaces";
                printCard(3, message);
                break;

            case 4:
                
                message = "Move one CORK backwards 4 spaces";
                printCard(4, message);
                break;

            case 5:
                
                message = "Move one CORK forward 5 spaces";
                printCard(5, message);
                break;

            case 7:
                
                message = "move one CORK forward 7 spaces";
                printCard(7, message);
                break;

            case 8:
                
                message = "Move one CORK forward 8 spaces";
                printCard(8, message);
                break;

            case 9:
                
                message = "slide up closest slide - OR - if the closest is RED slide down";
                printCard("SLIDEY", message);
                break;

            case 10:
                
                message = "reach down and bring closest player to where you are.\n";
                printCard("REACHY", message);

                break;

            case 11:
                
                message = "Stop on this square for two turns\n";
                        
                printCard("STOPPY",message);
                break;

            case 12:
                
                message = "Find the closest player\n"
                + "and push him/her up the closest slide to that player\n" + "Then! You go DOWN the closest slide to that slide!";
                printCard("STOPPY SLIDEY", message);
                break;

//Five seconds to stay on the slide but if the five seconds run out the player has to come all the way back down to push the player
            // case 13:
                
                
            //     message = "Take one CORK from your START. place it on any space that is\n"
            //             + "occupied by any opponent, and bump that opponent's CORK back to its\n"
            //             + "START. If there is no CORK on your START or no opponent's CORK on any\n"
            //             + "space you can move to. you forfeit your move.";
            //     printCard(13, message);
            //     break;

            default:
                
                message = "Move one CORK forward 3 spaces";
                printCard(3, message);

        } //end switch 


        return message; 


}


    function printCard(title, message) {

    // if(num <= 8){
        document.getElementById("num").innerHTML= title; 
        document.getElementById("msg").innerHTML = message; 
    // }
    // else {
        // document.getElementById("num").innerHTML = "SORRY"; 
        // document.getElementById("msg").innerHTML = message; 
    // }

        

    }



  