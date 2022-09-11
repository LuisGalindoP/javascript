const rollDice = (rolls) => {
  let rollsAmount = 1;
  let tempRandom = 0;
  let sum = 0;
  let lowest = 20;
  let highest = 0;
  for (let i = 0; i < rolls; i++) {
    let randomNum = Math.floor(Math.random() * 20 + 1);
    randomNum < lowest ? (lowest = randomNum) : null;
    randomNum > highest ? (highest = randomNum) : null;
    sum += randomNum;
    console.log(randomNum);
    if (tempRandom === randomNum) {
      console.log("Rolls:", rollsAmount);
      console.log("Lowest roll:", lowest);
      console.log("higher roll:", highest);
      console.log("Sum:", sum);
      console.log("Average:", sum / rollsAmount);
      return null;
    } else {
      tempRandom = randomNum;
      rollsAmount++;
    }
  }
  return null;
};

console.log(rollDice(20));
