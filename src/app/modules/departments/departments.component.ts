import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/core/services/departments.service';
import { Department } from 'src/app/shared/models/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  
  departments: Department[] = [];

  constructor(private departmentsService:DepartmentsService) { 
    this.departments = this.departmentsService.getDepartments();
  }

  ngOnInit() {
  }

}
