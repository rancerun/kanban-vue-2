<template>
  <div class="column">
    <h1>{{ title }}</h1>
    <div v-if="bubblesArray">
      <Bubble
        v-for="(item, index) in bubblesArray"
        :title="item.title"
        :key="item.id"
        :index=index
        @left="moveItemLeft"
        @right="moveItemRight"
        v-on:remove="bubblesArray.splice(index, 1)"
      />
    </div>
    <form v-on:submit.prevent="addNewItem">
      <label for="new-item">add task: </label>
      <input
        v-model="newItemText"
        id="new-item"
        placeholder="Copying porn links"
      >
      <button>submit</button>
    </form>
  </div>
</template>

<script>
  import Bubble from './Bubble.vue'

  export default {
    name: 'Column',
    props: {
      id: Number,
      title: String,
      bubblesArray: Array
    },
    data: function () {
      return {
        itemId: 0
      }
    },
    components: {
      Bubble
    },
    methods: {
      addNewItem () {
        this.bubblesArray.push({
          id: this.itemId++,
          title: this.newItemText
        })
        this.newItemText = ''
      },
      moveItemLeft (value) {
        if (this.id > 1) {
          this.$emit('left', this.id, value)          
        }
      },
      moveItemRight (value) {
        if (this.id < 4) {
          this.$emit('right', this.id, value)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .column{
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    min-width: 20%;
    background-color: #4153AF;
    margin: 0 8px;
  }

  h1 {
    color: #fff;
    font-size: 18px;
  }

  form {
    display: flex;
    flex-direction: row;
    margin: 27px;
  }

  label {
    color: #FFFFFF;
  }
</style>
