import { Element, defineRender } from "./Element";
export class Text extends Element {
    text: string;
    constructor(text?:string) {
        super();
        this.text = text||"新文本";
    }

    render(): Object {
        return defineRender(this,{
            template:"<h1>{{properties.text}}</h1>"
        })
    }
}