import { TOGGLE_SIDEBAR } from "../actions/types";

const initialState = {
  visible: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
}
