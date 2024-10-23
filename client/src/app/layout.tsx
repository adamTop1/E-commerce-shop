import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import Navigation from '@/components/Nav/Navigation'

export const metadata: Metadata = {
	title: 'FreshShop',
	description: 'Shop for fresh produce',
}

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: [ '600', '700'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} text-zinc-800 `}>
				<div className='w-full h-full'>
					<Navigation />
					{children}
				</div>
			</body>
		</html>
	)
}
