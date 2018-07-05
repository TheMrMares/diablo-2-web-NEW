export class Sprite {
    constructor(drawground, sprite, x1, y1, fw, fh, speed, visible = true){
        this.drawground = drawground;
        this.x1 = x1;
        this.y1 = y1;

        this.sprite = sprite;
        this.sw = sprite.width;
        this.sh = sprite.height;
        this.fw = fw;
        this.fh = fh;

        this.col = 0;
        this.row = 0;
        this.maxcol = Math.floor(sprite.width/fw);
        this.maxrow = Math.floor(sprite.height/fh);

        this.speed = 1/speed;
        this.rowstamp = 0;
        this.isAnimated = false;
        this.visible = visible;
    }
    draw(){
        if(this.isAnimated == true){
            this.rowstamp += this.speed;
            if(this.rowstamp >= 1){
                this.col++;
                this.rowstamp = 0;
            }
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
            rt.push(this.drawground.drawImage(this.sprite, this.fw*this.col, this.fh*this.row, this.fw, this.fh, this.x1, this.y1, this.fw, this.fh));
            return rt;
        } 
    }
}