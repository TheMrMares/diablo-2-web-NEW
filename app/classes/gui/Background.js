import {guiElement} from './guiElement.js';

export class Background extends guiElement {
    constructor(drawground, x1, y1, w, h, background, visible = true){
        if(w == null){
            w = background.width;
        }
        if(h == null){
            h = background.height;
        }
        super(drawground, x1, y1, w, h, visible);
        this.background = background;
    }
    draw(){
        let rt = [];
        if(this.background != null){
            rt.push(this.drawground.drawImage(this.background, this.x1, this.y1, this.w, this.h));
        } else {
            rt.push([
                this.drawground.fillStyle = 'red',
                this.drawground.fillRect(this.x1, this.y1, this.w, this.h)
            ]);
        }
        return rt;
    }
}