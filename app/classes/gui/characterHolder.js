import {guiElement} from './guiElement.js';

export class characterHolder extends guiElement {
    constructor(drawground, x1, y1, w, h, background, characters, visible = true){
        super(drawground, x1, y1, w, h, visible);
        this.background = background;
        this.characters = characters;

        let counter = 0;
        this.characters.forEach((item,index) => {
            item.y1 = this.y1 + (item.h+5)*counter + 5;
            if(index%2 == 0){
                item.x1 = this.x1+5;
            } else {
                item.x1 = this.x1 + this.w/2 + 5;
                counter++;
            }
            item.refreshCoordinates();
        });
    }
    draw(){
        if(this.visible == true){
            let rt = [];
            if(this.background != null){
                rt.push(this.drawground.drawImage(this.background, this.x1, this.y1, this.w, this.h));
            } else {
                rt.push([
                    this.drawground.fillStyle = 'rgba(0,0,0,0.4)',
                    this.drawground.fillRect(this.x1, this.y1, this.w, this.h)
                ]);
            }
            rt.push(this.characters.map((item,index) => {
                return item.draw();
            }));
            return rt;
        }
    }
}