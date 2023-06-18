import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
	{
		id: '1',
		Registerd_ID: '4324',
		customer_id: '23143',
		Client_name: 'Shirley A. Lape',
		Discharged_Date: '2022-05-17T03:24:00',
		Total_Bill_Amount: '$435.50',
		current_status: 'Discharged',
		Address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		Registerd_ID: '7453',
		customer_id: '96453',
		Client_name: 'Ryan Carroll',
		Discharged_Date: '2022-05-14T05:24:00',
		Total_Bill_Amount: '$96.35',
		current_status: 'Discharged',
		Address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		Registerd_ID: '5434',
		customer_id: '65345',
		Client_name: 'Mason Nash',
		Discharged_Date: '2022-05-17T07:14:00',
		Total_Bill_Amount: '$836.44',
		current_status: 'Discharged',
		Address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		Registerd_ID: '9854',
		customer_id: '87832',
		Client_name: 'Luke Parkin',
		Discharged_Date: '2022-05-16T12:40:00',
		Total_Bill_Amount: '$334.50',
		current_status: 'Discharged',
		Address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		Registerd_ID: '8763',
		customer_id: '09832',
		Client_name: 'Anthony Fry',
		Discharged_Date: '2022-05-14T03:24:00',
		Total_Bill_Amount: '$876.00',
		current_status: 'Discharged',
		Address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		Registerd_ID: '5627',
		customer_id: '97632',
		Client_name: 'Ryan Carroll',
		Discharged_Date: '2022-05-14T05:24:00',
		Total_Bill_Amount: '$96.35',
		current_status: 'Discharged',
		Address: 'Los Angeles, CA 90017'
	}
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Discharg Details</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Registred ID</th>
							<th>Client Name</th>
							<th>Discharged Date</th>
							<th>Total Bill Amount</th>
							<th>Address</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.Registerd_ID}`}>#{order.Registerd_ID}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.Client_name}</Link>
								</td>
								<td>{format(new Date(order.Discharged_Date), 'dd MMM yyyy')}</td>
								<td>{order.Total_Bill_Amount}</td>
								<td>{order.Address}</td>
								<td>{getOrderStatus(order.current_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
