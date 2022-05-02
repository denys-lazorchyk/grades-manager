import { Component, Input, OnInit } from '@angular/core';
import { GradesCollection } from '../main/grades.services';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
})
export class GradesComponent implements OnInit {
  grades: {
    id: number;
    name: string;
    from: number;
    to: number;
    description: string;
  }[] = [];

  editableGrade: any;

  constructor(private gradesService: GradesCollection) {}

  ngOnInit(): void {
    this.grades = this.gradesService.grades;
    this.editableGrade = this.gradesService.getGrade(1);
  }

  getNewEditableGrade(id: any) {
    this.editableGrade = this.gradesService.getGrade(id);
    console.log(this.editableGrade);
  }
}
