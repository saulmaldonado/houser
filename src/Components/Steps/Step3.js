import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {UPDATE_MORTGAGEANDRENT, CANCEL_HOUSE} from '../../store'


export default class Step3 extends React.Component{
    constructor(){
        super()
        this.state={
            mortgage: store.getState().mortgage,
            rent: store.getState().rent
        }
    }

    handelInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    saveChanges = () => {
        store.dispatch({
            type: UPDATE_MORTGAGEANDRENT,
            payload: this.state
        })


        console.log('changes saved')
    }

    cancel = () => {
        store.dispatch({
            type: CANCEL_HOUSE
        })
    }



    addHouse = () => {
        const {name, address, city, st, zipcode, image} = store.getState()
        const {mortgage, rent} = this.state

    axios.post('/api/houses', {name, address, city, st, zipcode, image, mortgage, rent})
    .then(() => {

            this.cancel()
            this.props.history.go(-3)
        })
    }

    render(){
        console.log(this.props);


        return(
            <div>
                <p>Monthly Mortgage Amount</p>
                <input placeholder='Monthly Mortgage Amount' name='mortgage' value={this.state.mortgage} onChange={this.handelInputChange}/>
                <p>Desired Monthly Rent</p>
                <input placeholder='Desired Monthly Rent' value={this.state.rent} name='rent' onChange={this.handelInputChange}/>
                <button onClick={this.addHouse}>Complete</button>
                <Link to='/wizard/step2'><button onClick={()=>this.saveChanges()}>&#60;</button></Link>
            </div>
        )
    }
}