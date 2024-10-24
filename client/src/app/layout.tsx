import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Nav/Navigation'

export const metadata: Metadata = {
	title: 'FreshShop',
	description: 'Shop for fresh produce',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} text-zinc-800 `}>
				<div className='w-full h-full'>
					<Navigation />
					{children}
				</div>
			</body>
		</html>
	)
}