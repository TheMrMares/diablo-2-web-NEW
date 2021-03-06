import {createImage} from './functions/createImage.js';

export default {
    menu_background: createImage(require('./textures/gui/menu-background.png')),
    menu_button: createImage(require('./textures/gui/menu-button.png')),
    menu_buttonHover: createImage(require('./textures/gui/menu-button--hover.png')),
    text_cursor: createImage(require('./textures/gui/text-cursor.png')),
    check_background: createImage(require('./textures/gui/check-background.png')),
    check_checked: createImage(require('./textures/gui/check-checked.png'))
}