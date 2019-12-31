<template>
  <div id="app">
    <column
      v-for="topic in kanban"
      :title="topic.title"
    />
  </div>
</template>


<script>
import column from '@/components/Column.vue';

export default {
  name: 'App',
  components: {
    column
  },
  watch: {
    kanban: {
      handler(newKanban) {
        localStorage.setItem('kanban', JSON.stringify(newKanban));
      },
      deep: true
    }
  },
  computed: {
    kanban() {
      return this.$store.state.kanban;
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
