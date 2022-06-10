import styled from '@mui/system/styled'
import Button, { ButtonProps } from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const StandardButton = styled(
	({
		onClick,
		children,
		disabled = false,
		...props
	}: StandardButtonPropsTypes) => (
		<Button
			onClick={onClick}
			disabled={disabled}
			children={<Typography>{children}</Typography>}
			{...props}
		/>
	)
)(({ theme }) => ({
	padding: theme.spacing(1),
	backgroundColor: 'transparent',
	borderRadius: '4px',
	position: 'relative',
	overflow: 'hidden',
	cursor: 'pointer',
	transition: '.5s',
	fontWeight: 400,
	fontSize: '17px',
	border: '1px solid',
	fontFamily: 'inherit',
	textTransform: 'uppercase',
	color: '#00A97F',
	zIndex: 1,

	'&::before, &::after': {
		content: "''",
		display: 'block',
		width: '50px',
		height: '50px',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
		borderRadius: '50%',
		zIndex: -1,
		backgroundColor: '#00A97F',
		transition: '1s ease',
	},

	'&::before': { top: '-1em', left: '-1em' },
	'&::after': { left: 'calc(100% + 1em)', top: 'calc(100% + 1em)' },

	'&:hover::before, &:hover::after': {
		height: '410px',
		width: '410px',
	},

	'&:hover': {
		color: theme.palette.white,
	},

	'&:active': {
		filter: 'brightness(.8)',
	},
}))

type StandardButtonPropsTypes = ButtonProps & {
	disabled?: boolean
}

export default StandardButton
