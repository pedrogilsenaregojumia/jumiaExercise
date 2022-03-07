export const handleRemoveTask = ({ prevTasks, taskToRemove }) => {
  return prevTasks.splice(taskToRemove, 1);
};

export const handleAddTask = ({ prevTasks, taskToAdd }) => {
  return [prevTasks.push(taskToAdd)];
};
