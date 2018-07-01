import {guiElement} from './guiElement.js';

export class Background extends guiElement {
    constructor(drawground, x1, y1, w, h, background, visible = true){
        super(drawground, x1, y1, w, h, visible);
        this.background = background;
    }
    draw(){
        if(this.background != null){
            return [
                this.drawground.drawImage(this.background, this.x1, this.y1, this.w, this.h)
            ];
        } else {
            return [
                this.drawground.fillRect(this.x1, this.y1, this.w, this.h)
            ];
        }
        
    }
}