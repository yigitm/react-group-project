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
    if (reserved === true) {
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
        <button
          type="button"
          className={reserved
            ? 'button-status button-status-active'
            : 'button-status'}
        >
          <span>
            {reserved
              ? 'Active Member'
              : 'NOT A MEMBER'}
          </span>
        </button>
      </td>
      <td className="align-middle">
        <button
          type="button"
          className={reserved
            ? 'button-join button-join-active'
            : 'button-join'}
          onClick={statusChange}
        >
          <span>
            {reserved
              ? 'Cancel Mission'
              : 'Join Mission'}
          </span>
        </button>
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
