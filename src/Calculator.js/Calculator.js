import React, { useState } from "react";
import "./App.css"

const Calculator = () => {
  const [result, setResult] = useState("");

  const Click = (e) => {
    // console.log(result);
    setResult(result.concat(e.target.value));
  };


  const BackSpace = () => {
    setResult(result.slice(0, -1));
  };
  const Clear = () => {
    setResult("");
  };

  const CalculateResult = () => {
    try {
      setResult(eval(result).toString());
      // console.log(typeof eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <>
    <h1 className="Heading">CALCULATOR</h1>
      <div id="Calculator">
          
      <input className="text" value={result}></input>

      <div className="CalculatorKeypad Border">
        <button onClick={Clear} className="Clear">
          C
        </button>
        <button onClick={BackSpace} className="ForBackGround">
          Clear
        </button>
        <button value="(" onClick={Click}>
          (
        </button>
        <button value=")" onClick={Click} >
          )
        </button>
        <button value="/" onClick={Click} className="ForBackGround">
          &divide;
        </button>
        <button value="7" onClick={Click} >
          7
        </button>
        <button value="8" onClick={Click}>
          8
        </button>
        <button value="9" onClick={Click}>
          9
        </button>
        <button value="*" onClick={Click} className="ForBackGround">
          &times;
        </button>
        <button value="4" onClick={Click} >
          4
        </button>
        <button value="5" onClick={Click}>
          5
        </button>
        <button value="6" onClick={Click}>
          6
        </button>
        <button value="-" onClick={Click} className="ForBackGround">
          &ndash;
        </button>
        <button value="1" onClick={Click}>
          1
        </button>
        <button value="2" onClick={Click}>
          2
        </button>
        <button value="3" onClick={Click}>
          3
        </button>
        <button value="+" onClick={Click} className="ForBackGround position1">
          +
        </button>
        <button value="0" onClick={Click}>
          0
        </button>
        <button value="." onClick={Click}>
          .
        </button>
        <button onClick={CalculateResult} className="Result">
          =
        </button>
      </div>
    </div>
    </>
  );
};

export default Calculator;