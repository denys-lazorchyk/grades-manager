import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GradesCollection } from 'src/app/grades/grades.services';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'],
})
export class GradeComponent implements OnInit {
  @Input() grade: {
    id: number;
    name: string;
    from: number;
    to: number;
    description: string;
  };
  @Output() onDeleted = new EventEmitter<{ id: number }>();

  constructor(private gradesCollection: GradesCollection) {}

  ngOnInit(): void {}

  deleteGrade(event: Event) {
    event.stopPropagation();
    this.gradesCollection.removeGrade(this.grade.id);
    this.onDeleted.emit({ id: -1 });
  }
}
