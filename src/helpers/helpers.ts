import { Grid } from 'types/grid'

export const randomTiles = (numRows: number, numCols: number): Grid => {
	const rows = []
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))) // returns a live cell 70% of the time
	}

	return rows
}

export const generateEmptyGrid = (numRows: number, numCols: number): Grid => {
	const rows = []
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => 0))
	}

	return rows
}
