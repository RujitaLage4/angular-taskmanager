import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../../Services/taskservice.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css',
})
export class TaskViewComponent implements OnInit {
  ShowCreateList: boolean = false;
  editmode: boolean = false;
  tasks: { id: number; title: string }[] = [];
  currentTask: any | null = null;
  taskName: string = '';

  constructor(private taskservice: TaskserviceService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskservice.getTask().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  ShowList(event: any) {
    this.ShowCreateList = true;
    this.editmode = false;
  }

  OnClickEdit(task: { id: number; title: string }) {
    this.currentTask = task; // Set the task object for editing
    this.editmode = true;
    this.ShowCreateList = true;
    this.taskName = task.title; // Set the title for editing
  }

  addTask(taskName: string | null) {
    if (taskName !== null) {
      if (this.editmode && this.currentTask) {
        // Edit task
        const index = this.tasks.findIndex(
          (task) => task.id === this.currentTask?.id
        );
        if (index > -1) {
          this.tasks[index].title = taskName; // Update task title
        }
      } else {
        // Add new task
        const newId = this.tasks.length + 1; // Simply use the length of the array
        this.tasks.push({ id: newId, title: taskName });
      }
    }
    // Reset form after adding/updating
    this.ShowCreateList = false;
    this.taskName = '';
    this.currentTask = null;
    this.editmode = false;
  }

  OnDelete(id: number) {
    console.log(`Attempting to delete task with id: ${id}`);
    this.taskservice.deleteTask(id).subscribe({
      next: () => {
        console.log(`Task with id: ${id} deleted successfully.`);
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      error: (err) => {
        console.error('Error deleting task:', err);
      },
    });
  }
}
