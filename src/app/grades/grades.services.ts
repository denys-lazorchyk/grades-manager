export class GradesCollection {
  grades: {
    id: number;
    name: string;
    from: number;
    to: number;
    description: string;
  }[] = [
    {
      id: 1,
      name: 'F',
      from: 10,
      to: 15,
      description: 'You messes ud, pal!',
    },
    {
      id: 3,
      name: 'D',
      from: 50,
      to: 72,
      description: 'You passed, be happy',
    },
    {
      id: 2,
      name: 'E',
      from: 31,
      to: 49,
      description: 'You could do better!',
    },
    {
      id: 4,
      name: 'C',
      from: 73,
      to: 89,
      description: 'Fine!',
    },
    // {
    //   id: 6,
    //   name: 'A',
    //   from: 100,
    //   to: 100,
    //   description: 'Perfect!',
    // },
    {
      id: 5,
      name: 'B',
      from: 90,
      to: 99,
      description: 'Great job',
    },
  ];

  editableGrade = {
    ...this.grades[0],
    maxRange: this.getRangesForGrade(this.grades[0].id),
  };

  constructor() {
    this.sortGrades();
  }

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
    this.sortGrades();
  }

  getGrades() {
    return this.grades;
  }

  getGrade(id: number) {
    if (id > 0 && this.grades.length) {
      const grade = this.grades.find((el) => el.id == id);
      return { ...grade, maxRange: this.getRangesForGrade(id) };
    } else if (this.grades.length === 0) {
      return {
        id: 0,
        name: '',
        to: 0,
        from: 0,
        description: 'You have no grades',
      };
    } else {
      return {
        ...this.grades[0],
        maxRange: this.getRangesForGrade(this.grades[0].id),
      };
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

  sortGrades() {
    this.grades.sort((a, b) => a.to - b.to);
  }

  getRangesForGrade(id: number) {
    let temp: { from: number; to: number } = { from: 0, to: 100 };
    let grade: any = this.grades.find((el) => el.id === id);
    let position = this.grades.indexOf(grade);
    if (this.grades.length) {
      temp = {
        from: this.grades[position - 1] ? this.grades[position - 1].to + 1 : 0,
        to: this.grades[position + 1]
          ? this.grades[position + 1].from - 1
          : 100,
      };
    }
    return temp;
  }
}
