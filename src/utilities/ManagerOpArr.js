"use strict";
import CheckNumLength from "./CheckNumLength";
import Calc from "./Calc";
import ArrSize from "./ArrSize";
import OpsStr from "./OpStr";
import StrToNum from "./StrToNum";

function ManageOpArr(opArr, button, memoryVal, setMemoryVal) {
  const arrSize = ArrSize(opArr);
  const newType = button.type;
  const newVal = button.value;
  let result = 0;
  switch (arrSize) {
    case 1:
      switch (newType) {
        case "number":
          opArr[0] = CheckNumLength(opArr[0] + newVal.toString());
          result = StrToNum(opArr[0]);
          break;
        case "operator":
          opArr[1] = newVal;
          result = StrToNum(opArr[0]);
          break;
        case "enter":
          result = StrToNum(opArr[0]);
          break;
        case "clear":
          switch (newVal) {
            case "All Clear":
              opArr[0] = "";
              result = 0;
              break;
            case "Clear":
              break;
          }
          break;
        case "memory":
          console.log("memoryVal: ", memoryVal);
          switch (newVal) {
            case "Memory Save":
              setMemoryVal(StrToNum(opArr[0]));
              result = StrToNum(opArr[0]);
              break;
            case "Memory Clear":
              setMemoryVal(0);
              result = StrToNum(opArr[0]);
              break;
            case "Memory Recall":
              result = StrToNum(memoryVal);
              opArr[0] = StrToNum(memoryVal);
              break;
            case "Memory Subtract":
              result = StrToNum(opArr[0]) - StrToNum(memoryVal);
              opArr[0] = result;
              break;
            case "Memory Addition":
              result = StrToNum(opArr[0]) + StrToNum(memoryVal);
              opArr[0] = toString(result);
          }
          break;
        default:
          break;
      }
      break;

    case 2:
      switch (newType) {
        case "number":
          opArr[2] = newVal.toString();
          result = StrToNum(opArr[2]);
          break;
        case "operator":
          opArr[1] = newVal;
          result = opArr[1];
          break;
        case "enter":
          result = StrToNum(opArr[0]);
          break;
        case "clear":
          switch (newVal) {
            case "All Clear":
              opArr[0] = "";
              opArr[1] = undefined;
              result = 0;
              break;
            case "Clear":
              break;
          }
          break;
        default:
          break;
      }
      break;
    case 3:
      switch (newType) {
        case "number":
          opArr[2] = CheckNumLength(opArr[2] + newVal.toString());
          result = StrToNum(opArr[2]);
          break;
        case "operator":
          result = Calc(StrToNum(opArr[0]), opArr[1], StrToNum(opArr[2]));
          opArr[0] = result.toString();
          opArr[1] = newVal;
          opArr[2] = undefined;
          break;
        case "enter":
          result = Calc(StrToNum(opArr[0]), opArr[1], StrToNum(opArr[2]));
          opArr[0] = result.toString();
          opArr[1] = undefined;
          opArr[2] = undefined;
          break;
        case "clear":
          switch (newVal) {
            case "All Clear":
              opArr[0] = "";
              opArr[1] = undefined;
              opArr[2] = undefined;
              result = 0;
              break;
            case "Clear":
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return [result, OpsStr(opArr)];
}

export default ManageOpArr;
