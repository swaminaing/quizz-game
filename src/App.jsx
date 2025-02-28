import { useState } from "react";
import { questions } from "./quizz";

const quizzQuestions = questions;

function App() {
  return (
    <main>
      <h2>Questions 1 / {quizzQuestions.length}</h2>
      <div className="container">
        <div className="answers-heading">
          <h3>{quizzQuestions[0].questionHeader}</h3>
        </div>
        <div className="answers-wrapper">
          {quizzQuestions[0].questionAnswers.map((questionAnswer) => {
            return <button>{questionAnswer.answer}</button>;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
