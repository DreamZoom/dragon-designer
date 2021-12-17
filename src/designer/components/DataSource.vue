<template>
  <Draggable
    class="drag-container"
    v-model:items="items"
    :options="dragOptions"
  >
    <template #item="{ item }">
      <div>{{ item }}</div>
    </template>
  </Draggable>
</template>
<script>
import Draggable from "../Draggable.vue";
export default {
  components: {
    Draggable,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      dragOptions: {
        sort: false,
        group: { name: "dragon-designer", pull: "clone", put: false },
      },
    };
  },
};
</script>

<style scoped>
.drag-container {
  background: #eee;
}
</style>
