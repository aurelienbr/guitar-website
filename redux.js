import { combineReducers } from 'redux';

import videoStore from './redux/videoStore';

export default combineReducers({
  videos: videoStore
});
