<template>
  <div id="app">
    <column
      v-for="(topic, index) in kanban"
      :key="index"
      :title="topic.title"
      :bubbles-array="topic.bubblesArray"
      @indexBump="indexTrack"
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
      ],
      bubbleCount: 0
    };
  },
  watch: {
    kanban: {
      handler(newKanban) {
        localStorage.setItem('kanban', JSON.stringify(newKanban));
      },
      deep: true
    }
  },
  created() {
    const kanbanData = localStorage.getItem('kanban');
    if (kanbanData) {
      this.kanban = JSON.parse(kanbanData);
    }
  },
  methods: {
    indexTrack() {
      this.bubbleCount += 1;
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
