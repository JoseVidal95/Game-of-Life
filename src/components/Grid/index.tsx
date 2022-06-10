import { ReactNode } from 'react'
import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import Cell from './components/Cell'
import Image from 'next/image'

const Grid = ({
	grid,
	numCols,
	onSetGrid,
	disableImages = false,
}: GridProps) => (
	<GridWrapper numCols={numCols}>
		{grid.map((rows, i) =>
			rows.map((_, k) => (
				<Cell
					isAlive={Boolean(grid[i][k])}
					key={`${i}-${k}`}
					onClick={() => {
						onSetGrid(i, k, grid[i][k] ? 0 : 1)
					}}
				>
					{Boolean(grid[i][k]) && !disableImages && (
						<Image src="/img/living-cell.webp" width="20px" height="20px" />
					)}
				</Cell>
			))
		)}
	</GridWrapper>
)

type GridProps = {
	numCols: number
	grid: number[][]
	disableImages?: boolean
	onSetGrid: (col: number, row: number, state: 0 | 1) => void
}

export default Grid

const GridWrapper = styled(
	({ numCols, ...props }: { numCols: number; children: ReactNode }) => (
		<Box {...props} />
	)
)(({ numCols, theme }) => ({
	display: 'grid',
	gridTemplateColumns: `repeat(${numCols}, 20px)`,
	width: 'fit-content',
	margin: '0 auto',
	border: `1px solid ${theme.palette.cell.border}`,
	borderRadius: '4px',
}))
