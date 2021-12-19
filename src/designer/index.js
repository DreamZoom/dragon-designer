
export * from "./elements"
import Draggable from "./Draggable.vue"
const VERSION = '1.0.0'
const components = {
    Draggable
}


const install = (app)=>{
    for (const key in components) {
        const component = components[key];
        app.component(component.name,component);
    }
}

export default {
    name:"designer",
    install,
    version:VERSION
}