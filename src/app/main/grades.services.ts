export class GradesCollection{
    grades = [{
        id:1,
        name: 'F',
        from: 0,
        to: 30,
        description: "You messes ud, pal!"
    }, {
        id:2,
        name: 'E',
        from: 31,
        to: 49,
        description: "You could do better!"
    }, {
        id:3,
        name: 'D',
        from: 50,
        to: 72,
        description: "You passed, be happy"
    },{
        id:4,
        name: 'C',
        from: 73,
        to: 89,
        description: "Fine!"
    },{
        id:5,
        name: 'B',
        from: 90,
        to: 99,
        description: "Great job"
    },{
        id:6,
        name: 'A',
        from: 100,
        to: 100,
        description: "Perfect!"
    }];

    editable: number = 1;

    editableGrade = this.getGrade(this.editable);

    removeGrade(id: number){
        this.grades = this.grades.filter(el => el.id !== id);
    }

    getGrades(){
        return this.grades;
    }

    getGrade(id: number){
       const grade = this.grades.find(el => el.id == id);
       return grade;
    }

    getGradeEditable(){
        return this.editableGrade;
    }

    updateGrade(id:number, gradeInfo: {name: string; from: number; to:number, description: string }){
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

    setEditable(id: number){
        this.editable = id;
    }

    setEditableGrade(id: number){
        this.editableGrade = this.getGrade(id);
    }
}