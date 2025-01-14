import tasksController from "../controllers/tasks.controller.js";

export default (app) => {
  app.get("/tasks", tasksController.getAllTasks);
  app.post("/tasks", tasksController.createTask);
  app.put("/tasks/:id", tasksController.updateTask);
  app.delete("/tasks/:id", tasksController.deleteTask);
};
