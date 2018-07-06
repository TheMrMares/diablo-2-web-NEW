export class Gui {
    constructor(name, elements){
        this.name = name;

        const {backgrounds, buttons, inputs, checks, sprites, holders} = elements;
        this.elements = {
            backgrounds: backgrounds,
            buttons: buttons,
            inputs: inputs,
            checks: checks,
            sprites: sprites,
            holders: holders
        }
    }
}