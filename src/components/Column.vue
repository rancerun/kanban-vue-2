<template>
  <div class="column">
    <div class="header">
      <img class="logo" src="@/assets/idea.png">
      <h1>{{ title }}</h1>
      <input
        type="image"
        class="plus"
        src="@/assets/plus.png"
        @click="addNewBubble"
      >
    </div>
    <div v-if="bubblesArray">
      <Bubble
        v-for="(bubble, index) in bubblesArray"
        :key="index"
        :index="index"
        :text="bubble.text"
        ref="bubbleChild"
        @left="sendLeftCol"
        @right="sendRightCol"
        @finished="finishFunction"
        @delete="bubblesArray.splice(index, 1)"
      />
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
      addNewBubble () {
        this.bubblesArray.unshift({
          text: ""
        })
        this.$nextTick(() => {
          this.$refs.bubbleChild[0].sendEdit()
          // debugger;
        })
      },
      sendLeftCol (bubbleIndex) {
        if (this.index > 0) {
          this.$emit('left', this.index, bubbleIndex)          
        }
      },
      sendRightCol (bubbleIndex) {
        if (this.index < 4) {
          this.$emit('right', this.index, bubbleIndex)
        }
      },
      finishFunction(index, text) {
        this.bubblesArray[index].text = text
      }
    }
  }
</script>


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

  .header {
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-left: 16px;
  }

  .logo {
    height: 32px;
    width: 32px;
  }

  .plus {
    height: 24px;
    width: 24px;
  }

  #newBubble {
    display: flex;
    flex-direction: row;
    margin: 0px;
  }

  h1 {
    text-align: left;
    padding-top: 4px;
    color: #828491;
    font-size: 16px;
    font-weight: 900;    
  }

  img {
    padding: 8px;
  }

  label {
    font-size: 12px;
    font-weight: 900;
  }

  input {
    height: 32px;
  }

  button {
    margin-left: auto;
    justify-content: flex-end;
  }
</style>
