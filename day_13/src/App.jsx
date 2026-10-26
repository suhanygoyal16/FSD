import './App.css'
import { useState } from 'react';
import questions from './questions.json';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (option) => {
    if (option === questions[currentIndex].correct_answer) {
      setScore(prevScore => prevScore + 1);
    }

    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  if (currentIndex >= questions.length) {
    return (
      <div>
        <h1>Quiz App</h1>
        <h2>Quiz Completed!</h2>

        <h3>
          Your Score: {score} / {questions.length}
        </h3>

        <p>
          You scored {Math.round((score / questions.length) * 100)}%
        </p>

        <button
          onClick={() => {
            setCurrentIndex(0);
            setScore(0);
          }}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz App</h1>

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>

      <p>Category: {questions[currentIndex].category}</p>
      <p>Difficulty: {questions[currentIndex].difficulty}</p>

      <h3>{questions[currentIndex].question}</h3>

      <div className="options">
        {questions[currentIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => checkAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;