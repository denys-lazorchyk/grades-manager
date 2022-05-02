import { max } from 'rxjs';

export class GradesCollection {
  grades = [
    {
      id: 1,
      name: 'F',
      from: 0,
      to: 10,
      description: 'You messes ud, pal!',
    },
    {
      id: 2,
      name: 'E',
      from: 31,
      to: 49,
      description: 'You could do better!',
    },
    {
      id: 3,
      name: 'D',
      from: 50,
      to: 72,
      description: 'You passed, be happy',
    },
    {
      id: 4,
      name: 'C',
      from: 73,
      to: 89,
      description: 'Fine!',
    },
    {
      id: 5,
      name: 'B',
      from: 90,
      to: 99,
      description: 'Great job',
    },
    {
      id: 6,
      name: 'A',
      from: 100,
      to: 100,
      description: 'Perfect!',
    },
  ];

  editableGrade = this.grades[0];

  removeGrade(id: number) {
    let index = this.grades.findIndex((el) => el.id === id);
    this.grades.splice(index, 1);
  }

  addGrade(gradeInfo: {
    name: string;
    to: number;
    from: number;
    description: string;
  }) {
    this.grades.push({
      id: this.getMaxId() + 1,
      name: gradeInfo.name,
      to: gradeInfo.to,
      from: gradeInfo.from,
      description: gradeInfo.description,
    });
  }

  getGrades() {
    return this.grades;
  }

  getGrade(id: number) {
    if (id > 0 && this.grades.length) {
      const grade = this.grades.find((el) => el.id == id);
      return grade;
    } else if (this.grades.length === 0) {
      return {
        id: 0,
        name: '',
        to: 0,
        from: 0,
        description: 'You have no grades',
      };
    } else {
      return this.grades[0];
    }
  }

  getGradeEditable() {
    return this.editableGrade;
  }

  updateGrade(
    id: number,
    gradeInfo: { name: string; from: number; to: number; description: string }
  ) {
    const grade = this.grades.find((s) => {
      return s.id === id;
    });

    if (grade) {
      grade.name = gradeInfo.name;
      grade.from = gradeInfo.from;
      grade.to = gradeInfo.to;
      grade.description = gradeInfo.description;
    }
  }

  getMaxId() {
    return Math.max(...this.grades.map((el) => el.id));
  }
}
