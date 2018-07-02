import G from './../../globals.js';
import RES from './../../resources.js';

export class guiElement {
    constructor(drawground, x1, y1, w, h, visible = true){
        this.drawground = drawground;
        if(x1 == null) {
            x1 = G.win.w/2 - w/2;
        }
        if(y1 == null){
            y1 = G.win.h/2 - h/2;
        }
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x1 + w;
        this.y2 = y1 + w;
        this.w = w;
        this.h = h;
    }
    refreshCoordinates() {
        this.x2 = this.x1 + this.w;
        this.y2 = this.y1 + this.h;
    }
}