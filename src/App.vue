<template>
  <div id="app">
    <column
      v-for="(topic, index) in kanban"
      :key="index"
      :title="topic.title"
    />
  </div>
</template>

<script>
import Column from '@/components/Column.vue';

export default {
  name: 'App',
  components: {
    Column
  },
  computed: {
    kanban() {
      return this.$store.state.kanban;
    }
  },
  watch: {
    kanban: {
      handler(newKanban) {
        localStorage.setItem('kanban', JSON.stringify(newKanban));
      },
      deep: true
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
