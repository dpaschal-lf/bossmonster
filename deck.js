
class Deck{
    constructor(){
        this.cards = [];
    }
    addCard( card ){
        this.cards.push(card);
    }
    dealCard( count ){
        return this.cards.splice(-1*count);
    }
    randomize(){
        var tempArray = [];
        while(this.cards.length){
            var randomIndex = Math.floor( Math.random() * this.cards.length);
            var card = this.cards[randomIndex];
            tempArray.push(card);
            this.cards.splice(randomIndex, 1);
        }
        this.cards = tempArray;
    }
}