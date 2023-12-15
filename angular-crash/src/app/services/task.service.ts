import { Injectable } from '@angular/core';
import { Task } from '../Task';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
    headers : new HttpHeaders({
      'content-Type' :'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  private httpUrl ='http://localhost:5000/tasks';

  getTasks() : Observable<Task[]>{

    return this.http.get<Task[]>(this.httpUrl);
    //const tasks = of(TASKS);
    //return tasks;
  }

  getDelete(task : Task){

    const url = this.httpUrl +"/"+task.id;
    return this.http.delete<Task>(url);
  }

  updateReminder(task : Task) : Observable<Task>{
    const url = this.httpUrl +"/"+task.id;
    return this.http.put<Task>(url, task, httpOptions);
  }

  onSave(task :Task): Observable<Task>{
    return this.http.post<Task>(this.httpUrl,task,httpOptions);
  }
}
