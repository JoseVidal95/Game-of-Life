import { Fragment, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles)
		}
	}, [])

	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</Fragment>
	)
}

export default MyApp
