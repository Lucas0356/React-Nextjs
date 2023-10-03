import { TURNS, WINNER_COMBOS, GAME_STATE } from "../constants"

// Función para ver si hay un ganador
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
    const [a,b,c] = combo
    if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
        // Se retorna al ganador
        return (boardToCheck[a] === TURNS.X ? GAME_STATE.X : GAME_STATE.O)
    } else if (!boardToCheck.includes(null)){
        // Se hicieron todos los movimientos, es un empate
        return GAME_STATE.Empate
    }
    }
}