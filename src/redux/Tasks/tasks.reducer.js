import tasksTypes from "./tasks.types";
import { handleRemoveTask, handleAddTask } from "./tasks.utils";

const INITIAL_STATE = {
  tasks: [],
  count: 1,
};

const placesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tasksTypes.ADD_TASKS_START:
      return {
        ...state,
        tasks: action.payload,
      };

    case tasksTypes.SET_COUNT_START:
      return {
        ...state,
        count: action.payload,
      };

    case tasksTypes.ADD_TASK_START:
      return {
        ...state,
        tasks: handleAddTask({
          prevTasks: state.tasks,
          taskToAdd: action.payload,
        }),
      };

    case tasksTypes.REMOVE_TASK_START:
      return {
        ...state,
        tasks: handleRemoveTask({
          prevTasks: state.tasks,
          taskToRemove: action.payload,
        }),
      };

    case tasksTypes.CLEAR_TASKS:
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};

export default placesReducer;
