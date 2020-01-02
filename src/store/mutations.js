// eslint-disable-next-line
const findColumn = (state, title) => {
  return state.kanban.find(column => column.title === title).bubblesArray;
};

export const addBubble = (state, title) => {
  const imgId = Math.floor(Math.random() * 10);
  const newBubble = {
    // eslint-disable-next-line
    imgSrc: require(`@/assets/list-icons/${imgId}.png`),
    text: '',
    editing: true
  };

  const bubArr = findColumn(state, title);
  bubArr.push(newBubble);
};

export const deleteBubble = (state, data) => {
  const bubArr = findColumn(state, data.title);
  bubArr.splice(data.index, 1);
};
