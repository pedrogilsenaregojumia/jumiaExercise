import tasksTypes from "./tasks.types";

const INITIAL_STATE = {
  tasks: [],
};

const placesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tasksTypes.ADD_TASK_START:
      return {
        ...state,
        tasks: action.payload,
      };

    case tasksTypes.REMOVE_TASK_START:
      return {
        ...state,
        tasks: action.payload,
      };

    case tasksTypes.CLEAR_TASKS:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default placesReducer;
