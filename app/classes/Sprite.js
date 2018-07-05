export class Sprite {
    constructor(drawground, sprite, x1, y1, fw, fh, visible = true){
        this.drawground = drawground;
        this.x1 = x1;
        this.y1 = y1;

        this.sprite = sprite;
        this.sw = image.width;
        this.sh = image.height;
        this.fw = fw;
        this.fh = fh;

        this.col = 0;
        this.row = 0;
        this.maxcol = Math.floor(image.width/fw);
        this.maxrow = Math.floor(image.height/fh);

        this.visible = visible;
    }
    draw(){
        if(isAnimated == true){
            this.col ++;
            if(this.col >= this.maxcol){
                this.col = 0;
                this.row++;
            }
            if(this.row >= this.maxrow){
                this.row = 0;
            }
        }
        if(this.visible == true){
            let rt = [];
            rt.push(this.drawground.drawImage(this.image, this.fw*this.col, this.fh*this.row, this.fw, this.fh, this.x1, this.y1, this.fw, this.fh));
            return rt;
        } 
    }
}