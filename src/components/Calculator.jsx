import React, { useState } from 'react'
import './Calculator.css' 

export default function Calculator() {
  const [num,setNum] = useState(0); //Const that represents the current value
  const [previousNum, setPreviousNum] = useState(0);  //Const that represents the Previous value
  const [operator, setOperator] = useState(0);  //Const that represents the operator type

  function inputNum(e) {        //This function inputs the values with some conditions
    var input = e.target.value; 
    if (num===0){               //it will input a value if screen value is 0 and replace it
      setNum(input);            //and it will save the value in memory
    }else{                      //else it will concatenate with the previous input
      setNum(num + input);
    }
  } 

  function reset() {            //Function that resets current value and the previous one
    setNum(0)
    setPreviousNum(0)
  }

  function operatorType(e) {    //Function that inputs the operators
    var operatorInput = e.target.value;
    setOperator(operatorInput)  //This will save the chosen operator in memory
    setPreviousNum(num);        //The current value will be stored when an operator is inputed
    setNum(0);                  //The value in the screen will return to zero 
  }

  function calculate() {        // This the function that calculates based on the operator
    if(operator==="/") {        // At first i tried without parseFloat, but kept getting some errors 
      setNum(parseFloat(previousNum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(previousNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(previousNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(previousNum) + parseFloat(num));
    }
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <div className="screen">{num}</div>
          <button className='btn special reset' onClick={reset}>AC</button>
          <button className="btn special" onClick={operatorType} value="/">
            /
          </button>
          <button className="btn" onClick={inputNum} value={7}>
            7
          </button>
          <button className="btn" onClick={inputNum} value={8}>
            8
          </button>
          <button className="btn" onClick={inputNum} value={9}>
            9
          </button>
          <button className="btn special" onClick={operatorType} value={"x"}>
            X
          </button>
          <button className="btn" onClick={inputNum} value={4}>
            4
          </button>
          <button className="btn" onClick={inputNum} value={5}>
            5
          </button>
          <button className="btn" onClick={inputNum} value={6}>
            6
          </button>
          <button className="btn special" onClick={operatorType} value="-">
            -
          </button>
          <button className="btn" onClick={inputNum} value={1}>
            1
          </button>
          <button className="btn" onClick={inputNum} value={2}>
            2
          </button>
          <button className="btn" onClick={inputNum} value={3}>
            3
          </button>
          <button className="btn special" onClick={operatorType} value="+">
            +
          </button>
          <button className="btn zero" onClick={inputNum} value={0}>
            0
          </button>
          <button className="btn" onClick={inputNum} value={"."}>
            .
          </button>
          <button className="btn special" onClick={calculate}>
            =
          </button>
      </div>
    </div>
  );
}

