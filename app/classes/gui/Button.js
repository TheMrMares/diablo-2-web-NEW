import {guiElement} from './guiElement.js';

export class Button extends guiElement {
    constructor(drawground, x1, y1, w, h, background, text, visible = true, action = null){
        super(drawground, x1, y1, w, h, visible);
        this.background = background;
        this.text = text;
        this.action = action;
    }
    draw(){
        if(this.visible == true){
            let rt = [];
            if(this.background != null){
                rt.push([
                    this.drawground.drawImage(this.background, this.x1, this.y1, this.w, this.h),
                    this.drawground.fillStyle = 'black',
                    this.drawground.textAlign = 'center',
                    this.drawground.textBaseline='top',
                    this.drawground.fillText(this.text, this.x1+this.w/2, this.y1+this.h/2)
                ]);
            } else {
                rt.push([
                    this.drawground.fillStyle = 'red',
                    this.drawground.fillRect(this.x1, this.y1, this.w, this.h)
                ]);
            }
            return rt;
        }
    }
}