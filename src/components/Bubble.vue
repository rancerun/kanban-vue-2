<template>
  <div v-if="me" class="bubble">
    <img src="@/assets/list-icon.png">
    <div id="text-button-parent">
      <input
        ref="input"
        v-if="showInput"
        v-model="title"
        @keyup.enter="sendEdit"
        @blur="sendEdit"
      >
      <h1
        v-else
        @click="sendEdit"
      >
        {{ title }}
      </h1>
      <div id="button-container">
        <button
          @click="switchLeft"
          class="button"
        >
          &lt;
        </button>
        <button
          @click="switchRight"
          class="button"
        >
          &gt;
        </button>
        <button
          @click="deleteMe"
          class="button"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    names: 'Bubble',
    props: {
      title: String,
      index: Number
    },
    data: function () {
      return {
        me: true,
        showInput: false
      }
    },
    methods: {
      switchLeft () {
        this.$emit('left', this.index)          
      },
      switchRight () {
        this.$emit('right', this.index)
      },
      sendEdit() {
        if (!this.showInput) {
          this.showInput = !this.showInput
          this.$nextTick(() => {
            this.$refs.input.focus()
          })
        } else {
          this.$emit('finished', this.index, this.title)
          this.showInput = !this.showInput
        }
      },
      deleteMe () {
        this.me = false
      }
    } 
  }
</script>


<style scoped>
  .bubble {
    display: flex;
    flex-direction: row;
    /*align-content: justify-content;*/
    border-radius: 8px;
    background-color: white;
    margin: 8px;
    padding: 16px;
    font-color: black;
  }

  #button-container {
    display: flex;
    flex-direction: row;
  }

  #text-button-parent {
    margin-left: 8px;
  }

  .button {
    font-color: black;
    width: 48px;
    margin: 4px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 50px;
  }

  h1 {
    font-size: 16px;
    text-align: left;
    margin-left: 4px;
  }
</style>