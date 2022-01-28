import axios from 'axios';

const GET_MISSIONS_SUCCESS = 'react-team-project/missions/GET_MISSIONS_SUCCESS';
const GET_MISSIONS_FAILURE = 'react-team-project/missions/GET_MISSIONS_FAILURE';
const JOIN_MISSION = 'SPACE_TRAVELERS/MISSIONS/JOIN_MISSION';
const LEAVE_MISSION = 'SPACE_TRAVELERS/MISSIONS/LEAVE_MISSION';

const initialState = [];

export const getData = (state) => ({
  type: GET_MISSIONS_SUCCESS,
  payload: state,
});

export const getMissions = () => (dispatch) => axios.get('https://api.spacexdata.com/v3/missions').then(
  (missions) => {
    const missionsArr = Object.entries(missions.data);
    const newMissionsArr = [];
    for (let i = 0; i < missionsArr.length; i += 1) {
      const newMission = {
        mission_id: missionsArr[i][1].mission_id,
        name: missionsArr[i][1].mission_name,
        description: missionsArr[i][1].description,
      };
      newMissionsArr.push(newMission);
    }
    dispatch({ type: GET_MISSIONS_SUCCESS, payload: newMissionsArr });
  },
  (err) => dispatch({ type: GET_MISSIONS_FAILURE, err }),
);

export const joinMissions = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMissions = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return [
        ...action.payload,
      ];

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        const newMission = mission;
        if (mission.mission_id === action.payload) {
          newMission.reserved = false;
        }
        return newMission;
      });

    default:
      return state;
  }
};

export default missionsReducer;
