import tasksTypes from "./tasks.types";

export const addTasksStart = (tasksData) => ({
  type: tasksTypes.ADD_TASKS_START,
  payload: tasksData,
});

export const setCountStart = (count) => ({
  type: tasksTypes.SET_COUNT_START,
  payload: count,
});

export const addTaskStart = (tasksData) => ({
  type: tasksTypes.ADD_TASK_START,
  payload: tasksData,
});

export const removeTaskStart = (tasksData) => ({
  type: tasksTypes.REMOVE_TASK_START,
  payload: tasksData,
});

export const clearTasksStart = () => ({
  type: tasksTypes.CLEAR_TASKS,
});
