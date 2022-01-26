const GET_DATA = 'react-group-project/rockets/GET_DATA';
const BOOK_ROCKET = 'react-group-project/rockets/BOOK_ROCKET';
const CANCEL_ROCKET = 'react-group-project/rockets/CANCEL_ROCKET';
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

export const bookRocket = (state) => ({
  type: BOOK_ROCKET,
  payload: state,
});

export const cancelRocket = (state) => ({
  type: CANCEL_ROCKET,
  payload: state,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) =>
        rocket.id == action.payload ? { ...rocket, reserved: true } : rocket,
      );
    case CANCEL_ROCKET:
      return state.map((rocket) =>
        rocket.id == action.payload ? { ...rocket, reserved: false } : rocket,
      );
    default:
      return state;
  }
};
export default rocketsReducer;
