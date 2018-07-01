export class Gui {
    constructor(name, elements){
        this.name = name;

        const {backgrounds, buttons, inputs, images} = elements;
        this.elements = {
            backgrounds: backgrounds,
            buttos: buttons,
            inputs: inputs,
            images: images
        }
    }
}