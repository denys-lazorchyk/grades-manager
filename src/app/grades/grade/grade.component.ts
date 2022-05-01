import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GradesCollection } from 'src/app/main/grades.services';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  @Input() grade: {id: number, name: string, from: number, to: number, description: string};
  @Output() onNewEditable = new EventEmitter<number>();

  constructor(private gradesCollection: GradesCollection) { }

  ngOnInit(): void {
  }

  deleteGrade() {
    this.gradesCollection.removeGrade(this.grade.id);
  }

  updateEditable(){
    this.onNewEditable.emit(this.grade.id);
    this.gradesCollection.setEditableGrade(this.grade.id);
    console.log(this.gradesCollection.editableGrade)
  }
}
