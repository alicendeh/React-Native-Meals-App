import deviceStorage from '../../storage/storage';
let p;

export default (state, action) => {
  const {type, payload} = action;

  switch (type) {
    default:
      return state;
    case 'GET_ALL_HYMNS':
      deviceStorage.storeInfoObj('AllHymns', action.payload);
      console.log('1');
      return {
        ...state,
        ALL_HYMNS: payload,
      };

    case 'ADD_BOOKMARK':
      deviceStorage.storeInfoObj(
        'BookmarkedList',
        state.ALL_BOOKMARKS.some(elem => elem.HymneNo === payload.HymneNo)
          ? [...state.ALL_BOOKMARKS]
          : [payload, ...state.ALL_BOOKMARKS],
      );

      return {
        ...state,
        alreadyBookmarked: state.ALL_BOOKMARKS.some(
          elem => elem.HymneNo === payload.HymneNo,
        )
          ? true
          : false,
      };

    case 'REMOVE_BOOKMARK':
      let p = state.ALL_BOOKMARKS.filter(elem => elem._id !== payload._id);
      deviceStorage.storeInfoObj('BookmarkedList', p);

      return {
        ...state,
      };

    case 'REMOVE_TOAST':
      return {
        ...state,
        alreadyBookmarked: false,
      };

    case 'GET_ALL_MASSDATA':
      deviceStorage.storeInfoObj('AllMassData', action.payload);
      console.log('2');

      return {
        ...state,
        MASS_DATA: payload,
      };

    case 'GET_ALL_PRAYERS':
      console.log('3');

      deviceStorage.storeInfoObj('AllPrayers', action.payload);
      return {
        ...state,
        PRAYER_DATA: payload,
      };

    case 'GET_ALL_SEASONS':
      console.log('4');

      deviceStorage.storeInfoObj('AllSeasons', action.payload);
      return {
        ...state,
        SEASON_DATA: payload,
      };
  }
};
