import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="fs-3 border" scope="col">Mission</th>
            <th className="fs-3 border" scope="col">Description</th>
            <th className="fs-3 border" scope="col">Status</th>
            <th className="fs-3 border" scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
