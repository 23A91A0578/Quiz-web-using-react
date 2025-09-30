import React from "react";
import { useState,useEffect } from "react";
import './Quiz.css';
import { data } from "./data";

function Quiz(){
    const [index, setIndex] = useState(0);
    const [selectOpt,setSelectOpt]=useState(null);

  const NextQuestion = () => {
    if (index < data.length) {
      setIndex(index + 1);
      setSelectOpt(null);
    }
  };
  const [score,setScore]=useState(0);
  const handleScore=(num)=>{
    setSelectOpt(num)
    if(data[index].ans===num){
        setScore(score+1);
    }
  }
  let question=data[index];

    return(
        <>
        {index!=data.length ?

        <div className="container">
            <div className="quiz-box">
                <div className="quiz-heading">React Quiz</div>
                <div className="quiz-question">
                    {question.question}
                </div>
                <div className="options">
                    <ul>
                        <li className={selectOpt===1? "active" :""}  onClick={()=>handleScore(1)}>{question.option1}</li>
                        <li className={selectOpt===2? "active" :""} onClick={()=>handleScore(2)}>{question.option2}</li>
                        <li className={selectOpt===3? "active" :""} onClick={()=>handleScore(3)}>{question.option3}</li>
                        <li className={selectOpt===4? "active" :""} onClick={()=>handleScore(4)}>{question.option4}</li>
                    </ul>
                </div>
                <button className="next-btn" onClick={NextQuestion}>Next</button>
                <div className="number-of-qns">{index+1} of {data.length} questions</div>
            </div>
        </div> : <div className="quiz-box"><div className="score-card">Quiz Finished...! <br></br> Score:{score}</div></div>
}
        </>
    )

}
export default Quiz