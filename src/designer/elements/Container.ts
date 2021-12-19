import { Element, defineRender } from "./Element";
export class Container extends Element {
    children: Array<Element>;
    constructor() {
        super();
        this.children = [];
    }

    render(): Object {
        return defineRender(this, {
            template: `
                <designer-draggable class="drag-container" v-model:items="properties.children" :options="dragOptions">
                    <template #item="{item}">
                        <component :is="item.render()"></component>
                    </template>
                </designer-draggable>
            `,
            data() {
                return {
                    dragOptions: {
                        group: { name: "dragon-designer", pull: true, put: true }
                    }
                }
            }
        });
    }
}