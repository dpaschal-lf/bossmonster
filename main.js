
var game = null;

$(document).ready( startApp );

function startApp(){
    game = new Game({
        'heroArea': $('.heroArea'),
        'playerArea':$('.rightPanel'),
        'playerHand':$('.currentPlayerHand'),
        'playerRooms': $('.currentPlayerHand')
    });
    game.addPlayer('Dan');
    game.addPlayer('Sam');
    game.addPlayer('Chris');
    game.addPlayer('CH');
}