export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = updatedInput => ({
  type: UPDATE_MARKDOWN,
  payload: updatedInput
});

export const ADD_TAB = 'ADD_TAB';
export const addTab = title => ({
  type: ADD_TAB,
  payload: title
});

