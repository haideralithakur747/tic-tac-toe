let currentPlayer = true;
let winnerboard = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let btn = document.querySelectorAll(".button");
btn.forEach((button)=>{
    button.addEventListener('click',(event )=>{
        if(currentPlayer){
            button.textContent = "X";
        }else{
            button.textContent = "O";
        }
        currentPlayer = !currentPlayer;
        button.disabled = true;
        for(let board of winnerboard){
        let[a,b,c]=board;
        if(btn[a].textContent === "X" && btn[b].textContent === "X" && btn[c].textContent === "X"){
           console.log("Player X wins!");
              btn.forEach(b => b.disabled = true)
        }else if(btn[a].textContent === "O" && btn[b].textContent === "O" && btn[c].textContent === "O"){
            alert("Player O wins!");
              btn.forEach(b => b.disabled = true)
        }
        
    }
    })
})

        // button.style.backgroundColor = "red";
    
