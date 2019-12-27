<template>
  <div
    class="bubble"
    tabindex="-1"
  >
    <img 
      :src="imgkey"
    >
    <div class="text-button-container">
      <div class="text-input">
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
          maxlength="40"
        >
      </div>
      <div class="button-charcount">
        <button
          @click="deleteMe"
        >
          DELETE
        </button>
        <p>{{ characterCount }}/40</p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    names: 'bubble',
    props: {
      text: String,
      index: Number,
      imgkey: String
    },
    data() {
      return {
        currentText: this.text,
        hideInput: true
      }
    },
    computed: {
      characterCount() {
        return this.currentText ? this.currentText.length : 0;
      }
    },
    mounted() {
      this.$el.focus();
    },
    methods: {
      sendEdit() {
        if (this.hideInput) {
          this.hideInput = !this.hideInput;
          this.$nextTick(() => this.$refs.input.focus());
        } else {
          this.$emit('finished', this.index, this.currentText);
          this.hideInput = !this.hideInput;
        }
      },
      deleteMe() {
        this.$emit('delete');
      }
    }
  }
</script>


<style scoped>
  .bubble {
    display: flex;
    flex-direction: row;
    color: black;
    height: 100px;
    margin: 8px;
    border-top-width: .5px;
    border-left-width: .5px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;
    background-color: white;
  }

  .bubble:focus-within {
    border-top-width: .5px;
    border-left-width: .5px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: #91939F;
    border-radius: 8px;
    box-shadow: 3px 3px 3px #91939F;
    outline: none;
  }

  .text-button-container {
    display: flex;
    flex-direction: column;
    width: 230px;
    margin-left: 8px;
    overflow-wrap: break-word;
  }

  .text-input {
    height: 54px;
  }

  .button-charcount {
    display: flex;
    flex-direction: row;
    width: 220px;
    margin-top: 16px;
  }

  h1 {
    text-align: left;
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 8px;
    height: 100%;
    overflow: hidden;
  }

  p {
    font-size: 12px;
    color: #91939F; 
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
  }

  input {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 8px;
    border: none;
    padding: 0;
  }

  input:focus {
    outline: none;
  }

  button {
    color: #91939F;
    font-size: 12px;
    font-weight: 700;
    width: 64px;
    margin-left: 8px;
    padding: 0;
    border-width: 1px;
    border-style: solid;
    border-color: #91939F;
    border-radius: 4px;
    background-color: #F5F6FD;
  }

  button:focus {
    outline: none;
  }

  button:hover {
    color: #F5F6FD;
    background-color: #A5AFBD;
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
