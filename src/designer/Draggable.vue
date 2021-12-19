<template>
  <div class="draggable-container" ref="draggable">
    <slot name="item" v-for="item in list" :key="item.id" :item="item.item"></slot>
  </div>
</template>
<script>
import Sortable from 'sortablejs';
export default {
  name:"DesignerDraggable",
  props: {
    options: Object,
    items: Array,
  },
  emits:["update:items"],
  mounted() {
    this.init();
  },
  computed:{
      list(){
          return this.items.map((item,index)=>{
              return {
                  id: new Date().getTime()+index,
                  item:item
              }
          })
      }
  },
  methods: {
    init() {
      this.sortable = new Sortable(this.$refs.draggable, {
        ...this.options,
        animation: 0,
        onUpdate:(event) => {
            const {oldIndex,newIndex} = event;
            const list = this.list ||[];
            const element = list[oldIndex];//获取旧位置的元素
            list.splice(oldIndex,1);//删除旧位置的元素
            list.splice(newIndex,0,element);//将元素插入到新元素去
            const items = list.map(m=>m.item);
            this.$emit("update:items",items);
            event.item.remove();//不知道为什么，当拖动到最后一个元素时，会残留一个克隆的dom，在这里需要将其删除掉。
        },
        onAdd: (event) =>  {
            const {oldIndex,newIndex} = event;
            if(event.item?.__element){
                const element = JSON.parse(event.item.__element);
                const list = this.list ||[];
                list.splice(newIndex,0,element);//将元素插入到新元素去
                const items = list.map(m=>m.item);
                this.$emit("update:items",items);
                console.log("add",event);
            }
            event.item.remove();
            
        },
        onClone: (event) =>  {
            const {oldIndex} = event;
            const list = this.list ||[];
            const element = list[oldIndex];//获取旧位置的元素
            element.id+=1;
            event.item.__element = JSON.stringify(element);
        },
        onEnd:(event)=>{
          //清除操作影响
          event.item.remove();
          const list = this.list ||[];
          const items = list.map(m=>m.item);
          this.$emit("update:items",items);
        }
      });
    },
  },
};
</script>
<style scoped>
.draggable-container{
  padding: 10px;
  background-color: #eee;
}
</style>