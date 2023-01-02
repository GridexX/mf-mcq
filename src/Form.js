import Question from "./Question";
import React, { useState } from "react";
const Form = () => {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
    }}>
      <div >
        <Question props={{ number: questionNumber }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <input type="checkbox">
            </input>
            <label>40</label>
          </div>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <input type="checkbox">
            </input>
            <label>41</label>
          </div>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <input type="checkbox">
            </input>
            <label>42</label>
          </div>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <input type="checkbox">
            </input>
            <label>43</label>
          </div>
        </div>
        <div style={{ color: "red" }} >

          <button type="button" disabled={questionNumber === 1}
            onClick={() => setQuestionNumber(questionNumber - 1)}>Previous</button>
          <button type="button"
            onClick={() => setQuestionNumber(questionNumber + 1)}>Next</button>
        </div>
      </div>
    </div >
  );
};

export default Form;