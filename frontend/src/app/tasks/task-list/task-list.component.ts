import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TasksService } from '../service/tasks.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showTaskForm = false;
  taskEdit: Task = {
    title: '',
    description: '',
    completed: false,
    isActive: true,
  };

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe({
      next: (data) => (this.tasks = data),
      error: (err) => console.error(err),
    });
  }

  deleteTask(task: Task): void {
    this.tasksService.deleteTask(task).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
      error: (err) => console.error(err),
    });
  }

  updateTask(task: Task): void {
    this.taskEdit = { ...task };
    this.showTaskForm = true;
  }

  onFormSubmit(): void {
    this.showTaskForm = false;
    this.taskEdit = {
      title: '',
      description: '',
      completed: false,
      isActive: true,
    };
    this.ngOnInit();
  }

  createTask(): void {
    this.showTaskForm = true;
  }
}
