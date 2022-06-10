import styled from '@mui/system/styled'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined'
import { DEFAULT_GAME_RULES } from './constants'

const Rules = ({ rules = DEFAULT_GAME_RULES, ...props }: RulesProps) => (
	<Box {...props}>
		<Typography variant="h3">Rules</Typography>
		<List>
			{rules.map((rule, index) => (
				<ListItem disablePadding key={`rule-${index}`}>
					<ListItemIconStyled>
						<LabelOutlinedIcon />
					</ListItemIconStyled>
					<ListItemText primary={rule} />
				</ListItem>
			))}
		</List>
	</Box>
)

type RulesProps = BoxProps & {
	rules?: String[]
}

export default Rules

const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => ({
	minWidth: 'min-content',
	paddingRight: theme.spacing(1),
}))
