
class Player{
    constructor( name ){
        this.name = name;
        this.attracts = ['P','P','R'];
        this.roomDamage = 0;
        this.life = 10;
        this.points = 0;
        this.domElements = {
            container: null,
            name: null,
            attracts: null,
            roomDamage:null,
            life:null,
            points:null,
            //room stuff
            room: []
        }
    }
/*
        <div class="player">
            <div class="nameAndAttractsContainer">
                <div class="name">Dude</div>
                <div class="attracts">CCMR</div>
            </div>
            <div class="roomDamage">4</div>
            <div class="pointsContainer">
                <div class="life">Life<span>4</span></div>
                <div class="points">Points<span>5</span></div>
            </div>
        </div>
        */
    getAttractsIcons(){
        return this.attracts.join('-');
    }
    updateDisplay(){
        this.domElements.name.text( this.name );
        this.domElements.attracts.html( this.getAttractsIcons() );
        this.domElements.roomDamage.text(this.roomDamage);
        this.domElements.life.text(this.life);
        this.domElements.points.text(this.points);
    }
    renderSummary(){
        debugger;
        var clone = $("#templates .player").clone();
        this.domElements.container = clone;
        this.domElements.name = clone.find('.name');
        this.domElements.name.text( this.name );
        this.domElements.attracts = clone.find('.attracts');
        this.domElements.roomDamage = clone.find('.roomDamage');
        this.domElements.life = clone.find('.life > span');
        this.domElements.points = clone.find('.points > span');
        this.updateDisplay();
        return this.domElements.container
    }
    renderRooms(){

    }
}