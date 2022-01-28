import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissions, leaveMissions } from '../../redux/missions/missions';
import './Mission.css';

const Mission = ({ mission }) => {
  const {
    name,
    description,
    reserved = false,
    id = mission.mission_id,
  } = mission;
  const dispatch = useDispatch();

  const joinMissionsButton = () => {
    dispatch(joinMissions(id));
  };

  const leaveMissionsButton = () => {
    dispatch(leaveMissions(id));
  };

  const statusChange = () => {
    if (reserved) {
      leaveMissionsButton();
    } else {
      joinMissionsButton();
    }
  };

  return (
    <tr>
      <td className="fw-bold fs-5">
        {name}
      </td>
      <td>
        {description}
      </td>
      <td className="align-middle">
        {reserved && (
          <button
            type="button"
            className="button-status button-status-active"
          >
            <span>
              Active Member
            </span>
          </button>
        )}
        {!reserved && (
          <button
            type="button"
            className="button-status"
          >
            <span>
              NOT A MEMBER
            </span>
          </button>
        )}
      </td>
      <td className="align-middle">
        {reserved && (
        <button
          data-testid="joinButton"
          type="button"
          value="Cancel Mission"
          className="button-join button-join-active"
          onClick={statusChange}
        >
          <span>
            Cancel Mission
          </span>
        </button>
        )}
        {!reserved && (
        <button
          data-testid="joinButton"
          type="button"
          value="Join Mission"
          className="button-join"
          onClick={statusChange}
        >
          <span>
            Join Mission
          </span>
        </button>
        )}
      </td>
    </tr>
  );
};
Mission.defaultProps = {
  mission: {
    id: '',
    mission_id: '',
    name: '',
    description: '',
    reserved: false,
  },
};
Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    mission_id: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};
export default Mission;
