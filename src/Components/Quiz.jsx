import React, { useState } from "react";
import { Data } from "../Data/data";
import Button from "@mui/material/Button";
import QuizResult from "./QuizResult";

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [result, setResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < Data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(0);
    } else {
      setResult(true);
    }
  };

  const updateScore = () => {
    if (selectedOption == Data[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setResult(false)
    setCurrentQuestion(0)
    setSelectedOption(0)
    setScore(0)
  }

  return (
    <>
      <div className="d-flex flex-column mt-4 ">
        <h1 className="text-light mb-5 text-center">Quiz Application</h1>
        <div className="container border rounded border-2 p-4 w-75 bg-light-subtle text-dark">
          {result ? (
            <QuizResult score={score} totalScore={Data.length} tryagain={resetAll}
            />
          ) : (
            <>
              <div className="question mb-5 h4 mt-2">
                {currentQuestion + 1 + ". " + Data[currentQuestion].quetion}
              </div>
              <div>
                {Data[currentQuestion].options.map((options, i) => {
                  return (
                    <>
                      <Button
                        className={`btn shadow d-flex w-100 justify-content-start mb-3 p-2 ${selectedOption == i + 1 ? "cheked" : null
                          }`}
                        onClick={() => setSelectedOption(i + 1)}>
                        <span className="ms-2">{options}</span>
                      </Button>
                    </>
                  );
                })}
              </div>
              <Button
                variant="contained"
                color="success"
                className="d-flex mx-auto mt-5 mb-2"
                onClick={changeQuestion}
              >
                Next Question
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
