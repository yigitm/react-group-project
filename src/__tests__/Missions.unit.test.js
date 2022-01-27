import missionsReducer, {
  getData,
  joinMissions,
  leaveMissions,
} from '../redux/missions/missions';

describe('Testing mission actions:', () => {
  test('Action: getData() - Fetches data from SpaceX API V3', () => {
    const mission = {
      mission_id: 1,
      name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      reserved: false,
    };
    const missionsArr = getData(mission);
    expect(missionsArr.payload).toBe(mission);
  });

  
  test('Action: joinMissions() - Set to true reserved of a determined mission.', () => {
    const mission = {
      mission_id: '9D1B7E0',
      name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      reserved: false,
    }
    const missionsArr = [];
    missionsArr.push(mission);
    const joined = missionsReducer(missionsArr, joinMissions(mission.mission_id));
    expect(joined[0].reserved).toBe(true);

  });

  test('Action: leaveMissions() - Set to false reserved of a determined mission.', () => {
    const mission = {
      mission_id: '9D1B7E0',
      name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      reserved: true,
    }
    const missionsArr = [];
    missionsArr.push(mission);
    const joined = missionsReducer(missionsArr, leaveMissions(mission.mission_id));
    expect(joined[0].reserved).toBe(false);

  });

});
