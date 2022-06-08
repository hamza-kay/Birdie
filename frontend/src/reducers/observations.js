const observations = (observations = [], action) => {
  switch (action.type) {
    case 'FETCH_OBSERVATIONS':
      return action.payload;
    default:
      return observations;
  }
};

export default observations;
