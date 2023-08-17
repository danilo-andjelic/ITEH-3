import React, { useState } from 'react';
import '../styles.css';

function MovieTrivia() {
  const triviaQuestions = [
    {
      question: "In which movie did Tom Hanks play a character stranded on an island?",
      options: ["Forrest Gump", "Cast Away", "Saving Private Ryan", "Toy Story"],
      correctAnswer: "Cast Away",
    },
    {
      question: "Who directed the 'Dark Knight' trilogy?",
      options: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"],
      correctAnswer: "Christopher Nolan",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    if (currentQuestion < triviaQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTrivia = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="container">
      <h1>Movie Trivia Quiz</h1>
      {showResult ? (
        <div>
          <h2>Quiz Results</h2>
          <p>You answered {userAnswers.filter((answer, index) => answer === triviaQuestions[index].correctAnswer).length} out of {triviaQuestions.length} questions correctly.</p>
          <button className="button" onClick={resetTrivia}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{triviaQuestions[currentQuestion].question}</p>
          <div style={{display: 'flex', gap: "8px"}}>  
          {triviaQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="button"
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default MovieTrivia;