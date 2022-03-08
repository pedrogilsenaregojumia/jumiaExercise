import tasksTypes from "./tasks.types";
import { handleRemoveTask, handleAddTask } from "./tasks.utils";

const INITIAL_STATE = {
  tasks: [],
};

const placesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default placesReducer;
