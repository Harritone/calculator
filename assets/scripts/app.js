const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const getUserNumberInput = () => parseInt(userInput.value);

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry);
}

function calculateResult(calculatiionType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculatiionType !== "ADD" &&
      calculatiionType !== "SUBSTRACT" &&
      calculatiionType !== "MULTIPLY" &&
      calculatiionType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  } else {
    const initialResult = currentResult;
    let mathoperator;
    if (calculatiionType === "ADD") {
      currentResult += enteredNumber;
      mathoperator = "+";
    } else if (calculatiionType === "SUBSTRACT") {
      currentResult -= enteredNumber;
      mathoperator = "-";
    } else if (calculatiionType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathoperator = "*";
    } else if (calculatiionType === "DIVIDE") {
      currentResult /= enteredNumber;
      mathoperator = "/";
    }
    writeToLog(mathoperator, initialResult, enteredNumber, currentResult);
    createAndWriteOutput(mathoperator, initialResult, enteredNumber);
  }
}

addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBSTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DIVIDE"));
