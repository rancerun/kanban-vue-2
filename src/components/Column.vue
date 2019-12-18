<template>
  <div class="column">
    <div class="title-bar">
      <img class="logo" src="@/assets/idea.png">
      <h1>{{ title }}</h1>
    </div>
    <div v-if="bubblesArray">
      <Bubble
        v-for="(item, index) in bubblesArray"
        :title="item.title"
        :key="index"
        :index="index"
        @left="moveItemLeft"
        @right="moveItemRight"
        @finished="finishFunction"
        v-on:remove="bubblesArray.splice(index, 1)"
      />
    </div>
    <form v-on:submit.prevent="addNewItem">
      <label>add task: 
        <input
          v-model="newItemText"
          placeholder="Copying porn links"
        >
      </label>
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
        newItemText: ''
      }
    },
    components: {
      Bubble
    },
    methods: {
      addNewItem () {
        this.bubblesArray.push({
          title: this.newItemText
        })
        this.newItemText = ''
      },
      moveItemLeft (index) {
        if (this.title !== 'TODO') {
          this.$emit('left', this.title, index)          
        }
      },
      moveItemRight (index) {
        if (this.title !== "MISC") {
          this.$emit('right', this.title, index)
        }
      },
      finishFunction(index, title) {
        this.bubblesArray[index].title = title
      }
    },
    computed: {
      input () {
        return this.title + "new-item"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .column{
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    min-height: 80vh;
    min-width: 20%;
    background-color: #F5F6FD;
    margin: 0 16px;
  }

  .logo {
    height: 32px;
    width: 32px;
  }

  .title-bar {
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-left: 16px;
  }

  img {
    padding: 8px;
  }

  h1 {
    text-align: left;
    padding-top: 4px;
    color: #828491;
    font-size: 16px;
    font-weight: 900;    
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
