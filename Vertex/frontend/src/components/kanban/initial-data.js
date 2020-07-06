const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Connect Kanban to backend" },
    "task-2": { id: "task-2", content: "Make Add Lead collapsible" },
    "task-3": { id: "task-3", content: "Add function to create tasks" },
    "task-4": { id: "task-4", content: "Style Kanban" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Selected for Development",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "In Progress",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default initialData;
