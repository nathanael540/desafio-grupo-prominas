import Task from "../models/task.model.js";

export default {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find().where().exec();

      // Mapeia para evitar _id no front-end
      const taskMapped = tasks.map((task) => {
        return {
          id: task._id,
          title: task.title,
          description: task.description,
          completed: task.completed,
          isActive: task.isActive,
        };
      });

      res.json([...taskMapped]);
    } catch (error) {
      res.status(500).json({ message: error.message, error: true });
    }
  },
  createTask: async (req, res) => {
    try {
      const small = new Task(req.body);
      await small.save();

      res.json({ message: "Tarefa adicionada!", error: false });
    } catch (error) {
      res.status(500).json({ message: error.message, error: true });
    }
  },
  updateTask: async (req, res) => {
    try {
      await Task.findOneAndReplace({ _id: req.params.id }, req.body);

      res.json({ message: "Tarefa atualizada!", error: false });
    } catch (error) {
      res.status(500).json({ message: error.message, error: true });
    }
  },
  deleteTask: async (req, res) => {
    try {
      await Task.deleteOne({ _id: req.params.id });

      res.json({ message: "Tarefa deletada!", error: false });
    } catch (error) {
      res.status(500).json({ message: error.message, error: true });
    }
  },
};
