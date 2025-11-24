import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");

  function handleClick(e) {
    const val = e.target.innerText;

    if (val === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
      return;
    }

    if (val === "C") {
      setValue("");
      return;
    }

    setValue(value + val);
  }

  const buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+","C"];

  return (
    <div className="calculator">
      <input type="text" value={value} disabled />

      <div className="buttons">
        {buttons.map((b, i) => (
          <button key={i} onClick={handleClick}>{b}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
