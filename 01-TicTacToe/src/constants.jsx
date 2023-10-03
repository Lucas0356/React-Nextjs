export const TURNS = {
    X: "x",
    O: "o"
}

export const GAME_STATE = {
    Sin_ganador: "Sin ganador",
    X: `Ha ganado la x`,
    O: `Ha ganado el o`,
    Empate: "Empate"
}

export const WINNER_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
