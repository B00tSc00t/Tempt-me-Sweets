class Student {
    constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
    }
}

class Bootcamp extends Student {
    constructor(name, level, students = []) {
        super(name);
        this.level = level;
        this.students = students;
    }

    registerStudent(newStudent) {
        const studentExists = this.students.filter(student => {
            return newStudent.email === student.email;
        });

        if (studentExists.length === 0) {
            console.log(`Registering ${newStudent.name}.`);
            this.students.push(newStudent);
        } else {
            console.log("You have already registered for this class.");
        }
        return this.students;
    }
}

const rick = new Student("Rick", "jstbereal2@yahoo.com", "React");
const bootcamp = new Bootcamp("React", "Beginner");
bootcamp.registerStudent(rick);
bootcamp.registerStudent(rick);
const party = new Student("Football", "wishyoucould.com", "React");
bootcamp.registerStudent(party);
console.log(bootcamp.students);


