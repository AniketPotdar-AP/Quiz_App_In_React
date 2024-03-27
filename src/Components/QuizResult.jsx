import React from 'react'
import Button from "@mui/material/Button";

const QuizResult = (props) => {
    return (
        <>
            <div>
                <div className='h2 text-center'>
                    Your Score : {props.score}
                    <br />
                    <br />
                    Total Sore : {props.totalScore}
                </div>
                <Button
                    variant="contained"
                    color="success"
                    className="d-flex mx-auto mt-5 mb-2"
                    onClick={props.tryagain}
                >
                    Try Again
                </Button>
            </div>
        </>
    )
}

export default QuizResult