//GLBOALS
import G from './globals.js';
import RES from './resources.js';
//IMPORTS
import 'styles/index.scss';

import {createImage} from './functions/createImage.js';

import {Game} from './classes/Game.js';
import {Window} from './classes/Window.js';
import {Gui} from './classes/Gui.js';
import {Sprite} from './classes/Sprite.js';

import {Button} from './classes/gui/Button.js';
import {Input} from './classes/gui/Input.js';
import {Background} from './classes/gui/Background.js';
import {characterTile} from './classes/gui/characterTile.js';
import {characterHolder} from './classes/gui/characterHolder.js';


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
window.addEventListener('keydown', function(evt){
    win.keyPush(evt);
});

//GAME LOOP
function gameProcess(){
    
    switch(game.isStarted){
        case true:
            
        break;
        case false:
            win.display.fillStyle = 'black';
            win.display.fillRect(0,0,2000,2000);
            game.guis[game.activeGui].elements.backgrounds.forEach((item,index) => {
                item.draw();
            });
            game.guis[game.activeGui].elements.buttons.forEach((item,index) => {
                item.draw();
            });
            game.guis[game.activeGui].elements.inputs.forEach((item,index) => {
                item.draw();
            });
            game.guis[game.activeGui].elements.sprites.forEach((item,index) => {
                item.draw();
            });
            game.guis[game.activeGui].elements.holders.forEach((item,index) => {
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
                new Background(win.display,0,0,null,null, RES.menu_background, true)
            ],
            buttons: [
                new Button(win.display,{m:0},{m:40},200,30, RES.menu_button, 'Singleplayer', true, function(){
                    game.activeGui = 1;
                }),
                new Button(win.display,{m:0},{m:80},200,30, RES.menu_button, 'Battlenet', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:0},{m:120},200,30, RES.menu_button, 'Gateway', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:0},{m:160},200,30, RES.menu_button, 'Other multiplayer', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:-55},{m:240},90,30, RES.menu_button, 'Other multiplayer', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:55},{m:240},90,30, RES.menu_button, 'Other multiplayer', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:0},{m:280},200,30, RES.menu_button, 'Other multiplayer', true, function(){
                    game.activeGui = 0;
                })
            ],
            inputs: [],
            sprites: [],
            holders: []
        })
    );
    game.guis.push(
        new Gui('character-choose', {
            backgrounds: [
                new Background(win.display,0,0,null,null, RES.menu_background, true)
            ],
            buttons: [
                new Button(win.display,{m:0},{m:340},150,30, RES.menu_button, 'Create new character', true, function(){
                    game.activeGui = 2;
                }),
                new Button(win.display,{m:-185},{m:340},150,30, RES.menu_button, 'Conversion impossible', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:185},{m:340},150,30, RES.menu_button, 'Delete character', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:-220},{m:380},80,30, RES.menu_button, 'Exit', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:220},{m:380},80,30, RES.menu_button, 'Ok', true, function(){
                    game.activeGui = 0;
                }),
            ],
            inputs: [],
            sprites: [],
            holders: [
                new characterHolder(win.display, {m:0},{m:50}, 520, 505, null, [
                    new characterTile(win.display, {m:140},{m:0}, 250, 120, null, null, {charName: 'Trolo', charLevel: 'Level 22 Druid', charType: 'Imossible'}, true, null),
                    new characterTile(win.display, {m:140},{m:0}, 250, 120, null, null, {charName: 'Trolo', charLevel: 'Level 22 Druid', charType: 'Imossible'}, true, null),
                    new characterTile(win.display, {m:140},{m:0}, 250, 120, null, null, {charName: 'Trolo', charLevel: 'Level 22 Druid', charType: 'Imossible'}, true, null),
                    new characterTile(win.display, {m:140},{m:0}, 250, 120, null, null, {charName: 'Trolo', charLevel: 'Level 22 Druid', charType: 'Imossible'}, true, null),
                    new characterTile(win.display, {m:140},{m:0}, 250, 120, null, null, {charName: 'Trolo', charLevel: 'Level 22 Druid', charType: 'Imossible'}, true, null),
                    new characterTile(win.display, {m:140},{m:0}, 250, 120, null, null, {charName: 'Trolo', charLevel: 'Level 22 Druid', charType: 'Imossible'}, true, null),
                    new characterTile(win.display, {m:140},{m:0}, 250, 120, null, null, {charName: 'Trolo', charLevel: 'Level 22 Druid', charType: 'Imossible'}, true, null),
                    new characterTile(win.display, {m:140},{m:0}, 250, 120, null, null, {charName: 'Trolo', charLevel: 'Level 22 Druid', charType: 'Imossible'}, true, null)
                ],true)
            ]
        })
    );
    game.guis.push(
        new Gui('character-create', {
            backgrounds: [
                new Background(win.display,0,0,null,null, RES.menu_background, true)
            ],
            buttons: [
                new Button(win.display,{m:-220},{m:380},80,30, RES.menu_button, 'Exit', true, function(){
                    game.activeGui = 0;
                }),
                new Button(win.display,{m:220},{m:380},80,30, RES.menu_button, 'Ok', true, function(){
                    game.activeGui = 0;
                }),
            ],
            inputs: [
                new Input(win.display,{m:0},{m:320},150,30, null, true)
            ],
            sprites: [],
            holders: []
        })
    );
}