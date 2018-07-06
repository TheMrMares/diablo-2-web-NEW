import {guiElement} from "./guiElement";

export class Check extends guiElement {
    constructor(drawground, x1, y1, w, h, checkBackground, checkImage, text, isChecked = false,visible = true){
        super(drawground, x1, y1, w, h, visible);
        
        this.checkBackground = checkBackground;
        this.checkImage = checkImage;
        this.text = text;
        this.isChecked = isChecked;
    }
    draw(){
        if(this.visible == true){
            let rt = [];
            if(this.checkBackground != null){
                rt.push(this.drawground.drawImage(this.checkBackground, this.x1+5, this.y1, this.checkBackground.width, this.checkBackground.height));
            } else {
                rt.push([
                    this.drawground.fillStyle = 'red',
                    this.drawground.fillRect(this.x1+5, this.y1, this.checkImage.width, this.checkImage.height)
                ]);
            }
            if(this.checkImage != null && this.isChecked == true) {
                rt.push(this.drawground.drawImage(this.checkImage, this.x1+5, this.y1, this.checkImage.width, this.checkImage.height));
            } else if(this.isChecked == true){
                rt.push([
                    this.drawground.fillStyle = 'green',
                    this.drawground.fillRect(this.x1+5, this.y1, this.checkImage.width, this.checkImage.height)
                ]);
            }
            rt.push([
                this.drawground.fillStyle = 'black',
                this.drawground.textAlign = 'left',
                this.drawground.textBaseline='middle',
                this.drawground.fillText(this.text, this.x1+25, this.y1+this.h/2)
            ]);
            return rt;
        }
    }
}