import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
        this.question = quizData.quiz_questions[0]
    }

    render() {
        return <div>
            <QuizQuestion 
                quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} 
                instruction_text={quizData.quiz_questions[this.state.quiz_position - 1].instruction_text} />
        </div>
    }
}

export default Quiz