import {guiElement} from './guiElement.js';
import {Sprite} from './../Sprite.js';
import RES from './../../resources.js';

export class Input extends guiElement {
    constructor(drawground, x1, y1, w, h, background, visible = true, action = null){
        super(drawground, x1, y1, w, h, visible);
        this.background = background;
        this.text = '';
        this.isFocused = false;
        this.cursor = new Sprite(drawground, RES.text_cursor, this.x1+3, this.y1+5, 10, 20, 10,true);
    }
    draw(){
        if(this.visible == true){
            let rt = [];
            if(this.background != null){
                rt.push([
                    this.drawground.drawImage(this.background, this.x1, this.y1, this.w, this.h),
                    this.drawground.fillStyle = 'black',
                    this.drawground.textAlign = 'center',
                    this.drawground.fillText(this.text, this.x1+this.w/2, this.y1+this.h/2)
                ]);
            } else {
                rt.push([
                    this.drawground.fillStyle = 'yellow',
                    this.drawground.fillRect(this.x1, this.y1, this.w, this.h)
                ]);
            }
            rt.push([
                this.drawground.fillStyle = 'black',
                this.drawground.textAlign = 'left',
                this.drawground.textBaseline='middle',
                this.drawground.fillText(this.text, this.x1+10, this.y1+this.h/2)
            ]);
            rt.push([
                this.cursor.draw()
            ]);
            return rt;
        }
    }
}