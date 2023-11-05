class School {
  name: string;
  student: Student[] = [];
  teacher: Teacher[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(studObj: Student) {
    this.student.push(studObj);
  }

  addTeacher(teacher: Teacher) {
    this.teacher.push(teacher);
  }
}

class Student {
  constructor(
    public name: string,
    public age: number,
    public schoolName: string
  ) {}
}

class Teacher extends Student {
  constructor(
    public name: string,
    public age: number,
    public schoolName: string,
    public email: string,
    public contact: string
  ) {
    super(name, age, schoolName);
  }
}

let school1 = new School('The City Higher Secondary School');
let school2 = new School('Al Maroof Children Academy');

let s1 = new Student('Muhammad Naeem', 25, school1.name);
let s2 = new Student('Muhammad Naeem', 25, school2.name);

let t1 = new Teacher(
  'Ghous Ahmed',
  25,
  school1.name,
  'teacher1@gmail.com',
  '124'
);
let t2 = new Teacher(
  'Syed Hamza',
  25,
  school2.name,
  'teacher2@gmail.com',
  '124'
);

///add student

school1.addStudent(s1);
school2.addStudent(s2);

//add teacher

school1.addTeacher(t1);
school2.addTeacher(t2);

console.log(school1);
console.log(school2);
