import { compileNgModule } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GradesCollection } from 'src/app/main/grades.services';

@Component({
  selector: 'app-edit-grade',
  templateUrl: './edit-grade.component.html',
  styleUrls: ['./edit-grade.component.css']
})
export class EditGradeComponent implements OnInit {

  constructor(private gradesCollection: GradesCollection){ }
  @Input() grade : any;
  name: string = '';
  from: number = 0;
  to: number = 0;
  description: string = '';
  gradeId: number;

  ngOnInit(): void {
    // this.editable= this.gradesCollection.editable;
    this.grade = this.gradesCollection.getGradeEditable();
    this.name =this.grade.name;
    this.from = this.grade.from;
    this.to =  this.grade.to;
    this.description = this.grade.description;
    this.gradeId = this.grade.id;
  }

  updateGrade(){
    this.gradesCollection.updateGrade(this.gradeId, {name: this.name, from: this.from, to: this.to, description: this.description});
  }
}
