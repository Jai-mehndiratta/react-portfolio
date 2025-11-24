import { useState } from "react";
import "./Calculator.css";
import { motion } from "framer-motion";

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
    <motion.main
      className="calculator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <input type="text" value={value} disabled />

      <div className="buttons">
        {buttons.map((b, i) => (
          <motion.button
            key={i}
            onClick={handleClick}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {b}
          </motion.button>
        ))}
      </div>
    </motion.main>
  );
}

export default Calculator;
