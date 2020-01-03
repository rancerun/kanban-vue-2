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
          @click="addBubble(title)"
        >
          <img class="plus" src="@/assets/plus.png">
        </button>
      </div>
    </div>
    <draggable
      class="drag-div"
      ghost-class="ghost"
      animation="150"
      :list="bubbleArr"
      :group="{ name: 'people' }"
    >
      <bubble
        v-for="(bubble, index) in bubbleArr"
        :key="index"
        :data="bubble"
        @delete="deleteBubble(index)"
      />
    </draggable>
    <div class="bubble-count-container">
      <h1 class="bubble-count">
        {{ bubbleArr.length }}
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
    },
    bubbleArr: {
      type: Array,
      required: true
    }
  },
  methods: {
    addBubble() {
      this.$store.commit('addBubble', this.title);
    },
    deleteBubble(bubIndex) {
      this.$store.commit('deleteBubble', {
        title: this.title,
        index: bubIndex
      });
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
  min-height: 600px;
  min-width: 336px;
  margin: 0 4px;
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
