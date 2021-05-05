


const gameBoard = (() => {
    const setBoard = () => {
        for (let i = 1; i<= 9; i++) {
            //const board = document.querySelector(".gameboard");
            const boardSquare = document.getElementById("gb" + i);
            boardSquare.addEventListener('click', (e) => {
                if (players.currentPlayer == players.playerOne) {
                    const currentSquare = e.target.getAttribute("id");
                    currentSquare.innerHTML = "X!"
                    console.log("The 'if' executed")
                    players.switchPlayer(players.currentPlayer); 
                 } else {
                    const currentSquare = e.target.getAttribute("id");
                    currentSquare.innerHTML = "O!"
                    console.log("the 'else' executed")
                    players.switchPlayer(players.currentPlayer);
                }
                });
        }

    };
    const boardLayout = setBoard(); 
    return {boardLayout, setBoard}
})();

const players = ()  => {
 const playerOne = document.getElementById("player1").value;
 const playerTwo = document.getElementById("player2").value;
 const currentPlayer = playerOne
 const switchPlayer = cp => {
     if (cp == playerOne) {
         cp = playerTwo;
     } else {
         cp = playerOne;
     }
     return currentPlayer = cp; 
 };
 return {currentPlayer, switchPlayer, playerOne, playerTwo}
};

const game = () => {

}