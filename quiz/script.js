"use strict"; // javascript goes here...

class Quiz {
  constructor(question, answers, currect) {
    this.question = question;
    this.answers = answers;
    this.currect = currect;
  }
  printQuestion() {
    console.log(this.question);
  }
  printAnswers() {
    this.answers.forEach(element => {
      console.log(element);
    });
  }
  getAnswer() {
    let ans = parseInt(prompt('Write the currect answer.'));

    if (ans === this.currect) console.log('RIGHT ANSWER');
    else console.log('WRONG ANSWER');
  }
}

let quiz1 = new Quiz('What is your name?', ['1. Arup', '2. Iswar', '3. Subhendu'], 3);
quiz1.printQuestion();
quiz1.printAnswers();
quiz1.getAnswer();

let quiz2 = new Quiz('Are you married?', ['1. Yes', '2. No'], 2);
quiz2.printQuestion();
quiz2.printAnswers();
quiz2.getAnswer();

let quiz3 = new Quiz('Which is your profession?', ['1. Programmer', '2. Worker', '3. Businessman'], 1);
quiz3.printQuestion();
quiz3.printAnswers();
quiz3.getAnswer();