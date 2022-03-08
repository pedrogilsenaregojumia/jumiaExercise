export const handleRemoveTask = ({ prevTasks, taskToRemove }) => {
  return (prevTasks = prevTasks.filter((e) => e !== taskToRemove));
};

export const handleAddTask = ({ prevTasks, taskToAdd }) => {
  prevTasks.push(taskToAdd);
  return prevTasks;
};
