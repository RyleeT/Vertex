import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_TASKS,
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

// Add task
export const addTask = (task) => (dispatch, getState) => {
  // Get tasks and first column from database
  const reqOne = axios.get("/api/tasks/", tokenConfig(getState));
  const reqTwo = axios.get("/api/columns/1/", tokenConfig(getState));

  axios.all([reqOne, reqTwo]).then(
    axios.spread((...responses) => {
      const getResOne = responses[0].data;
      const getResTwo = responses[1].data;

      // Calculate new taskId and add to taskIds in column
      const recentTask =
        getResOne[Object.keys(getResOne)[Object.keys(getResOne).length - 1]]
          .id + 1;
      getResTwo.taskIds.push(recentTask.toString());

      // Send new task and updated column to database
      const postReqOne = axios.post("/api/tasks/", task, tokenConfig(getState));
      const postReqTwo = axios.put(
        `/api/columns/1/`,
        getResTwo,
        tokenConfig(getState)
      );

      axios.all([postReqOne, postReqTwo]).then(
        axios.spread((...responses) => {
          const postResOne = responses[0].data;
          const postResTwo = responses[1].data;

          // Send new task and updated column to reducer
          dispatch(createMessage({ addTask: "Task Added" }));
          dispatch({
            type: ADD_TASK,
            payload: { postResOne, postResTwo },
          });
        })
      );
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
