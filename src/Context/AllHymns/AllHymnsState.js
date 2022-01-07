import React, {useEffect, useReducer, useState} from 'react';
import {AllHymnsContext, AllHymnsReducer} from '../AllHymns';
import API_CONFIG from '../API_CONFIG';
import DeviceStorage from '../../storage/storage';

const AllHymnState = ({children}) => {
  const [storeBookmarkData, setstoreBookmarkData] = useState([]);

  const initialState = {
    ALL_HYMNS: [],
    ALL_BOOKMARKS: [],
    alreadyBookmarked: false,
    filtered: null,
    MASS_DATA: [],
    PRAYER_DATA: [],
    SEASON_DATA: [],
  };
  const [state, dispatch] = useReducer(AllHymnsReducer, initialState);

  //Get all hymns

  const getALLHymns = async () => {
    try {
      const res = await API_CONFIG.get(
        `https://camerron-hymnal-backend.herokuapp.com/api/CH/AdminAuth/getAll`,
      );
      dispatch({
        type: 'GET_ALL_HYMNS',
        payload: res.data,
      });
    } catch (error) {
      console.log('error here', error.message);
    }
  };

  //Get all mass data
  const getMassData = async () => {
    try {
      const res = await API_CONFIG.get(
        `https://camerron-hymnal-backend.herokuapp.com/api/CH/Mass/getAll/MassData`,
      );
      dispatch({
        type: 'GET_ALL_MASSDATA',
        payload: res.data,
      });
    } catch (error) {
      console.log('error here', error.message);
    }
  };

  //Get all prayer data
  const getPrayerData = async () => {
    try {
      const res = await API_CONFIG.get(
        `https://camerron-hymnal-backend.herokuapp.com/api/CH/Prayers/getAll/PrayersData`,
      );
      dispatch({
        type: 'GET_ALL_PRAYERS',
        payload: res.data,
      });
    } catch (error) {
      console.log('error here', error.message);
    }
  };

  //Get all seasons data
  const getSeasonsData = async () => {
    try {
      const res = await API_CONFIG.get(
        `https://camerron-hymnal-backend.herokuapp.com/api/CH/Seasons/getAll/SeasonsData`,
      );
      dispatch({
        type: 'GET_ALL_SEASONS',
        payload: res.data,
      });
    } catch (error) {
      console.log('error here', error.message);
    }
  };
  //bookmark item
  const addToBookMark = async item => {
    let getAllBookMarks = await DeviceStorage.loadDataObj('BookmarkedList');
    state.ALL_BOOKMARKS = [...getAllBookMarks];

    dispatch({
      type: 'ADD_BOOKMARK',
      payload: item,
    });
  };

  //unboomark an item
  const removeBookmarkedItem = async item => {
    let getAllBookMarks = await DeviceStorage.loadDataObj('BookmarkedList');
    state.ALL_BOOKMARKS = [...getAllBookMarks];

    dispatch({
      type: 'REMOVE_BOOKMARK',
      payload: item,
    });
  };
  //removing the toast
  const removeToast = () => {
    dispatch({
      type: 'REMOVE_TOAST',
    });
  };

  return (
    <AllHymnsContext.Provider
      value={{
        ALL_HYMNS: state.ALL_HYMNS,
        ALL_BOOKMARKS: state.ALL_BOOKMARKS,
        alreadyBookmarked: state.alreadyBookmarked,
        filtered: state.filtered,
        MASS_DATA: state.MASS_DATA,
        PRAYER_DATA: state.PRAYER_DATA,
        SEASON_DATA: state.SEASON_DATA,
        getMassData,
        getALLHymns,
        addToBookMark,
        removeBookmarkedItem,
        removeToast,
        getPrayerData,
        getSeasonsData,
      }}>
      {children}
    </AllHymnsContext.Provider>
  );
};

export default AllHymnState;
