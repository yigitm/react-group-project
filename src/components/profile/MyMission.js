import React from 'react';
import PropTypes from 'prop-types';

const MyMission = ({ mission }) => {
  const {
    name,
  } = mission;

  return (
    <tr>
      <td className="fw-bold fs-5" data-testid="myMissions">
        {name}
      </td>
    </tr>
  );
};
MyMission.defaultProps = {
  mission: {
    name: '',
  },
};
MyMission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
  }),
};
export default MyMission;
