import Task from "../../ui/task";

const fictionalTasks = [
  {
    id: 1,
    name: "Task 1",
    description: "This is a task description",
    status: "TODO",
    mood: "happy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Task 2",
    description: "This is a task description",
    status: "TODO",
    mood: "happy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Task 3",
    description: "This is a task description",
    status: "TODO",
    mood: "happy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "Task 4",
    description: "This is a task description",
    status: "TODO",
    mood: "happy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const TaskList = () => {
  return (
    <div className="space-y-2">
      {fictionalTasks.map((task) => (
        <Task key={task.id} name={task.name} />
      ))}
    </div>
  );
};

export default TaskList;
