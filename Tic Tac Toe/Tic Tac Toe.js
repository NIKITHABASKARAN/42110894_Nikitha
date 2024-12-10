document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelectorAll(".cell");
    const message = document.getElementById("message");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = () => {
        let boardState = Array.from(board).map(cell => cell.textContent);
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                gameActive = false;
                return boardState[a];
            }
        }
        return boardState.includes("") ? null : "Draw";
    };``

    const updateMessage = (result) => {
        if (result === "Draw") {
            message.textContent = "It's a draw!";
        } else if (result) {
            message.textContent = `Player ${result} wins!`;
        } else {
            message.textContent = `Player ${currentPlayer}'s turn`;
        }
    };

    const handleCellClick = (e) => {
        if (!gameActive || e.target.textContent) return;
        e.target.textContent = currentPlayer;
        e.target.classList.add("taken");

        const result = checkWinner();
        if (result) {
            updateMessage(result);
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            updateMessage(null);
        }
    };

    const resetGame = () => {
        currentPlayer = "X";
        gameActive = true;
        board.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("taken");
        });
        updateMessage(null);
    };

    board.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);

    updateMessage(null);
});
