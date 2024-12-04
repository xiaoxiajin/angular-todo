import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';

export interface TodoItem{
  id:number;
  task:string;
  completed:boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todolist: TodoItem[] = [];
  newTask: string ='';

  addTask():void{
    if(this.newTask.trim() !== ''){
      const newTodoItem:TodoItem = {
        id : Date.now(),
        task : this.newTask,
        completed: false
      }

      this.todolist.push(newTodoItem)
      //after clicking, the input should be cleared
      this.newTask = ''
    }
  }

  toggleComplete(index: number):void{
    // console.log(index)
    this.todolist[index].completed =!this.todolist[index].completed
    // console.log(this.todolist)
  }

  deleteTask(id: number):void{
    this.todolist = this.todolist.filter(item => item.id !== id)
    // console.log(this.todolist)
  }


}
