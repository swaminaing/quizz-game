import { useState } from "react";
import { questions } from "./quizz";
console.log(questions);
const quizzQuestions = questions;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleNextQuestion() {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion >= quizzQuestions.length) {
      setCurrentQuestion(0);
    }
  }

  return (
    <main>
      <h2>
        Questions {currentQuestion + 1} / {quizzQuestions.length}
      </h2>
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
                  onClick={handleNextQuestion}
                >
                  {questionAnswer.answer}
                </button>
              );
            }
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
