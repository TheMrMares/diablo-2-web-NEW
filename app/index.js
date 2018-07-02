//GLBOALS
import G from './globals.js';
import RES from './resources.js';
//IMPORTS
import 'styles/index.scss';

import {createImage} from './functions/createImage.js';

import {Game} from './classes/Game.js';
import {Window} from './classes/Window.js';
import {Gui} from './classes/Gui.js';

import {Button} from './classes/gui/Button.js';
import {Background} from './classes/gui/Background.js';


//INIT
G.game = new Game(gameProcess, 60,60,false);
G.win = new Window(document.querySelector('#gameCanvas'));
let game = G.game;
let win = G.win
createGuis();

//EVENTS
window.addEventListener('mousemove', function(evt){
    win.mouseMove(evt);
});
window.addEventListener('click', function(evt){
    win.mouseClick(evt);
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

function createGuis(){
    game.guis.push(
        new Gui('main-menu', {
            backgrounds: [
                new Background(win.display,0,0,800,600, RES.menu_background, true)
            ],
            buttons: [
                new Button(win.display,null,100,100,50, RES.menu_button, 'No hej', true, function(){
                    game.activeGui = 1;
                }),
                new Button(win.display,null,200,100,50, RES.menu_button, 'No hejciaa', false)
            ],
            inputs: [],
            sprites: []
        })
    );
    game.guis.push(
        new Gui('main-menu', {
            backgrounds: [
                new Background(win.display,0,0,800,600, RES.menu_background, true)
            ],
            buttons: [
                new Button(win.display,null,100,100,50, RES.menu_button, 'Inna karta', true, function(){
                    game.activeGui = 0;
                }),
            ],
            inputs: [],
            sprites: []
        })
    );
}