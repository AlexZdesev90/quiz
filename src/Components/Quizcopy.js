import React from 'react';
import { useState } from 'react';
// import '../Components/quiz.css';
import '../Components/quizcopy.css';


const QuizTest = () => {
    const QuestionBase = [
        {
            Question: "Have you got any children ?",
            Answers: [
                { Ans: "No", isCorrect: false },
                { Ans: "Yes, one", isCorrect: true },
                { Ans: "Yes, two", isCorrect: false}
            ]
        },
        {
            Question: "How old are you ?",
            Answers: [
                { Ans: "18", isCorrect: false },
                { Ans: "25" , isCorrect: false},
                { Ans: "32", isCorrect: true}
            ]
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < QuestionBase.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setEndQuiz(true)
        }
    }

    const reset = () => {
        setEndQuiz(false);
        setScore(0);
        setCurrentQuestion(0)
    }

    return (
        <div className="content">
            {endQuiz ? (<div className="question">You have {score} out of {QuestionBase.length}
                <div className="reset" onClick={() => reset()}>reset</div>
                
            </div>)
                : (<div>
                    <div className="question">{QuestionBase[currentQuestion].Question}
                    </div>
                    <div>{QuestionBase[currentQuestion].Answers.map((ans, idx) => 
                        <div className="answ" onClick={() => handleAnswerResponse(ans.isCorrect)} key={idx}>{ans.Ans}</div>
                    )
                    }</div>
                </div>)}


    </div>
)
}

export default QuizTest;

