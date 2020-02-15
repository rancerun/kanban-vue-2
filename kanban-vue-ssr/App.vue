<template>
  <div id="app">
    <div>
      <div class="columns">
        <column
          v-for="(topic, index) in kanban"
          :key="index"
          :title="topic.title"
          :bubble-arr="topic.bubblesArray"
        />
      </div>
    </div>
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
  },
  methods: {
    setToEmpty() {
      event.target.value = '';
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
  margin-bottom: 16px;
  background-color: #29BE80;
}

.columns {
  display: flex;
  flex-direction: row;
  text-align: center;
  color: #2c3e50;
  margin-left: 48px;
  margin-right: 32px;
}


</style>
