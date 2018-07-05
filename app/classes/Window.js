import G from './../globals.js';
import RES from './../resources.js';

import {isContained} from './../functions/isContained.js';

export class Window {
    constructor(canvas){
        this.canvas = canvas;
        this.display = canvas.getContext('2d');
        this.w = canvas.getAttribute('width');
        this.h = canvas.getAttribute('height');
        this.cx = canvas.getAttribute('width')/2;
        this.cy = canvas.getAttribute('height')/2;
        this.mx = null;
        this.my = null;
    }
    keyPush(evt){
        let game = G.game;
        switch(game.isStarted){
            case true:
            break;
            case false:
                game.guis[game.activeGui].elements.inputs.forEach((item,index) => {
                    if(item.isFocused == true){
                        if(evt.keyCode != 8){
                            if(item.text.length < 5){
                                let letter = String.fromCharCode(evt.keyCode);
                                item.text = item.text + letter;
                            }
                        } else {
                            item.text = item.text.slice(0,-1);
                        }
                    }
                });
            break;
            default:
            break;
        }
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
                game.guis[game.activeGui].elements.inputs.forEach((item,index) => {
                    if(isContained(this.mx, this.my, item)){
                        item.isFocused = true;
                        item.cursor.isAnimated = true;
                    } else if(!isContained(this.mx, this.my, item)){
                        item.isFocused = false;
                        item.cursor.isAnimated = false;
                    }
                });
                game.guis[game.activeGui].elements.holders.forEach((item,index) => {
                    if(item.characters){
                        item.characters.forEach((obj,index) => {
                            if(isContained(this.mx, this.my, obj)){
                                item.characters.forEach((item,index) => {
                                    item.isActive = false;
                                });
                                obj.isActive = true;
                            }
                        });
                    }
                });
            break;
            default:
                console.log('Bad game isStarted status');
            break;
        }   
    }
}