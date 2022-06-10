// import Page from "@/components/Layout/components/Page";
import type { NextPage } from 'next'
import useGameOfLife from '@/components/hooks/useGameOfLife/index'
import Grid from '@/components/Grid'
import Page from '@/components/others/Page'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import StandardButton from '../components/others/Buttons/StandardButton/index'
import Rules from '@/components/others/Rules'

const Home: NextPage = () => {
	const {
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
	} = useGameOfLife()

	return (
		<Page pageTitle="Game of Life">
			<Box display="flex">
				<Box marginRight="16px">
					<Grid
						numCols={numCols}
						grid={grid}
						onSetGrid={setGrid}
						disableImages
					/>
					<Box
						width={`${numCols * 20}px`}
						display="flex"
						justifyContent="space-around"
						marginTop={1}
						alignSelf="center"
					>
						<StandardButton onClick={stopStartSimulation}>
							{isRunning ? 'Stop' : 'Start'}
						</StandardButton>
						<StandardButton onClick={clearGrid} disabled={isRunning}>
							Clear board
						</StandardButton>
						<StandardButton onClick={generateRandomGrid} disabled={isRunning}>
							Random
						</StandardButton>
					</Box>
				</Box>

				<Box display="flex" flexDirection="column">
					<Typography variant="h3">What's the Game of Life?</Typography>
					<Typography marginBottom="8px">
						Game of Life is a non-competitive Zero-Player mobileautomata game
						developed by John Conway in the 1970s. The game is played on an
						endless grid of square cells, the first state that determines the
						continuity of the game. The game contains squares and other spaces
						called cells. These squares can be turned on or off.
					</Typography>
					<Link
						href="https://www.researchgate.net/profile/Kuldeep-Vayadande/publication/359108890_SIMULATION_OF_CONWAY'S_GAME_OF_LIFE_USING_CELLULAR_AUTOMATA/links/62288aa3a39db062db8d525a/SIMULATION-OF-CONWAYS-GAME-OF-LIFE-USING-CELLULAR-AUTOMATA.pdf"
						underline="none"
						target="_blank"
						rel="noreferrer"
						fontSize="14px"
					>
						{'SIMULATION OF CONWAY’S GAME OF LIFE USING CELLULAR AUTOMATA'}
					</Link>
					<Rules marginTop="16px" />
				</Box>
			</Box>
		</Page>
	)
}

export default Home
