export const Adding = () => {
  return {
    type: 'ADD',
  };
};

export const Subtract = () => {
  return {
    type: 'EDITING',
  };
};

export const Reset = () => {
  return {
    type: 'RESET',
  };
};

export const EditTitle = newTitle => {
  return {
    type: 'EDIT',
    mamtha: newTitle,
  };
};
