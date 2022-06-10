import { useCallback, useRef, useState } from 'react'
import useInterval from '../useInterval'
import { POSITIONS, NUM_COLS, NUM_ROWS, MILLISECONDS_DELAY } from './constants'
import { generateEmptyGrid, randomTiles } from './helpers'
import { Grid } from './types'

const useGameOfLife = (
	numCols = NUM_COLS,
	numRows = NUM_ROWS,
	millisecondsDelay = MILLISECONDS_DELAY
) => {
	const [grid, setGrid] = useState(() => generateEmptyGrid(numRows, numCols))
	const [isRunning, setRunning] = useState(false)

	const runningRef = useRef(isRunning)
	runningRef.current = isRunning

	const runSimulation = useCallback((grid: Grid) => {
		if (!runningRef.current) {
			return
		}

		let gridCopy = JSON.parse(JSON.stringify(grid))
		for (let i = 0; i < numRows; i++) {
			for (let j = 0; j < numCols; j++) {
				let neighbors = 0

				POSITIONS.forEach(([x, y]) => {
					const newI = i + x
					const newJ = j + y

					if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
						neighbors += grid[newI][newJ]
					}
				})

				if (neighbors < 2 || neighbors > 3) {
					gridCopy[i][j] = 0
				} else if (grid[i][j] === 0 && neighbors === 3) {
					gridCopy[i][j] = 1
				}
			}
		}

		setGrid(gridCopy)
	}, [])

	useInterval(() => {
		runSimulation(grid) //TODO Hacer multihilos
	}, millisecondsDelay)

	const stopStartSimulation = () => {
		setRunning(!isRunning)

		if (!isRunning) {
			runningRef.current = true
		}
	}

	const clearGrid = () => setGrid(generateEmptyGrid(numRows, numCols))

	const generateRandomGrid = () => setGrid(randomTiles(numRows, numCols))

	const stringifyGrid = () => JSON.stringify(grid)

	return {
		isRunning,
		millisecondsDelay,
		numCols,
		numRows,
		grid,
		generateRandomGrid,
		stopStartSimulation,
		clearGrid,
		setGrid,
		stringifyGrid,
	}
}

export default useGameOfLife
