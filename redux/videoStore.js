const INITIAL_STATE = {
  videos: [],
  err: {}
};

// create a simple reducer
const videoStore = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REQUEST_FIND_VIDEO_SUCCESS":
      return { ...state, videos: action.payload };
    case "REQUEST_FIND_VIDEO_ERROR":
      return { ...state, err: action.payload };
    default:
      return state;
  }
};

export default videoStore;
