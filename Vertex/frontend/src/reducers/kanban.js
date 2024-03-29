import {
  GET_TASKS,
  GET_TASK,
  CLOSE_TASK,
  GET_COLUMNS,
  GET_BOARDS,
  ADD_TASK,
  ADD_COLUMN,
  ADD_BOARD,
  DELETE_TASK,
  MOVE_TASK,
  LOGOUT_SUCCESS,
} from "../actions/types.js";

const initialState = {
  tasks: {},
  columns: {},
  boards: [],
  taskDetails: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case GET_TASK:
      return {
        ...state,
        taskDetails: action.payload,
      };
    case CLOSE_TASK:
      return {
        ...state,
        taskDetails: {},
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
          [action.payload.newTask.id]: action.payload.newTask,
        },
        columns: {
          ...state.columns,
          [action.payload.newColumn.id]: action.payload.newColumn,
        },
      };
    case ADD_COLUMN:
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
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
        taskDetails: {},
      };
    default:
      return state;
  }
}
