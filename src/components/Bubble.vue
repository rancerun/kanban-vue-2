<template>
  <div
    class="bubble"
    tabindex="-1"
    @keyup.arrow-left="sendLeftBub"
    @keyup.arrow-right="sendRightBub"
  >
    <img src="@/assets/list-icon.png">
    <div id="text-button-parent">
      <div class="bubble-text">
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
      </div>
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
      this.$el.focus();
    },
    methods: {
      sendLeftBub () {
        if (event.srcElement.tagName !== 'INPUT') {
          this.$emit('left', this.index);
        }
      },
      sendRightBub () {
        if (event.srcElement.tagName !== 'INPUT') {
         this.$emit('right', this.index);
        }
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
    background-color: white;
    height: 100px;
    border-radius: 8px;
    margin: 8px;
    color: black;
  }

  #text-button-parent {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }

  #button-container {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    margin-left: 8px;
  }


  h1 {
    text-align: left;
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 8px;
  }

  input {
    height: 24px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 0;
    border: 0;
  }

  button {
    color: black;
    width: 48px;
  }

  img {
    height: 48px;
    width: 48px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 16px;
    margin-right: 0;
    border-radius: 50px;
  }
</style>
