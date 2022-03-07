import tasksTypes from "./tasks.types";

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
