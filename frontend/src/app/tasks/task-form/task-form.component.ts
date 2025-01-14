import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/task.model';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  @Input() task: Task = {
    title: '',
    description: '',
    completed: false,
    isActive: true,
  };

  @Output() savedForm: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private tasksService: TasksService) {}

  saveTask(): void {
    if (this.task.id) {
      this.tasksService.updateTask(this.task).subscribe({
        next: () => this.savedForm.emit(this.task),
        error: (err) => this.savedForm.emit(this.task),
      });
      return;
    }

    this.tasksService.createTask(this.task).subscribe({
      next: () => this.savedForm.emit(this.task),
      error: (err) => this.savedForm.emit(this.task),
    });
  }
}
