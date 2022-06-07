// import Page from "@/components/Layout/components/Page";
import type { NextPage } from 'next'
import { useState, useCallback, useRef } from 'react'

import { Grid } from 'types/grid'
import { generateEmptyGrid, randomTiles } from '../helpers/helpers'
import { NUM_ROWS, NUM_COLS, POSITIONS } from '../constants/grid'
import useInterval from 'components/hooks/useInterval'

const Home: NextPage = () => {
	const [grid, setGrid] = useState(() => randomTiles(NUM_ROWS, NUM_COLS))
	const [running, setRunning] = useState(false)

	const runningRef = useRef(running)
	runningRef.current = running

	const runSimulation = useCallback((grid: Grid) => {
		if (!runningRef.current) {
			return
		}

		let gridCopy = JSON.parse(JSON.stringify(grid))
		for (let i = 0; i < NUM_ROWS; i++) {
			for (let j = 0; j < NUM_COLS; j++) {
				let neighbors = 0

				POSITIONS.forEach(([x, y]) => {
					const newI = i + x
					const newJ = j + y

					if (newI >= 0 && newI < NUM_ROWS && newJ >= 0 && newJ < NUM_COLS) {
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
		runSimulation(grid)
	}, 150)

	return (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${NUM_COLS}, 20px)`,
					width: 'fit-content',
					margin: '0 auto',
				}}
			>
				{grid.map((rows, i) =>
					rows.map((col, k) => (
						<div
							key={`${i}-${k}`}
							onClick={() => {
								let newGrid = JSON.parse(JSON.stringify(grid))
								newGrid[i][k] = grid[i][k] ? 0 : 1
								setGrid(newGrid)
							}}
							style={{
								width: 20,
								height: 20,
								backgroundColor: grid[i][k] ? '#F68E5F' : undefined,
								border: '1px solid #595959',
							}}
						/>
					))
				)}
			</div>
			<button
				onClick={() => {
					setRunning(!running)
					if (!running) {
						runningRef.current = true
					}
				}}
			>
				{running ? 'Stop' : 'Start'}
			</button>
			<button
				onClick={() => {
					setGrid(generateEmptyGrid(NUM_ROWS, NUM_COLS))
				}}
			>
				Clear board
			</button>
			<button
				onClick={() => {
					setGrid(randomTiles(NUM_ROWS, NUM_COLS))
				}}
			>
				Random
			</button>

			<div>
				<ul>
					<li>
						Any live cell with fewer than two live neighbours dies, as if by
						underpopulation.
					</li>
					<li>
						Any live cell with two or three live neighbours lives on to the next
						generation.
					</li>
					<li>
						Any live cell with more than three live neighbours dies, as if by
						overpopulation.
					</li>
					<li>
						Any dead cell with exactly three live neighbours becomes a live
						cell, as if by reproduction.
					</li>
				</ul>
			</div>
		</>
	)
}

export default Home
