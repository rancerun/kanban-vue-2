<template>
  <div class="column">
    <div class="header">
      <img class="logo" src="@/assets/idea.png">
      <h1 class="column-title">
        {{ title }}
      </h1>
      <div class="add-button">
        <button
          class="plus"
          @click="addNewBubble"
        >
          <img class="plus" src="@/assets/plus.png">
        </button>
      </div>
    </div>
    <draggable
      class="drag-div"
      ghost-class="ghost"
      animation="150"
      :list="bubblesArray"
      :group="{ name: 'people' }"
    >
      <bubble
        v-for="(bubble, index) in bubblesArray"
        :key="index"
        :data="bubble"
        @delete="bubblesArray.splice(index, 1)"
      />
    </draggable>
    <div class="bubble-count-container">
      <h1 class="bubble-count">
        {{ bubblesArray.length }}
      </h1>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import Bubble from '@/components/Bubble.vue';

export default {
  name: 'Column',
  components: {
    Bubble,
    Draggable
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    addNewBubble() {
      const imgId = Math.floor(Math.random() * 10);
      this.bubblesArray.push({
        // eslint-disable-next-line
        imgSrc: require(`@/assets/list-icons/${imgId}.png`),
        text: '',
        editing: true
      });
    }
  },
  computed: {
    bubblesArray() {
      return this.$store.getters.getColBubArrayByTitle(this.title);
    }
  }
};
</script>

<style scoped>
.column{
  display: flex;
  flex-direction: column;
  background-color: #F5F6FD;
  border-radius: 16px;
  min-height: 88vh;
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

.drag-div {
  height: 100%;
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

.add-button {
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

.ghost {
  opacity: 0.5;
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
