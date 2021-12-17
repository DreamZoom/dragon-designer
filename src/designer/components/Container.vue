<template>
    <Draggable class="drag-container" v-model:items="items" :options="dragOptions">
        <template #item="{item}">
            <div>{{item}}</div>
        </template>
    </Draggable>
    {{items}}
</template>
<script>
import Draggable from "../Draggable.vue"
export default {
    components:{
        Draggable
    },
    data(){
        return {
            items:[6,7,8,9,10],
            dragOptions:{
                group:{name: "dragon-designer", pull: true, put: true }
            }
        }
    }
}
</script>

<style scoped>
.drag-container{
    background:#eee;
}
</style>