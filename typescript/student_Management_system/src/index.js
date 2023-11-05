class School {
    constructor(name) {
        this.student = [];
        this.teacher = [];
        this.name = name;
    }
    addStudent(studObj) {
        this.student.push(studObj);
    }
    addTeacher(teacher) {
        this.teacher.push(teacher);
    }
}
class Student {
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
    constructor(name, age, schoolName, email, contact) {
        super(name, age, schoolName);
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
        this.email = email;
        this.contact = contact;
    }
}
let school1 = new School('The City Higher Secondary School');
let school2 = new School('Al Maroof Children Academy');
let s1 = new Student('Muhammad Naeem', 25, school1.name);
let s2 = new Student('Muhammad Naeem', 25, school2.name);
let t1 = new Teacher('Ghous Ahmed', 25, school1.name, 'teacher1@gmail.com', '124');
let t2 = new Teacher('Syed Hamza', 25, school2.name, 'teacher2@gmail.com', '124');
///add student
school1.addStudent(s1);
school2.addStudent(s2);
//add teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
console.log(school1);
console.log(school2);
export {};
