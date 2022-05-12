import React from 'react';
import { useState } from 'react';
import '../Components/quiz.css';

const Quiz = () => {

    const QuestionBase = [
        {
            Question: "1+2 = ?",
            Answers: [
                {Answ: "2", isCorrect: false},
                {Answ: "3", isCorrect: true},
                {Answ: "4", isCorrect: false}
            ]
        },
        {
            Question: "8+2 = ?",
            Answers: [
                {Answ: "2", isCorrect: false},
                {Answ: "10", isCorrect: true},
                {Answ: "4", isCorrect: false}
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerResponse = (isCorrect) => {

        if (isCorrect) {
            setScore(score+1)
        }
        const nextQu = currentQuestion + 1;
        if (nextQu < QuestionBase.length) {
            setCurrentQuestion(nextQu)
        } else {
            setEndQuiz(true)
        }
    }

    const resetQuiz = () => {
        setEndQuiz(false)
        setScore(0)
        setCurrentQuestion(0)
    }

    return (
        <div className="content">
            {endQuiz ? (<div className="scores">You have scored {score} out of {QuestionBase.length}
            <div className="button" onClick={() => resetQuiz()}>reset</div> </div>)
                : (<div className="ans">
                    <div className="questSect">
                        <span className="sect" >{currentQuestion+1}/{QuestionBase.length}</span>
                   
                    
                    <div>
                            {QuestionBase[currentQuestion].Question}
                    </div>
                    </div>
                    <div>
                        {QuestionBase[currentQuestion].Answers.map((ans, idx) => <div className="choice" key={idx} onClick={() => handleAnswerResponse(ans.isCorrect)}>{ans.Answ}</div>)}
                        </div>
                        
                </div>)
            }</div>
    )
}

export default Quiz;

