import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import { ROUTE_CONST } from '../constants/RouteConst'
import List from '../pages/customers/list/List'
import View from '../pages/customers/view/View'

const RouteComponent = () => {
  return (
    <Routes>
        <Route path={ROUTE_CONST.DASHBOARD_URL} element={<Dashboard/>} />
        <Route path={ROUTE_CONST.LIST_URL} element={<List/>} />
        <Route path={ROUTE_CONST.VIEW_URL} element={<View/>} />
    </Routes>
  )
}

export default RouteComponent