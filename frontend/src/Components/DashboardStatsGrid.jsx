import React from 'react'
import { IoPieChart, IoPeople } from 'react-icons/io5'

export default function DashboardStatsGrid() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">New Patients</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">1000</strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Our Doctors</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">423</strong>
            <span className="text-sm text-red-500 pl-2">-3</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Clients</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">1000</strong>
            <span className="text-sm text-green-500 pl-2">+30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Discharges</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">432</strong>
            <span className="text-sm text-green-500 pl-2">+43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
