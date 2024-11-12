import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskserviceService {
  private Url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTask(): Observable<any> {
    return this.http.get(this.Url);
  }

  addTask(task: any): Observable<any> {
    return this.http.post(this.Url, task);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.Url}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/tasks/${id}`);
  }
}
