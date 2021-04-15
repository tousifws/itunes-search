/*
 *
 * HomeContainer reducer
 *
 */
import produce from 'immer';
import { createActions } from 'reduxsauce';
import get from 'lodash/get';

export const { Types: musicContainerTypes, Creators: musicContainerCreators } = createActions({
  requestGetItunesMusics: ['searchTerm'],
  successGetItunesMusics: ['data'],
  failureGetItunesMusics: ['error'],
  clearItunesMusics: []
});

export const initialState = {
  searchTerm: null,
  musicsData: {},
  musicsError: null
};

/* eslint-disable default-case, no-param-reassign */
export const musicContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case musicContainerTypes.REQUEST_GET_ITUNES_MUSICS:
        draft.searchTerm = action.searchTerm;
        break;

      case musicContainerTypes.CLEAR_ITUNES_MUSICS:
        return initialState;

      case musicContainerTypes.SUCCESS_GET_ITUNES_MUSICS:
        draft.musicsData = action.data;
        break;

      case musicContainerTypes.FAILURE_GET_ITUNES_MUSICS:
        draft.musicsError = get(action.error, 'message', 'something_went_wrong');
        break;
    }
  });

export default musicContainerReducer;
