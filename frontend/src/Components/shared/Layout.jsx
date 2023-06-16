import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
	return (
		<div className="bg-neutral-100 h-screen w-screen flex flex-row">
			<Sidebar />
			<div className="flex-1 h-screen flex-col flex">
				<Header />
				<div className=" p-6 text-lg leading-8 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
