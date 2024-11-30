import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { logoutUser } from '@/app/api/auth'
import { getUser } from '@/app/api/user'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'

// Mock user data
const user = {
	name: 'Alice Johnson',
	email: 'alice@example.com',
	joinDate: 'January 2023',
}

// Mock order data
const orders = [
	{ id: 'ORD001', date: '2023-05-15', status: 'Delivered', total: '$120.00' },
	{ id: 'ORD002', date: '2023-06-02', status: 'Processing', total: '$85.50' },
	{ id: 'ORD003', date: '2023-06-18', status: 'Shipped', total: '$200.00' },
]

export default function ProfilePage() {
	// const { data: user, isPending } = useQuery({
	// 	queryFn: () => getUser(),
	// 	queryKey: ['user'],
	// })

	const logoutHandler = async () => {
		await logoutUser()
		window.location.reload()
	}

	// if (user == null || isPending) {
	// 	return <h1>Loading</h1>
	// }

	return (
		<div className='container p-4 mx-auto space-y-6'>
			<Card>
				<CardHeader className='flex flex-row items-center gap-4'>
					<div>
						<CardTitle>{user.name}</CardTitle>
						<CardDescription>{user.email}</CardDescription>
						<CardDescription>Member since {user.joinDate}</CardDescription>
					</div>
						<Button onClick={logoutHandler} className='ml-20'>Logout</Button>
				</CardHeader>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Order History</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='space-y-4'>
						{orders.map(order => (
							<div key={order.id} className='flex items-center justify-between pb-2 border-b'>
								<div>
									<p className='font-medium'>Order #{order.id}</p>
									<p className='text-sm text-gray-500'>{order.date}</p>
								</div>
								<div className='text-right'>
									<Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>{order.status}</Badge>
									<p className='mt-1'>{order.total}</p>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
