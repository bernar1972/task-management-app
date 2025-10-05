import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { Task, CreateTaskRequest, UpdateTaskRequest } from './models/task.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'Gestor de Tareas';
  tasks: Task[] = [];
  newTask: CreateTaskRequest = { title: '', description: '' };
  editingTask: UpdateTaskRequest | null = null;
  loading = false;
  error = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.loading = true;
    this.error = '';
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar las tareas. Asegúrate de que la API esté ejecutándose.';
        this.loading = false;
        console.error('Error loading tasks:', error);
      }
    });
  }

  createTask() {
    if (!this.newTask.title.trim()) {
      this.error = 'El título es obligatorio';
      return;
    }

    this.loading = true;
    this.error = '';
    this.taskService.createTask(this.newTask).subscribe({
      next: () => {
        this.newTask = { title: '', description: '' };
        this.loadTasks();
      },
      error: (error) => {
        this.error = 'Error al crear la tarea';
        this.loading = false;
        console.error('Error creating task:', error);
      }
    });
  }

  startEdit(task: Task) {
    this.editingTask = {
      id: task.id,
      title: task.title,
      description: task.description,
      isCompleted: task.isCompleted
    };
  }

  cancelEdit() {
    this.editingTask = null;
  }

  updateTask() {
    if (!this.editingTask || !this.editingTask.title.trim()) {
      this.error = 'El título es obligatorio';
      return;
    }

    this.loading = true;
    this.error = '';
    this.taskService.updateTask(this.editingTask).subscribe({
      next: () => {
        this.editingTask = null;
        this.loadTasks();
      },
      error: (error) => {
        this.error = 'Error al actualizar la tarea';
        this.loading = false;
        console.error('Error updating task:', error);
      }
    });
  }

  deleteTask(id: number) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (error) => {
        this.error = 'Error al eliminar la tarea';
        this.loading = false;
        console.error('Error deleting task:', error);
      }
    });
  }

  toggleComplete(task: Task) {
    const updateRequest: UpdateTaskRequest = {
      id: task.id,
      title: task.title,
      description: task.description,
      isCompleted: !task.isCompleted
    };

    this.taskService.updateTask(updateRequest).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (error) => {
        this.error = 'Error al actualizar el estado de la tarea';
        console.error('Error toggling task:', error);
      }
    });
  }
}
