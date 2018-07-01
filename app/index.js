//CSS
import 'styles/index.scss';

import './functions/createImage.js';
import { Game } from './classes/Game.js';

//INIT
let game = new Game(60,60,false);
let window = new Window(document.querySelector('#gameCanvas'));