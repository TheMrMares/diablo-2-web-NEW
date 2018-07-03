import G from './../../globals.js';
import RES from './../../resources.js';

export class guiElement {
    constructor(drawground, x1, y1, w, h, visible = true){
        this.drawground = drawground;
        if(typeof(x1) == 'object') {
            let {m} = x1;
            x1 = (G.win.w/2 - w/2) + m;
        } else {
            x1 = x1;
        }
        if(typeof(y1) == 'object'){
            let {m} = y1;
            y1 = (G.win.h/2 - h/2) + m;
        } else {
            y1 = y1;
        }
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x1 + w;
        this.y2 = y1 + h;
        this.w = w;
        this.h = h;
    }
    refreshCoordinates() {
        this.x2 = this.x1 + this.w;
        this.y2 = this.y1 + this.h;
    }
}