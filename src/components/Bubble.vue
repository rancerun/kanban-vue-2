<template>
  <div v-if=me class="bubble">
    <h1>{{ title }}</h1>
    <button
      @click="switchLeft"
      class="button left"
    >
      &lt;
    </button>
    <button
      @click="switchRight"
      class="button right"
    >
      &gt;
    </button>
    <form @submit.prevent="editSaved">
      <input
        v-model="editText"
        :type="this.showInput ? 'text' : 'hidden'"
        :placeholder = "this.title"
      >
      <button
        @click="editMe"
        class="button"
      >
        Edit
      </button>
    </form>
    <button
      @click="deleteMe"
      class="button"
    >
      Delete
    </button>
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
      editMe () {
        this.showInput = this.showInput ? false : true
      },
      editSaved () {
        if (!this.showInput) {
          this.title = this.editText
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
    align-content: justify-content;
    color: white;
    border-style: solid;
    margin: 16px;
  }

  .button {
    width: 64px;
    margin: 8px;
  }

  .left {
    /*align-self: flex-start;*/
  }

  .right {
    /*align-self: flex-end;*/
  }
</style>