document.write("Loaded js");



function sorryGame() {

        // startup message to use
        
        
            document.write('Sorry'); 
            document.write("****** press ENTER to flip a card *******");

            

            var number = getNumber();

            printLineBreak(71, '/');
            printLineBreak(71, '*');
            printLineBreak(71, '/');
            printCard(number);
            printLineBreak(71, '/');
            printLineBreak(71, '*');
            printLineBreak(71, '/');

            document.write("\n - type \":wq\" at anytime to quit program -\n");

}

    

    function getNumber() {

        var number = 6;

        var max = 13; 
        var min = 1; 

        // 6 and 9 are not in the deck 
        while (number == 6 || number == 9) {
            // generates random number between 1 and 13
            number = return Math.random() * (max - min) + min;
//        document.write(number); 
        }

        return number;

    }

    function printCard(var num) {

        switch (num) {
            case 1:
                printNum(1);
                document.write("Either start a pawn our OR"
                        . " move one pawn forward 1 space";
                break;

            case 2:
                printNum(2);
                document.write("Either start a pawn our OR"
                        + " move one pawn forward 2 spaces "
                        + "Whichever you\n do--or even "
                        + "if you couldn't move-DRAW AGAIN and move accordingly";

                break;
            case 3:
                printNum(3);
                document.write("Move one pawn forward 3 spaces");

                break;

            case 4:
                printNum(4);
                document.write("Move one pawn backwards 4 spaces");

                break;

            case 5:
                printNum(5);
                document.write("Move one pawn forward 5 spaces");

                break;

            case 7:
                printNum(7);
                document.write("Either move one pawn forward 7 spaces-OR split the forward move between\n"
                        + "any two pawns. Notes:\n"
                        + "• You may not use 7 to start a pawn.\n"
                        + "• If you use part of the 7 to get a pawn HOME, you must be able to use the\n"
                        + "balance of the move for another pawn");

                break;

            case 8:
                printNum(8);
                document.write("Move one pawn forward 8 spaces");

                break;

            case 10:
                printNum(10);
                document.write("Either move one pawn forward 10 spaces-OR move one pawn\n"
                        + "backwards 1 space.");

                break;

            case 11:
                printNum(11);
                document.write("Move one pawn forward 11 spaces-OR switch any one of your pawns with\n"
                        + "one of·any opponent's. Notes:\n"
                        + "•You may forfeit your move if you do not wish to change places and it is\n"
                        + "impossible to go forward I I spaces. You may only use H for pawns in play on the open track-not al START.\n"
                        + "HOME or in a SAFETY ZONE.\n"
                        + "•If your swilch landed you.on ;1 triangle at the beginning of anolher player's\n"
                        + "slide. slide to the end!");

                break;

            case 12:
                printNum(12);
                document.write("Move one pawn forward 12 spaces");

                break;

            case 13:
                document.write("SORRRRRRRRRYYYYYYYY!!!");
                
                document.write("Take one pawn from your START. place it on any space that is\n"
                        + "occupied by any opponent, and bump that opponent's pawn back to its\n"
                        + "START. If there is no pawn on your START or no opponent's pawn on any\n"
                        + "space you can move to. you forfeit your move.");

                break;

            default:
                printNum(3);
                document.write("Move one pawn forward 3 spaces");

        } //end switch 

    }

////////////////////////////////////////////////////////////////////////////////    
// this method formats a line break with a width equual to the int passed into
// using the string passed in 
////////////////////////////////////////////////////////////////////////////////
    function printLineBreak(var width, var c) {

        for (int i = 1; i < width; i++) {   // print the char c until you've reached the desired width
            document.write(c);
        }
        

    }

    function printNum(var num) {

        document.write("\n\n     " + num + "     \n\n");

    }




