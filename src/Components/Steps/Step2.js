import React from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_IMAGE} from '../../store'


export default class Step2 extends React.Component{
    constructor(){
        super()
        this.state={
            image: store.getState().image
        }
    }

    handelInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    saveChanges = () => {
        store.dispatch({
            type: UPDATE_IMAGE,
            payload: this.state.image
        })


        console.log('changes saved')
    }

    render(){
        return(
            <div>
                <p>Image Url</p>
                <input placeholder='image URL' name ='image' value={this.state.image} onChange={this.handelInputChange}/>
                <Link to='/wizard/step1'><button onClick={() => this.saveChanges()}>&#60;</button></Link>
                <Link to='/wizard/step3'><button onClick={() => this.saveChanges()}>></button></Link>

            </div>
        )
    }
}