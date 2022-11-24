import React from "react";
import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../api/apiSlice";

const TasksList = () => {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={(e) =>
                updateTask({ ...task, completed: e.target.checked })
              }
            />
            <label htmlFor={task.id}>completed</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
