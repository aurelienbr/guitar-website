import type {
  State as videoState,
  Action as videoAction
} from './redux/videoStore';

export type State = {
  videos: videoState
};

export type Action = videoAction;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void; // eslint-disable-line no-use-before-define
export type Dispatch = (
  action: Action | Promise<Action> | ThunkAction
) => Promise<Action>;
export type Store = ReduxStore<State, Action>;
