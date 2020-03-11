import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
    this.question = quizData.quiz_questions[0];
  }

  render() {
    const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;
    
    if (isQuizEnd) {
        return <QuizEnd />
    } else {
        return <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
    }
  }
}

export default Quiz;
