function rollOne() {
  randomNumber = Math.floor(Math.random() * 6 + 1);

  return randomNumber;
}

// function playFives(num) {
//   let result = 0;
//   for (let i = 0; i < num; i++) {
//     result = rollOne();
//     console.log(result);
//     result === 5 ? console.log("Thats good luck") : null;
//   }
// }

function playStatics() {
  let lowestNumber = 6;
  let highestNumber = 0;
  let tempValue = 0;
  for (let i = 0; i < 8; i++) {
    tempValue = rollOne();
    // console.log(tempValue);
    if (tempValue < lowestNumber) {
      lowestNumber = tempValue;
    }
    if (tempValue > highestNumber) {
      highestNumber = tempValue;
    }
  }
  console.log("Lower value was:", lowestNumber);
  console.log("Higher value was:", highestNumber);
  return null;
}
function playStatics2() {
  let lowestNumber = 6;
  let highestNumber = 0;
  let tempValue = 0;
  let sum = 0;
  for (let i = 0; i < 8; i++) {
    tempValue = rollOne();
    sum += tempValue;
    // console.log(tempValue);
    if (tempValue < lowestNumber) {
      lowestNumber = tempValue;
    }
    if (tempValue > highestNumber) {
      highestNumber = tempValue;
    }
  }
  console.log("Lower value was:", lowestNumber);
  console.log("Higher value was:", highestNumber);
  console.log("The sum is:", sum);
  return null;
}

function playStatics3(times) {
  let lowestNumber = 6;
  let highestNumber = 0;
  let tempValue = 0;
  let sum = 0;
  for (let i = 0; i < times; i++) {
    tempValue = rollOne();
    sum += tempValue;
    // console.log(tempValue);
    if (tempValue < lowestNumber) {
      lowestNumber = tempValue;
    }
    if (tempValue > highestNumber) {
      highestNumber = tempValue;
    }
  }
  console.log("Lower value was:", lowestNumber);
  console.log("Higher value was:", highestNumber);
  console.log("The sum is:", sum);
  console.log("The average is:", sum / times);
  return null;
}

console.log(playStatics3(100));
