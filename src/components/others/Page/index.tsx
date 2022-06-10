import { ReactNode } from 'react'
import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import Head from 'next/head'

const Page = ({
	pageTitle,
	children,
	disablePadding = false,
}: PagePropsType) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main>
				<PageContentWrapper disablePadding={disablePadding}>
					{children}
				</PageContentWrapper>
			</main>
		</>
	)
}

type PagePropsType = {
	pageTitle: String
	disablePadding?: boolean
	children: ReactNode
}

export default Page

const PageContentWrapper = styled(
	({
		disablePadding,
		...props
	}: {
		disablePadding: boolean
		children: ReactNode
	}) => <Box {...props} />
)(({ disablePadding }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: disablePadding ? 0 : '50px 25px 0 25px',
}))
