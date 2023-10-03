import { GAME_STATE } from "../constants"

export function WinnerModal ({ winner, resetGame }) {
    if (winner === GAME_STATE.Sin_ganador) return null
    
    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winner}
                </h2>
            </div>

            <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
        </section>
    )
}