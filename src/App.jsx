import { useState } from "react";
import { questions } from "./quizz";
console.log(questions);
const quizzQuestions = questions;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctScore, setCorrectScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function handleNextQuestion(isCorrect) {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion >= quizzQuestions.length) {
      setShowScore(true);
    } else {
      setCurrentQuestion(nextQuestion);
    }

    if (isCorrect === true) {
      setCorrectScore(correctScore + 1);
    }
  }

  return (
    <main>
      <h2>
        Questions {currentQuestion + 1} / {quizzQuestions.length}
      </h2>
      {showScore ? (
        <span>
          Correct score: {correctScore} out of {quizzQuestions.length}
        </span>
      ) : (
        <div className="container">
          <div className="answers-heading">
            <h3>{quizzQuestions[currentQuestion].questionHeader}</h3>
          </div>
          <div className="answers-wrapper">
            {quizzQuestions[currentQuestion].questionAnswers.map(
              (questionAnswer) => {
                return (
                  <button
                    key={questionAnswer.answer}
                    onClick={() => handleNextQuestion(questionAnswer.isCorrect)}
                  >
                    {questionAnswer.answer}
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
