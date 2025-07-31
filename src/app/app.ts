interface taskInfo {
  taskName:string,
  taskProgress:string,
} 

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Progress } from './progress/progress';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, Progress],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';
  todoProgress= ['Todo', 'Inprogress', 'Completed']
  todoData:taskInfo[] = []
  validation= {taskValidation:false, selectValidation:false} ;
  taskName:string = '';
  taskProgress:string = '';

  ngOnInit(): void {
    const localData: any = localStorage.getItem('todoData')
    if(localData){
      this.todoData =  JSON.parse(localData) as taskInfo[];
    }
  }

  SubmitData(){
    this.validation = {taskValidation:false, selectValidation: false}
    if(!this.taskName){
      this.validation.taskValidation = true
    }
    if(!this.taskProgress){
      this.validation.selectValidation = true
    }
    if(this.taskName && this.taskProgress){
      this.todoData = [...this.todoData, {taskName : this.taskName, taskProgress:this.taskProgress}]
      localStorage.setItem('todoData', JSON.stringify(this.todoData))
      this.taskName = '',
      this.taskProgress = ''
    }
    console.log(this.todoData, 'this is todo data')
  }
  EditTodoData(data:any){
    console.log(data ,'This is from parent...')
    const [taskProgress, taskName] = data
    this.todoData = this.todoData.map((item) => {
      if(item.taskName === taskName){
        item.taskProgress = taskProgress.toLowerCase()
        return item
      }
      else{
        return item
      }
    })
    localStorage.setItem('todoData', JSON.stringify(this.todoData))
    // console.log(editedTodoData, 'This is edited TODO DATA')
  }
}
