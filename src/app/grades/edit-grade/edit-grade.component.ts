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

  grades = this.gradesCollection.grades;

  editableMaxRange: { from: number; to: number };
  addableMaxRange: { from: number; to: number } = { from: 0, to: 100 };

  editable: any;
  addable: {
    name: string;
    from: number;
    to: number;
    description: string;
    maxRange: {
      from: number;
      to: number;
    };
  } = {
    name: 'Your grade name',
    from: 0,
    to: 0,
    description: 'Your descripton here',
    maxRange: {
      from: 0,
      to: 100,
    },
  };

  ngOnInit(): void {
    this.editable = this.gradesCollection.getGradeEditable();
    this.grade = this.editable;
  }

  updateGrade() {
    this.gradesCollection.updateGrade(this.grade.id, {
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
    if (this.checkForOverlapingRanges(this.grade.from, this.grade.to)) {
      console.log('I will add this one');
      this.gradesCollection.addGrade({
        name: this.grade.name,
        to: this.grade.to,
        from: this.grade.from,
        description: this.grade.description,
      });

      this.grade = {
        name: 'Your grade name',
        from: 0,
        to: 0,
        description: 'Your descripton here',
      };
    } else {
      console.log('You fool, choose ranges better');
      //display how bad user is
    }
  }

  checkForOverlapingRanges(from: number, to: number) {
    let rangeIsFine = false;
    let end = this.grades.length - 1;

    if (from > to) {
      return rangeIsFine;
    }

    for (let ind = 0; ind <= end; ind++) {
      if (from > this.grades[ind].to) {
        if (ind === end) {
          rangeIsFine = true;
          break;
        } else {
          if (to < this.grades[ind + 1].from) {
            rangeIsFine = true;
            break;
          }
        }
      } else {
        if (ind === 0 && to < this.grades[ind].from) {
          rangeIsFine = true;
          break;
        }
      }
    }

    return rangeIsFine;
  }
}
