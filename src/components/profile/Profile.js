import React from 'react';
import { useSelector } from 'react-redux';
import MyMission from './MyMission';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);

  function getMyMissions(mission) {
    return mission.reserved === true;
  }

  const myMissions = missions.filter(getMyMissions);

  return (
    <div>
      <table className="table table-striped w-50">
        <thead>
          <tr>
            <th className="fs-3 border" scope="col">My Missions</th>
          </tr>
        </thead>
        <tbody>
          {myMissions.map((myMission) => (
            <MyMission key={myMission.mission_id} mission={myMission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
