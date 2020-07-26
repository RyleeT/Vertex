import {
  GET_TASKS,
  GET_COLUMNS,
  GET_BOARDS,
  ADD_TASK,
  ADD_COLUMN,
  DELETE_TASK,
  MOVE_TASK,
  LOGOUT_SUCCESS,
} from "../actions/types.js";

const initialState = {
  tasks: {},
  columns: {},
  boards: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case GET_COLUMNS:
      return {
        ...state,
        columns: action.payload,
      };
    case GET_BOARDS:
      return {
        ...state,
        boards: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.postResOne.id]: action.payload.postResOne,
        },
        columns: { ...state.columns, 1: action.payload.postResTwo },
      };
    case ADD_COLUMN:
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case MOVE_TASK:
      // If task is dropped in the same column
      if (action.payload.finish == null) {
        return {
          ...state,
          columns: {
            ...state.columns,
            [action.payload.start.id]: action.payload.start,
          },
        };
      }

      // If task is dropped in different column
      else {
        return {
          ...state,
          columns: {
            ...state.columns,
            [action.payload.start.id]: action.payload.start,
            [action.payload.finish.id]: action.payload.finish,
          },
        };
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        tasks: {},
        columns: {},
        boards: [],
      };
    default:
      return state;
  }
}
