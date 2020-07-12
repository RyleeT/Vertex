const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Connect Kanban to backend" },
    "task-2": { id: "task-2", content: "Make unique and shareable boards" },
    "task-3": { id: "task-3", content: "Add function to create tasks" },
    "task-4": { id: "task-4", content: "Style Kanban" },
    "task-5": {
      id: "task-5",
      content: "Add button to load and unload sidebar component",
    },
    "task-6": {
      id: "task-6",
      content: "Make sidebar an overlay on small screens",
    },
    "task-7": {
      id: "task-7",
      content: "Style sidebar",
    },
    "task-8": {
      id: "task-8",
      content:
        "Replace logout button with clickable avatar linking to profile and logout",
    },
    "task-9": {
      id: "task-9",
      content: "Style login and register components",
    },
    "task-10": {
      id: "task-10",
      content: "Style add lead component",
    },
    "task-11": {
      id: "task-11",
      content: "Prevent login screen from flashing on refresh",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-8",
        "task-9",
        "task-10",
      ],
    },
    "column-2": {
      id: "column-2",
      title: "Selected for Development",
      taskIds: ["task-6"],
    },
    "column-3": {
      id: "column-3",
      title: "In Progress",
      taskIds: ["task-5", "task-7"],
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: ["task-11"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default initialData;
