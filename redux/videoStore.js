// @flow

export type State = {
  videos: Array<any>,
  tabs: Array<any>,
  err: any
};

export type REQUEST_FIND_VIDEO_SUCCESS_ACTION = {
  type: 'REQUEST_FIND_VIDEO_SUCCESS',
  payload: Array<any>
};

export type REQUEST_FIND_VIDEO_ERROR_ACTION = {
  type: 'REQUEST_FIND_VIDEO_ERROR',
  payload: Array<any>
};

export type Action =
  | REQUEST_FIND_VIDEO_SUCCESS_ACTION
  | REQUEST_FIND_VIDEO_ERROR_ACTION;

const INITIAL_STATE = {
  videos: [],
  tabs: [],
  err: {}
};

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'REQUEST_FIND_VIDEO_SUCCESS':
      return {
        ...state,
        videos: action.payload,
        tabs: action.payload.map(tab => ({
          _id: tab._id,
          author: tab.author,
          url: tab.url
        }))
      };
    case 'REQUEST_FIND_VIDEO_ERROR':
      return { ...state, err: action.payload };
    default:
      return state;
  }
};
