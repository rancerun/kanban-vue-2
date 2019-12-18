<template>
  <div id="app">
    <Column
      v-for="topic in kanban"
      :key="topic.title"
      :title="topic.title"
      :bubblesArray="topic.bubblesArray"
      @left="shiftLeft"
      @right="shiftRight"
    />
  </div>
</template>

<script>
import Column from '@/components/Column.vue'

export default {
  name: 'app',
  components: {
    Column
  },
  data: function () {
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
        },
        
      ]
    }
  },
  mounted() {
    if (localStorage.kanban) {
      this.kanban = JSON.parse(localStorage.kanban)
    }
  },
  watch: {
    kanban: {
      handler: function (newKanban) {
        localStorage.setItem('kanban', JSON.stringify(newKanban))
      },
      deep: true
    }
  },
  methods: {
    shiftLeft (columnId, itemIndex) {
      const currentColumn = this.kanban[columnId - 1]
      const item = currentColumn.bubblesArray[itemIndex]
      this.kanban[columnId - 2].bubblesArray.push(item)
      currentColumn.bubblesArray.splice(itemIndex, 1)
    },
    shiftRight (columnId, itemIndex) {
      const currentColumn = this.kanban[columnId - 1]
      const item = currentColumn.bubblesArray[itemIndex]
      this.kanban[columnId].bubblesArray.push(item)
      currentColumn.bubblesArray.splice(itemIndex, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  /*align-items: justify-content;*/
}
</style>
