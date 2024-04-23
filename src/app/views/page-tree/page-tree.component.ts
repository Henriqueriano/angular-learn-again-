import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { DataApi } from 'src/app/models/model-page-tree';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-tree',
  templateUrl: './page-tree.component.html',
  styleUrls: ['./page-tree.component.css']
})
export class PageTreeComponent implements OnInit {
  baseUrl: string = "https://jsonplaceholder.typicode.com/photos";
  dataTake: DataApi[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.dataService.getData(this.baseUrl)
      .subscribe({next: (data: DataApi[]) => this.dataTake = data, error: (response) => console.log(response)}) ; 
  }

}
