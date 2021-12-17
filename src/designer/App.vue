<template>
  <div>
    <DataSource></DataSource>
    <hr>
    <Container></Container>
  </div>
</template>
<script>
import Container from "./components/Container.vue";
import DataSource from "./components/DataSource.vue";
export default {
  components: {
    DataSource,
    Container,
  },
};
</script>
