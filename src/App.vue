<template>
  <div id="app">
    <hr class="vert-line">
    <div>
      <div class="header-text">
        <span class="title-bar">
          <div class="name-text">Lance</div>
          <input
            placeholder="Search"
            @blur="setToEmpty"
          >
        </span>
        <div class="sub-text">Programmer</div>
      </div>
      <hr class="hori-line">
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
}

.vert-line {
  size: all;
  width: 1;
  margin-left: 32px;
}

.hori-line {
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;

}

.header-text {
  margin-top: 32px;
  margin-left: 64px;
}

.title-bar {
  display: flex;
  flex-direction: row;
}


.name-text {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 8px;
}

.sub-text {
  color: #828491;
  font-size: 16px;
}

.columns {
  display: flex;
  flex-direction: row;
  text-align: center;
  color: #2c3e50;
  margin-left: 48px;
  margin-right: 32px;
}

hr {
  opacity: .2;
}

input {
  height: 28px;
  width: 200px;
  font-size: 16px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  border-color: #F0F2F5;
  border-radius: 48px;
  border-style: solid;
  border-width: 1px;
  margin-left: auto;
  margin-right: 48px;
  padding: 10px;
  outline: none;
}

input:focus {
  outline: none;
}

</style>
