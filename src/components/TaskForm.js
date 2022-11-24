import React from "react";
import { useCreateTaskMutation } from "../api/apiSlice";

const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;
    createTask({
      name,
      description,
      completed,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="description" placeholder="Description" />
        <input type="checkbox" name="completed" />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
