export class Game {
    constructor(nativeFPS, actualFPS, isStarted = false){
        this.nativeFPS = nativeFPS;
        this.actualFPS = actualFPS;
        this.modifierFPS = nativeFPS/actualFPS;
        this.isStarted = isStarted;
    }
    refreshModifier() {
        this.modifierFPS = this.nativeFPS/this.actualFPS;
    }
    startGame(){
        this.isStarted = true;
    }
    stopGame(){
        this.isStarted = false;
    }
}