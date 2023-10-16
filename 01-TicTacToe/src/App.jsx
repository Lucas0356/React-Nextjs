import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from "./components/Square.jsx" 
import { TURNS, GAME_STATE } from "./constants.jsx"
import { checkWinnerFrom } from "./logic/board.js"
import { WinnerModal } from './components/WinnerModal'

function App() {

  // Se definen los estados por defecto
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(GAME_STATE.Sin_ganador)

  // Función para reiniciar el juego (reinicia los estados a su valor por defecto)
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(GAME_STATE.Sin_ganador)

    // Borramos lo guardados en el local storage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    // Validamos que no haya un valor en la casilla o que ya haya un ganador
    if (board[index] || winner != GAME_STATE.Sin_ganador) return

    // Creamos una nueva board con los datos de la actual
    const newBoard = [...board]
    // Agregamos el nuevo valor en la casilla
    newBoard[index] = turn
    // Setteamos la nueva board
    setBoard(newBoard)

    // Cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardamos la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // Revisamos si hay un ganador luego de cada turno
    const newWinner = checkWinnerFrom(newBoard)
    console.log(newWinner)
    if (newWinner != GAME_STATE.Sin_ganador) {
      // Si checkWinner es distinto a Sin_ganador, nos fijamos que no sea empate para tirar confetti
      if (newWinner != GAME_STATE.Empate){
        confetti()
      }
      // Setteamos el nuevo winner
      setWinner(newWinner)
    }
  }

  return (
    <main className='board'>

      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key = {index}
                index = {index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
