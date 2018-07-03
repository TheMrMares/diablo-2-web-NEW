export class Gui {
    constructor(name, elements){
        this.name = name;

        const {backgrounds, buttons, inputs, sprites, others} = elements;
        this.elements = {
            backgrounds: backgrounds,
            buttons: buttons,
            inputs: inputs,
            sprites: sprites,
            others: others
        }
    }
}