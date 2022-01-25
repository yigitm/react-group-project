const GET_DATA = 'react-group-project/rockets/GET_DATA';
const baseURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const getData = (state) => ({
  type: GET_DATA,
  payload: state,
});

export const fetchData = async (dispatch) => {
  const response = await fetch(baseURL);
  const data = await response.json();
  const keys = Object.keys(data);
  const rockets = [];
  for (let i = 0; i < keys.length; i += 1) {
    const rocket = {
      id: data[keys[i]].id,
      rocketName: data[keys[i]].rocket_name,
      description: data[keys[i]].description,
      flickrImages: data[keys[i]].flickr_images[0],
    };
    rockets.push(rocket);
  }
  dispatch({ type: GET_DATA, payload: rockets });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};
export default rocketsReducer;
