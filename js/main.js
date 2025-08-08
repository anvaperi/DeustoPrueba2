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
        reject("Error: Datos no válidos");
      }
      resolve(`${student.forename} ${student.surname}: ${student.getPassStatus()}`);
    }, 2000);
  });
}

async function showUserResult() {
  try {
    const result = await createStudentPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}