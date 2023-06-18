import React from 'react'
import DashboardStatsGrid from '../Components/DashboardStatsGrid'
import TransactionChart from '../Components/TransactionChart'
import RecentOrders from '../Components/RecentOrders'
import BuyerProfilePieChart from '../Components/BuyerProfilePieChart'
import PopularProducts from '../Components/PopularProducts'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-col sm:flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-col sm:flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}
