// export const getUpdateMarkdown = state => state.documentReducer.updated;
export const getMarkdown = state => {
  const id = state.documentReducer.id;
  return state.documentReducer.markdowns[id].markdown;
}
