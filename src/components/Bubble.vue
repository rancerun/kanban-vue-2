<template>
  <div class="bubble">
    <img src="@/assets/list-icon.png">
    <div id="text-button-parent">
      <h1
        v-if="hideInput"
        @click="sendEdit"
      >
        {{ text }}
      </h1>
      <input
        v-else
        ref="input"
        v-model="currentText"
        @blur="sendEdit"
      >
      <div id="button-container">
        <button
          @click="sendLeftBub"
        >
          &lt;
        </button>
        <button
          @click="sendRightBub"
        >
          &gt;
        </button>
        <button
          @click="deleteMe"
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
      text: String,
      index: Number
    },
    data () {
      return {
        currentText: this.text,
        hideInput: true
      }
    },
    mounted () {
      if (this.text.length === 0) {
        this.sendEdit();
      }
    },
    methods: {
      sendLeftBub () {
        this.$emit('left', this.index);
      },
      sendRightBub () {
        this.$emit('right', this.index);
      },
      sendEdit() {
        if (this.hideInput) {
          this.hideInput = !this.hideInput;
          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        } else {
          this.$emit('finished', this.index, this.currentText);
          this.hideInput = !this.hideInput;
        }
      },
      deleteMe () {
        this.$emit('delete');
      }
    } 
  }
</script>


<style scoped>
  .bubble {
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    background-color: white;
    margin: 8px;
    padding: 16px;
    color: black;
  }

  #button-container {
    display: flex;
    flex-direction: row;
  }

  #text-button-parent {
    margin-left: 8px;
  }

  h1 {
    text-align: left;
    font-size: 16px;
    margin-left: 4px;
  }

  input {
    height: 24px;
    margin-top: 4px;
    padding: 0;
    border: 0;
  }

  button {
    color: black;
    width: 48px;
    margin: 4px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 50px;
  }
</style>
