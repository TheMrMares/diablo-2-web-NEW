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
createGuis(game);

//EVENTS
window.addEventListener('mousemove', function(evt){
    win.mouseMove(evt,game);
});

//GAME LOOP
function gameProcess(){
    
    switch(game.isStarted){
        case true:
            
        break;
        case false:
            game.guis[game.activeGui].elements.backgrounds.forEach((item,index) => {
                item.draw();
            });
            game.guis[game.activeGui].elements.buttons.forEach((item,index) => {
                item.draw();
                item.write();
            });
            game.guis[game.activeGui].elements.inputs.forEach((item,index) => {
                item.draw();
            });
            game.guis[game.activeGui].elements.sprites.forEach((item,index) => {
                item.draw();
            });
        break;
        default:
            console.log('Bad game isStarted status');
        break;
    }
}

//FUNCTIONS

function createGuis(game){
    game.guis.push(
        new Gui('main-menu', {
            backgrounds: [
                new Background(win.display,0,0,800,600, menu_background, true)
            ],
            buttons: [
                new Button(win.display,100,100,100,50,menu_button, 'No hej', true),
                new Button(win.display,100,200,100,50,menu_button, 'No hejciaa', true)
            ],
            inputs: [],
            sprites: []
        })
    );
}