import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from '../House/House'
import './Dashboard.css'

export default class Dashboard extends React.Component {
    constructor(){
        super()
        this.state={
            houses: []
        }
    }

    getHouses = () => {

        axios.get('/api/houses')
        .then(houses => {
            this.setState({houses: houses.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getHouses()
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`)
        .then(houses => {
            this.setState({houses: houses.data})
            console.log('house deleted')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){

        console.log(this.state)

        let housesMapped = this.state.houses.map((ele, i) => {
            return   <div className='house' key={i}>
                         <div>
                         {ele.name}
                         </div>
                         <div>
                         {ele.address}
                         </div>
                         <div>
                         {ele.city}
                         </div>
                         <div>
                         {ele.state}
                         </div>
                         <div>
                         {ele.zipcode}
                         </div>
                         <img src={ele.image}></img>
                         <div>
                         {`mortgage: $${ele.mortgage}`}
                         </div>
                         <div>
                             
                         {`rent: $${ele.rent}`}
                         </div>
                         <button onClick={() => this.deleteHouse(ele.house_id)}>delete</button> 
                     </div>
        })

        return(
            <div  className='dashboard' >
                <div className='title'>
                    <div>Dashboard</div>
                    <Link to='/wizard/step1'><button className='addNew'>Add New Property</button></Link>
                </div>
                <House houses={housesMapped} />
            </div>

        )
    }
}