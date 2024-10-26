import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
	return (
		<div className='grid min-h-screen grid-cols-2 max-w-[1800px] mx-auto'>
			<div className='flex flex-col items-start justify-start gap-10 ml-20'>
				<h3 className='text-6xl font-bold mt-36'>
					Bring fresh food to <br />
					make you feel <span className='text-green-600'>BETTER</span>
				</h3>
				<p className='w-3/4 mt-5 text-gray-600'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque eligendi ullam atque cupiditate
					cumque, velit excepturi qui ea dolor praesentium, laudantium enim aut voluptatem voluptate repellendus.
					Similique, dolore repudiandae!
				</p>
				<div className='flex mt-10'>
					<div className='flex flex-col items-center px-4'>
						<span className='text-xl font-bold'>1200+</span>
						<p>Sales weekly</p>
					</div>
					<div className='h-[60px] w-[2px]  bg-zinc-500'></div>
					<div className='flex flex-col items-center px-4'>
						<span className='text-xl font-bold'>100+</span>
						<p>Farmers</p>
					</div>
					<div className='h-[60px] w-[2px]  bg-zinc-500'></div>
					<div className='flex flex-col items-center px-4'>
						<span className='text-xl font-bold'>99%</span>
						<p>Satisfied customers </p>
					</div>
				</div>
				<Button className='py-6 mt-12 text-xl bg-green-700 px-14 rounded-3xl'><Link href='/shop'>Find your food</Link></Button>
			</div>
			<div className='flex items-center justify-center'>
				<Image src='/vegetables-main.svg' alt='vegetables' width={600} height={600} />
			</div>
		</div>
	)
}

export default Header
