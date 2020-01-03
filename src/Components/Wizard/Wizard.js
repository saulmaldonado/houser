import React from 'react'
import {Link, Redirect, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Step1 from '../Steps/Step1'
import Step2 from '../Steps/Step2'
import Step3 from '../Steps/Step3'

export default class Wizard extends React.Component {
    constructor(){
        super()
        this.state={
        }
    }

    render(){

        return(
            <div>

                <Switch>
                    <Route path = '/wizard/step1' component={Step1} history={this.props.history}/>
                    <Route path = '/wizard/step2' component={Step2} />
                    <Route path = '/wizard/step3' component={Step3} />
                </Switch>

  
            </div>

        )
    }
}