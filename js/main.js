"use stric";

class Student {
  constructor(forename, surname, score) {
    this.forename = forename;
    this.surname = surname;
    this.setScore(score);
  }
  setScore (newScore) {
    this.score = parseInt(newScore);
  }
  getPassStatus() {
    return this.score >= 5 ? "Apto" : "No Apto";
  }
}

function createStudentPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = new Student(
        document.getElementById('forename').value, 
        document.getElementById('surname').value, 
        document.getElementById('score').value
        ); 
      if (!student.forename || !student.surname || isNaN(student.score)) {
        reject("Error: Datos del formulario incompletos o incorrectos.");
      }
      resolve(`${student.forename} ${student.surname}: ${student.getPassStatus()}`);
    }, 2000);
  });
}

createStudentPromise()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });