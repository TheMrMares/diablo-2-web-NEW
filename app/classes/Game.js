export class Game {
    constructor(gameLoop, nativeFPS, actualFPS, isStarted = false){
        this.nativeFPS = nativeFPS;
        this.actualFPS = actualFPS;
        this.modifierFPS = nativeFPS/actualFPS;
        this.isStarted = isStarted;
        this.interval = window.setInterval(gameLoop, 1000/actualFPS);
        this.guis = [];
        this.activeGui = 0;
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