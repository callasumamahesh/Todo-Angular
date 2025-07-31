import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltertaskprogressPipe } from '../pipes/filtertaskprogress-pipe';
import { FiltertaskPipe } from '../pipes/filtertask-pipe';
@Component({
  selector: 'app-progress',
  imports: [CommonModule, FiltertaskprogressPipe, FiltertaskPipe],
  templateUrl: './progress.html',
  styleUrl: './progress.css'
})
export class Progress {
  @Input() completeTodoData:any;
  @Input() progressType:any;
  @Input() progressData:any;
  @Output() sendData = new EventEmitter<string[]>();
  ChangeProgress(progressType1:string, taskName1:string){
    // console.log(progressType1, taskName1)
    this.sendData.emit([progressType1, taskName1])
  }
}
