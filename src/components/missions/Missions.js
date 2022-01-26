import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { getMissions } from '../../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingMissions = async () => {
      await dispatch(getMissions());
    };
    loadingMissions();
  }, []);

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
