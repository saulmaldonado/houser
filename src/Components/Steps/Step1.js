import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import store, {UPDATE_HOUSES, CANCEL_HOUSE} from '../../store'

export default class Step1 extends React.Component{
    constructor(){
        super()

        this.state={
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            st: store.getState().st,
            zipcode: store.getState().zipcode
        }
    }

    handelInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    componentDidMount = () => {
        store.subscribe(() => {
            this.setState({
                name: store.getState().name,
                address: store.getState().address,
                city: store.getState().city,
                st: store.getState().st,
                zipcode: store.getState().zipcode
            })
        })
    }

    saveChanges = () => {
        store.dispatch({
            type: UPDATE_HOUSES,
            payload: this.state
        })
        console.log('saved')
    }

    cancel = () => {
        store.dispatch({
            type: CANCEL_HOUSE
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <div>Wizard</div>
                <input placeholder='name' name='name' value={this.state.name} onChange={this.handelInputChange}/>
                <input placeholder='address' name='address' value={this.state.address} onChange={this.handelInputChange}/>
                <input placeholder='city' name='city' value={this.state.city} onChange={this.handelInputChange}/>
                <input placeholder='state' name='st' value={this.state.st} onChange={this.handelInputChange}/>
                <input placeholder='zipcode' name='zipcode' value={this.state.zipcode} onChange={this.handelInputChange}/>
                <Link to='/'><button onClick={() => {this.cancel()}}>Cancel</button></Link>
                <Link to='/wizard/step2'><button  onClick={() => this.saveChanges()}> > </button></Link>
            </div>
        )
    }
}