import G from './../globals.js';
import RES from './../resources.js';

import {isContained} from './../functions/isContained.js';

export class Window {
    constructor(canvas){
        this.canvas = canvas;
        this.display = canvas.getContext('2d');
        this.w = canvas.getAttribute('width');
        this.h = canvas.getAttribute('height');
        this.mx = null;
        this.my = null;
    }
    mouseMove(evt){
        let game = G.game;
        let rect = this.canvas.getBoundingClientRect();
        this.mx = evt.clientX-rect.left;
        this.my = evt.clientY-rect.top;
        switch(game.isStarted){
            case true:
            break;
            case false:
                game.guis[game.activeGui].elements.buttons.forEach((item,index) => {
                    if(isContained(this.mx,this.my,item)){
                        item.background = RES.menu_buttonHover;
                    } else if(!isContained(this.mx,this.my,item)){
                        item.background = RES.menu_button;
                    }
                });
            break;
            default:
                console.log('Bad game isStarted status');
            break;
        }
    }
    mouseClick(evt){
        let game = G.game;

        switch(game.isStarted){
            case true:
            break;
            case false:
                game.guis[game.activeGui].elements.buttons.forEach((item,index) => {
                    if(isContained(this.mx,this.my,item) && item.action != null){
                        item.action();
                    }
                });
            break;
            default:
                console.log('Bad game isStarted status');
            break;
        }   
    }
}