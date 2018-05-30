// @flow
import type {
  REQUEST_FIND_VIDEO_SUCCESS_ACTION,
  REQUEST_FIND_VIDEO_ERROR_ACTION
} from "../redux";
import type { Dispatch, ThunkAction } from "../type";
import { videos } from "../api";

export const findVideos = (): ThunkAction => {
  return async (dispatch: Dispatch) => {
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
