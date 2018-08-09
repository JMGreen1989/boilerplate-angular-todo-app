import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { TaskComponent } from '../task.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  tasks$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTasks().subscribe(
       data => this.tasks$ = data.tasks
       )
  }

}
