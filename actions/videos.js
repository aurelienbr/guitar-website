import { videos } from "../api";

export const findVideos = () => {
  return async dispatch => {
    try {
      const { data } = await videos.find();
      dispatch({
        type: "REQUEST_FIND_VIDEO_SUCCESS",
        payload: data
      });
    } catch (err) {
      return {
        type: "REQUEST_FIND_VIDEO_ERROR",
        payload: err
      };
    }
  };
};
