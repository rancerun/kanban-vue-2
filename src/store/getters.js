export const getColBubArrayByTitle = (state) => (title) => {
  return state.kanban.find((column) => column.title === title).bubblesArray;
};

