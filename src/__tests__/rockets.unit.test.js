import rocketsReducer, {
  getData,
  bookRocket,
  cancelRocket,
} from '../redux/rockets/rockets';

describe('Unit tests for rocket reducers', () => {
  test('getData: initial state of the store should be empty', () => {
    expect(rocketsReducer([], getData([]))).toEqual([]);
  });

  test('getData: return an array of objects after data fetch', () => {
    const falcon1 = {
      id: '1',
      rocketName: 'Falcon 1',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
    };
    const falcon9 = {
      id: '2',
      rocketName: 'Falcon 9',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
    };
    const rockets = [falcon1, falcon9];
    expect(rocketsReducer(rockets, getData(rockets))).toEqual(rockets);
  });

  test('bookRocket: add `reserved: true` to given id & return an array', () => {
    const falcon1 = {
      id: '1',
      rocketName: 'Falcon 1',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
    };
    const falcon9 = {
      id: '2',
      rocketName: 'Falcon 9',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
    };
    let rockets = [falcon1, falcon9];
    let newState = rocketsReducer(rockets, bookRocket(2));
    expect(newState[1].reserved).toBe(true);
  });

  test('cancelRocket: add `reserved: false` to given id & return an array', () => {
    const falcon1 = {
      id: '1',
      rocketName: 'Falcon 1',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
    };
    const falcon9 = {
      id: '2',
      rocketName: 'Falcon 9',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
    };
    let rockets = [falcon1, falcon9];
    let newState = rocketsReducer(rockets, cancelRocket(1));
    expect(newState[0].reserved).toBe(false);
  });
});
