import styled from '@mui/system/styled'
import Box, { BoxProps } from '@mui/material/Box'

const Cell = styled(({ isAlive = false, ...props }: CellPropsTypes) => (
	<Box {...props} />
))(({ isAlive, theme }) => ({
	width: 20,
	height: 20,
	backgroundColor: isAlive
		? theme.palette.cell.alive
		: theme.palette.cell.death,
	border: `1px solid ${theme.palette.cell.border}`,
}))

type CellPropsTypes = BoxProps & {
	isAlive?: boolean
}

export default Cell
