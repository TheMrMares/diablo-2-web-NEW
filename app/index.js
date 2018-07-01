//IMPORTS
import 'styles/index.scss';

import {createImage} from './functions/createImage.js';

import {Game} from './classes/Game.js';
import {Window} from './classes/Window.js';
import {Gui} from './classes/Gui.js';

import {Button} from './classes/gui/Button.js';
import { Background } from './classes/gui/Background.js';

//RES
const menu_background = createImage(require('./textures/gui/menu-background.png'));
const menu_button = createImage(require('./textures/gui/menu-button.png'));

//INIT
let game = new Game(gameProcess, 60,60,false);
let win = new Window(document.querySelector('#gameCanvas'));
//createGuis();

//EVENTS
window.addEventListener('mousemove', function(evt){
    win.mouseMove(evt);
});

let bttn = new Button(win.display,10,10,100,50,menu_button, 'No hej', true);
let bckg = new Background(win.display,0,0,800,600, menu_background, true);

//GAME LOOP
function gameProcess(){
    
    switch(game.isStarted){
        case true:
            
        break;
        case false:
            bckg.draw();

            bttn.draw();
            bttn.write();
        break;
        default:
            console.log('Bad game isStarted status');
        break;
    }
}

//FUNCTIONS
/*
function createGuis(){
    game.guis.push(
        new Gui('main-menu', {
            backgrounds: ,
            buttons: ,
            inputs: ,
            images: 
        });
    );
}*/