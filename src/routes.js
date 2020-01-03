import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'

export default (
    <Switch>
        <Route exact path = '/' component={Dashboard} />
        <Route path = '/wizard' component={Wizard} />
        <Route render={()=>{
            return <h1>404 not found</h1>
        }} />
    </Switch>

)