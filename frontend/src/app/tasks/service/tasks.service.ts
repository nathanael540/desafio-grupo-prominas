import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

export interface JsonMessage {
  message: string;
  error: boolean | null;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly ENDPOINT = 'http://localhost:4321';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.ENDPOINT}/tasks`);
  }

  createTask(task: Task): Observable<JsonMessage> {
    return this.http.post<JsonMessage>(`${this.ENDPOINT}/tasks`, task);
  }

  updateTask(task: Task): Observable<JsonMessage> {
    return this.http.put<JsonMessage>(
      `${this.ENDPOINT}/tasks/${task.id}`,
      task
    );
  }

  deleteTask(task: Task): Observable<JsonMessage> {
    return this.http.delete<JsonMessage>(`${this.ENDPOINT}/tasks/${task.id}`);
  }
}
