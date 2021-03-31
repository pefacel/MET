import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/shared/models/department';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  departments: Department[] = [];

  constructor(private departmentsService:DepartmentsService,    private router:Router
    ) { 
    this.departments = this.departmentsService.getDepartments();
  }

  goLink(link: string) {
  
    
    this.router.navigate(['/collections/collection/' + link]);
    
    }
}
