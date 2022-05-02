import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GradesCollection } from 'src/app/main/grades.services';

@Component({
  selector: 'app-edit-grade',
  templateUrl: './edit-grade.component.html',
  styleUrls: ['./edit-grade.component.css'],
})
export class EditGradeComponent implements OnInit {
  constructor(private gradesCollection: GradesCollection) {}
  @Input() grade: any;
  @Input() addOrRemove: boolean = false;
  gradeId: number;

  editable: any;
  addable: { name: string; from: number; to: number; description: string } = {
    name: 'Your grade name',
    from: 0,
    to: 0,
    description: 'Your descripton here',
  };

  ngOnInit(): void {
    this.editable = this.gradesCollection.getGradeEditable();
    this.grade = this.editable;
    this.gradeId = this.grade.id;
  }

  updateGrade() {
    this.gradesCollection.updateGrade(this.gradeId, {
      name: this.grade.name,
      from: this.grade.from,
      to: this.grade.to,
      description: this.grade.description,
    });
  }

  changeState() {
    this.addOrRemove = !this.addOrRemove;
    if (this.addOrRemove) {
      this.grade = this.addable;
    } else {
      this.grade = this.editable;
    }
  }

  addGrade() {
    // this.gradesCollection.addGrade({
    //   name: this.grade.name,
    //   to: this.grade.to,
    //   from: this.grade.from,
    //   description: this.grade.description,
    // });

    this.checkForOverlapingRanges(11, 20);
  }

  checkForOverlapingRanges(from: number, to: number) {
    let ranges = this.gradesCollection.grades.map((el) => [el.from, el.to]);
    let results = ranges.map((el) => {
      return (el[0] < from && from < el[1]) || (el[0] < to && to < el[1]);
    });

    console.log(results);
  }
}
