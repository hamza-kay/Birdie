import * as api from '../api';

export const getObervations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchObservations();

    dispatch({ type: 'FETCH_OBSERVATIONS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
