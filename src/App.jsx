import { useState, useEffect } from "react";
import "./App.css";
import ButtonGrid from "./components/ButtonGrid";
import Display from "./components/Display";
import ManageOpArr from "./utilities/ManagerOpArr";
// import Calc from "./utilities/Calc";

function App() {
  const [currButton, setcurrButton] = useState({ type: "number", value: 0 });
  const [oprnd1, setOprnd1] = useState("");
  const [oprnd2, setOprnd2] = useState();
  const [oprtr, setOprtr] = useState();
  const [output, setOutput] = useState(0);
  const [currOpStr, setcurrOpStr] = useState("");
  const [memoryVal, setMemoryVal] = useState("0");

  // Function that gets current button from ButtonGrid
  const getCurrButton = (button) => {
    setcurrButton(button);
  };

  // Function that manages operations
  const manageOpArr = () => {
    console.log("manageOpArr called");
    // Create an array with both operands and operator
    let opArr = [oprnd1, oprtr, oprnd2];
    // Call Manage Operations function
    let resultArr = ManageOpArr(opArr, currButton, memoryVal, setMemoryVal);
    // Set operator and operands
    setOprnd1(opArr[0]);
    setOprtr(opArr[1]);
    setOprnd2(opArr[2]);
    // Set output and result arr
    setOutput(resultArr[0]);
    setcurrOpStr(resultArr[1]);
  };

  // Call manageOpArr when currButton state changes
  useEffect(manageOpArr, [currButton]);

  return (
    <>
      <div id="wrapper">
        <Display
          output={
            output.toString().length > 10 ? output.toExponential(4) : output
          }
          opStr={currOpStr}
          memoryVal={memoryVal}
        />
        <ButtonGrid getCurrButton={getCurrButton} />
      </div>
    </>
  );
}

export default App;
