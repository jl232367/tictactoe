const gameBoard = () => {
    const setBoard = () => {
        for (let i = 1; i<= 9; i++) {
            //const board = document.querySelector(".gameboard");
            const boardSquare = document.getElementById("gb" + i);
            boardSquare.addEventListener('click', (e) => {
                if (players.currentPlayer () = playerOne) {
                    const currentSquare = e.target.getAttribute("id");
                    currentSquare.innerHTML = "X!"
                 } else {
                    const currentSquare = e.target.getAttribute("id");
                    currentSquare.innerHTML = "O!"
                }
                });
        }

    };
    const boardLayout = setBoard(); 
    return {boardLayout}
};

const players = ()  => {
 const playerOne = document.getElementById("player1").value;
 const playerTwo = document.getElementById("player2").value;
 const currentPlayer = () => {
     if (currentPlayer = playerOne) {
         currentPlayer = playerTwo;
     } else {
         currentPlayer = playerOne;
     }
 };
 return {currentPlayer}
};

const game = () => {

}