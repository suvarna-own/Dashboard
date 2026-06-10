import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'



export default function MainContainer() {
  return (
    <div className="flex-1 px-7 font-semibold text-2xl maincontainer">
      <Header />
      <Dashboard />
    </div>
  )
}
