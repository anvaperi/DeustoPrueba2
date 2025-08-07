"use stric";

class Student {
  constructor(forename, surname, score) {
    this.forename = forename;
    this.surname = surname;
    this.score = score;
  }
  setScore (newScore) {
    this.score = newScore;
  }
  getPassStatus() {
    return this.score >= 5 ? "Apto" : "No Apto";
  }
}