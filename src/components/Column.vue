<template>
  <div class="column">
    <div class="header">
      <img class="logo" src="@/assets/idea.png">
      <h1
        class="column-title"
      >{{ title }}</h1>
      <div id="add-button">
        <button 
          class="plus"
          @click="addNewBubble"
        >
        <img 
          class="plus"
          src="@/assets/plus.png">
        </button>
      </div>
    </div>
    <div class="bubble-container" v-if="bubblesArray.length > 0">
      <Bubble
        v-for="(bubble, index) in bubblesArray"
        :key="JSON.stringify(bubble)"
        :index="index"
        :text="bubble.text"
        @left="sendLeftCol"
        @right="sendRightCol"
        @finished="finishFunction"
        @delete="bubblesArray.splice(index, 1)"
      />
    </div>
    <div
      class="bubble-count-container"
    >
      <h1
        class="bubble-count"
      >{{ this.bubblesArray.length }}</h1>
    </div>
  </div>
</template>


<script>
  import Bubble from '@/components/Bubble.vue'

  export default {
    name: 'Column',
    props: {
      title: String,
      index: Number,
      bubblesArray: Array
    },
    components: {
      Bubble
    },
    methods: {
      addNewBubble (event, text = "") {
        this.bubblesArray.unshift({ text });
      },
      sendLeftCol (bubbleIndex) {
        if (this.index > 0) {
          this.$emit('left', this.index, bubbleIndex);
        }
      },
      sendRightCol (bubbleIndex) {
        if (this.index < 3) {
          this.$emit('right', this.index, bubbleIndex);
        }
      },
      finishFunction(index, newText) {
        this.bubblesArray[index].text = newText;
      }
    }
  }
</script>


<style scoped>
  .column{
    display: flex;
    flex-direction: column;
    background-color: #F5F6FD;
    border-radius: 16px;
    min-height: 85vh;
    width: 25vw;
    margin: 0 16px;
  }

  .header {
    display: flex;
    flex-direction: row;
  }

  .logo {
    height: 32px;
    width: 32px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 16px;
    margin-right: 0px;
  }

  .column-title {
    text-align: left;
    margin-top: 28px;
    margin-left: 4px;
  }

  .plus {
    height: 24px;
    width: 24px;
  }

  #add-button {
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: 16px;
  }

  .bubble-count-container {
    margin-top: auto;
    margin-bottom: 12px;
    margin-right: 20px;
  }

  .bubble-count {
    text-align: right;
  }

  h1 {
    color: #828491;
    font-size: 16px;
    font-weight: 900;    
  }

  img {
    padding: 4px;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
</style>
