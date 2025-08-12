let currentPlayer = true;
let winnerboard = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let result = document.getElementById("result");
let btn = document.querySelectorAll(".button");
let winnerfound = false;
btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (winnerfound) return;
    if (currentPlayer) {
      button.textContent = "O";
    } else {
      button.textContent = "X";
    }
    currentPlayer = !currentPlayer;
    button.disabled = true;
    for (let pattern of winnerboard) {
      let [a, b, c] = pattern;
      if (
        btn[a].textContent === "X" &&
        btn[b].textContent === "X" &&
        btn[c].textContent === "X"
      ) {
        alert("Player X wins!");
        btn.forEach((b) => (b.disabled = true));
        winnerfound = true;
        break;
      } else if (
        btn[a].textContent === "O" &&
        btn[b].textContent === "O" &&
        btn[c].textContent === "O"
      ) {
        btn.forEach((b) => (b.disabled = true));
        alert("Player O wins!");
        winnerfound = true;
        break;
      }
    }
    if (!winnerfound) {
      let filledCount = 0;
      for (let i = 0; i < btn.length; i++) {
        if (btn[i].textContent !== "") {
          filledCount++;
        }
      }
      if (filledCount === btn.length) {
        alert("It's a Tie!");
      }
    }
  });
});

let resetButton = document.querySelectorAll(".reset");
resetButton.forEach((button) => {
  button.addEventListener("click", () => {
    btn.forEach((b) => {
      b.textContent = "";
      b.disabled = false;
    });
    currentPlayer = true;
    winnerfound = false;
  });
});
let restartButton = document.querySelectorAll(".restart");
restartButton.forEach((button) => {
  button.addEventListener("click", () => {
    btn.forEach((b) => {
      b.textContent = "";
      b.disabled = false;
    });
    currentPlayer = true;
    winnerfound = false;
  });
});
