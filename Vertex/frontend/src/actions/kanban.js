import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_TASKS,
  GET_TASK,
  CLOSE_TASK,
  DELETE_TASK,
  ADD_TASK,
  GET_COLUMNS,
  GET_BOARDS,
  MOVE_TASK,
} from "./types";

// Get boards
export const getBoards = () => (dispatch, getState) => {
  return axios
    .get("/api/boards/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_BOARDS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Get columns
export const getColumns = () => (dispatch, getState) => {
  return axios
    .get("/api/columns/", tokenConfig(getState))
    .then((res) => {
      const columns = Object.assign(
        {},
        ...res.data.map((column) => {
          const colObj = { [column.id]: column };
          return colObj;
        })
      );
      dispatch({
        type: GET_COLUMNS,
        payload: columns,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Get tasks
export const getTasks = () => (dispatch, getState) => {
  return axios
    .get("/api/tasks/", tokenConfig(getState))
    .then((res) => {
      const tasks = Object.assign(
        {},
        ...res.data.map((task) => {
          const taskObj = { [task.id]: task };
          return taskObj;
        })
      );
      dispatch({
        type: GET_TASKS,
        payload: tasks,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Get single task
export const getTask = (id) => (dispatch, getState) => {
  return axios
    .get(`/api/tasks/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TASK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Close task
export const closeTask = () => (dispatch) => {
  dispatch({
    type: CLOSE_TASK,
  });
};

// Add board
export const addBoard = (board) => (dispatch, getState) => {
  axios
    .post("/api/boards/", board, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_BOARD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Add column
export const addColumn = (column) => (dispatch, getState) => {
  axios
    .post("/api/columns/", column, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addColumn: "Column Added" }));
      dispatch({
        type: ADD_COLUMN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Add task (TODO: PERFORM LOGIC ON BACKEND INSTEAD TO AVOID POTENTIAL ERRORS)
export const addTask = (task) => (dispatch, getState) => {
  // Post task and get columns from database
  const reqOne = axios.post("/api/tasks/", task, tokenConfig(getState));
  const reqTwo = axios.get("/api/columns/", tokenConfig(getState));

  axios.all([reqOne, reqTwo]).then(
    axios.spread((...responses) => {
      // Assign responses to consts
      const newTask = responses[0].data;
      const columns = responses[1].data;

      // Find column with lowest id
      const idArray = columns.map((a) => a.id);
      const minId = Math.min(...idArray);
      const column = columns.find((a) => a.id === minId);

      // Add new task id to column
      column.taskIds.push(newTask.id.toString());

      // Send new column to database
      axios
        .put(`/api/columns/${column.id}/`, column, tokenConfig(getState))
        .then((res) => {
          const newColumn = res.data;

          // Send new task and updated column to reducer
          dispatch(createMessage({ addTask: "Task Added" }));
          dispatch({
            type: ADD_TASK,
            payload: { newTask, newColumn },
          });
        });
    })
  );
};

// Move task
export const moveTask = (start, finish) => (dispatch, getState) => {
  // If task is dropped in the same column
  if (finish == null) {
    // Send updated column to reducer (must be updated synchronously)
    // see https://github.com/atlassian/react-beautiful-dnd/issues/873#issuecomment-435711992
    dispatch({
      type: MOVE_TASK,
      payload: { start },
    });

    // Send updated column to database
    axios
      .put(`/api/columns/${start.id}/`, start, tokenConfig(getState))
      .catch((err) => console.log(err));
  }

  // If task is dropped in different column
  else {
    // Send updated column to reducer (must be updated synchronously)
    // see https://github.com/atlassian/react-beautiful-dnd/issues/873#issuecomment-435711992
    dispatch({
      type: MOVE_TASK,
      payload: { start, finish },
    });

    // Send updated column to database
    axios
      .all([
        axios.put(`/api/columns/${start.id}/`, start, tokenConfig(getState)),
        axios.put(`/api/columns/${finish.id}/`, finish, tokenConfig(getState)),
      ])
      .catch((err) => console.log(err));
  }
};
