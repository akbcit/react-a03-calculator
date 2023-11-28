const StrToNum = (inputStr) => {
  console.log(`StrToNum: ${typeof inputStr} ${inputStr}`);
  if (inputStr === "") {
    return 0;
  }
  // Try to parse as integer
  let integerResult = parseInt(inputStr);

  // Try to parse as float
  let floatResult = parseFloat(inputStr);

  // Check if there is anything after the decimal point
  let hasDecimal = false;
  if (typeof inputStr === "string") {
    hasDecimal = inputStr.includes(".");
  }

  // Determine the result based on whether it has a decimal or not
  let result = hasDecimal ? floatResult : integerResult;

  return result;
};

export default StrToNum;
