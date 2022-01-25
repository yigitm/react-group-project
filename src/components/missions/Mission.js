import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  const { name, description } = mission;

  return (
    <tr>
      <td className="fw-bold fs-5">{name}</td>
      <td>{description}</td>
      <td>Status</td>
      <td>Button</td>
    </tr>
  );
};
Mission.defaultProps = {
  mission: {
    id: '',
    name: '',
    description: '',
  },
};
Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};
export default Mission;
