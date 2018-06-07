// @flow
import type { Dispatch, ThunkAction } from '../redux/type';
import { videos } from '../../api';

export const findVideos = (): ThunkAction => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await videos.find();
      const tabs = data.map(tab => ({
        _id: tab._id,
        author: tab.author,
        url: tab.url
      }));
      dispatch({
        type: 'REQUEST_FIND_VIDEO_SUCCESS',
        videos: data,
        tabs
      });
    } catch (err) {
      dispatch({
        type: 'REQUEST_FIND_VIDEO_ERROR',
        payload: { status: err.code, message: err.className }
      });
    }
  };
};
