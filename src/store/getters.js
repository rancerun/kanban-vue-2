// eslint-disable-next-line
export const getColBubbleArrByTitle = (state) => (title) => {
  return state.kanban.find(column => column.title === title).bubblesArray;
};
