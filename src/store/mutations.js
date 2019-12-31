export const addBubble = (state, title) => {
  return state.kanban.find((column) => column.title === title).bubblesArray = [...state.kanban.find((column) => column.title === title).bubblesArray, ''];
}

// export const removeBubble(state, index) {
//   return 
// }
  // ,
  // removeBubble(state) {
  // },
  // editBubble(state) {
  // }