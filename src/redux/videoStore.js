// @flow

export type State = {
  videos: Array<any>,
  tabs: Array<any>,
  err: {
    message: string,
    status: string
  }
};

export type REQUEST_FIND_VIDEO_SUCCESS_ACTION = {
  type: 'REQUEST_FIND_VIDEO_SUCCESS',
  videos: Array<any>,
  tabs: Array<any>
};

export type REQUEST_FIND_VIDEO_ERROR_ACTION = {
  type: 'REQUEST_FIND_VIDEO_ERROR',
  payload: {
    message: string,
    status: string
  }
};

export type Action =
  | REQUEST_FIND_VIDEO_SUCCESS_ACTION
  | REQUEST_FIND_VIDEO_ERROR_ACTION;

const INITIAL_STATE = {
  videos: [],
  tabs: [],
  err: {
    message: '',
    status: ''
  }
};

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'REQUEST_FIND_VIDEO_SUCCESS':
      return {
        ...state,
        videos: action.videos,
        tabs: action.tabs
      };
    case 'REQUEST_FIND_VIDEO_ERROR':
      return { ...state, err: action.payload };
    default:
      return state;
  }
};
