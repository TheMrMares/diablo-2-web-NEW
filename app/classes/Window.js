export class Window {
    constructor(canvas){
        this.canvas = canvas;
        this.display = canvas.getContext('2d');
        this.w = canvas.getAttribute('width');
        this.h = canvas.getAttribute('height');
        this.mx = null;
        this.my = null;
    }
    mouseMove(evt,game){
        let rect = this.canvas.getBoundingClientRect();
        this.mx = evt.clientX-rect.left;
        this.my = evt.clientY-rect.top;
        switch(game.isStarted){
            case true:
            break;
            case false:
            break;
            default:
                console.log('Bad game isStarted status');
            break;
        }
    }
}