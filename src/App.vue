<template>
  <div id="app">
    <column
      v-for="(topic, index) in kanban"
      :key="index"
      :index="index"
      :title="topic.title"
      :bubblesArray="topic.bubblesArray"
    />
  </div>
</template>


<script>
  import column from '@/components/Column.vue';

  export default {
    name: 'app',
    components: {
      column
    },
    data() {
      return {
        kanban: [
          {
            title: 'TODO',
            bubblesArray: []
          },
          {
            title: 'IN-PROGRESS',
            bubblesArray: []
          },
          {
            title: 'COMPLETED',
            bubblesArray: []
          },
          {
            title: 'MISC',
            bubblesArray: []
          }
        ] 
      }
    },
    mounted() {
      if (localStorage.getItem('kanban')) {
        this.kanban = JSON.parse(localStorage.getItem('kanban'));
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
  }
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
