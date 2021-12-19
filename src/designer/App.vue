<template>
  <div>
    <designer-draggable class="drag-container" v-model:items="items" :options="dragOptions">
      <template #item="{ item }">
        <div>{{ item }}</div>
      </template>
    </designer-draggable>
    <hr />
    <component :is="root.render()"></component>
  </div>
</template>
<script>
import { Container, Text } from "./elements";
export default {
  data() {

    return {
      items:[],
      dragOptions: {
        sort: false,
        group: { name: "dragon-designer", pull: "clone", put: false },
      },
      root: new Container()
    }
  },
  mounted() {
    [1,2,3,4,5].map(m=>{
      this.root.children.push(new Text(`文本${m}`))
    })
    
  }
};
</script>
