const GET_DATA = 'react-group-project/rockets/GET_DATA';
const baseURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const getData = async (state) => {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log(data);
  state({
    type: GET_DATA,
    payload: data,
  });
};

const rocketsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};
export default rocketsReducers;
