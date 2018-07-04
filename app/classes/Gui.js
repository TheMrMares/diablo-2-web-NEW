export class Gui {
    constructor(name, elements){
        this.name = name;

        const {backgrounds, buttons, inputs, sprites, holders} = elements;
        this.elements = {
            backgrounds: backgrounds,
            buttons: buttons,
            inputs: inputs,
            sprites: sprites,
            holders: holders
        }
    }
}