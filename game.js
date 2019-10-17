
class Game{
    constructor( domConfig ){
        /*
        'heroArea': $('.heroArea'),
        'playerArea':$('.rightPanel'),
        'playerHand':$('.currentPlayerHand'),
        'playerRooms': $('.currentPlayerHand')
        */
        this.domElements = domConfig;
        this.players = [];
        this.currentPlayer = 0;
        this.roomDeck = new Deck();
        this.heroDeck = new Deck(); 
    }
    addPlayer( name ){
        var newPlayer = new Player(name);
        this.players.push( newPlayer );
        var playerSummaryDom = newPlayer.renderSummary();
        this.domElements.playerArea.append(playerSummaryDom);
    }
}