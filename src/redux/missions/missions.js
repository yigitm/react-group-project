import axios from 'axios';

const GET_MISSIONS_SUCCESS = 'react-team-project/missions/GET_MISSIONS_SUCCESS';
const GET_MISSIONS_FAILURE = 'react-team-project/missions/GET_MISSIONS_FAILURE';

const initialState = [];

export const getMissions = () => (dispatch) => axios.get('https://api.spacexdata.com/v3/missions').then(
  (missions) => {
    const missionsArr = Object.entries(missions.data);
    const newMissionsArr = [];
    for (let i = 0; i < missionsArr.length; i += 1) {
      const newMission = {
        mission_id: missionsArr[i][0],
        name: missionsArr[i][1].mission_name,
        description: missionsArr[i][1].description,
      };
      newMissionsArr.push(newMission);
    }
    dispatch({ type: GET_MISSIONS_SUCCESS, payload: newMissionsArr });
  },
  (err) => dispatch({ type: GET_MISSIONS_FAILURE, err }),
);

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};
