import {guiElement} from './guiElement.js';

export class characterTile extends guiElement {
    constructor(drawground, x1, y1, w, h, background, icon, text, visible = true, action = null){
        super(drawground, x1, y1, w, h, visible);

        this.background = background;
        this.icon = icon;

        const {charName, charLevel, charType} = text;
        this.charName = charName;
        this.charLevel = charLevel;
        this.charType = charType;

        this.action = action;
    }
    draw(){
        let rt = [];
        if(this.background != null){
            rt.push(this.drawground.drawImage(this.background, this.x1, this.y1, this.w, this.h))
        } else {
            rt.push([
                this.drawground.fillStyle = 'red',
                this.drawground.fillRect(this.x1, this.y1, this.w, this.h)
            ]);
        }
        if(this.icon != null){
            var textMod = this.icon.width;
            rt.push(this.drawground.drawImage(this.icon, this.x1, this.y1, this.icon.width, this.icon.height))
        } else {
            var textMod = this.w*0.2;
            rt.push([
                this.drawground.fillStyle = 'green',
                this.drawground.fillRect(this.x1+10, this.y1+10, this.w*0.2, this.h-20)
            ]);
        }
        rt.push([
            this.drawground.font='10px Arial',
            this.drawground.fillStyle = 'black',
            this.drawground.textAlign = 'left',
            this.drawground.textBaseline='top',
            this.drawground.fillText(this.charName, this.x1+20+textMod, this.y1+10),
            this.drawground.fillText(this.charLevel, this.x1+20+textMod, this.y1+30),
            this.drawground.fillText(this.charType, this.x1+20+textMod, this.y1+50)
        ]);
        return rt;
    }
}