import { combineReducers } from 'redux';

import videoStore from './src/redux/videoStore';

export default combineReducers({
  videos: videoStore
});
