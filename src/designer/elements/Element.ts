import { defineComponent, h, createVNode } from "vue";


export const defineRender=(context:Object,defineRender:any)=>{
    const Element =defineComponent({
        props:{
            properties:Object
        },
        template:"<div>该元素未定义渲染函数</div>",
        ...defineRender,
    });
    return h(Element,{properties:context});
}

export class Element {
    constructor() {
        
    }

    render(): Object {

        return defineRender(this,{})
    }
}