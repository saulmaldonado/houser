import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from '../House/House'

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
    }

    render(){

        console.log(this.state)

        let housesMapped = this.state.houses.map((ele, i) => {
            return   <div key={i}>
                         <p>
                         {ele.name}
                         </p>
                         <p>
                         {ele.address}
                         </p>
                         <p>
                         {ele.city}
                         </p>
                         <p>
                         {ele.state}
                         </p>
                         <p>
                         {ele.zipcode}
                         </p>
                         <img src={ele.image}></img>
                         <p>
                         {`$${ele.mortgage}`}
                         </p>
                         <p>
                         {`$${ele.rent}`}
                         </p>
                         <button onClick={() => this.deleteHouse(ele.house_id)}>delete</button> 
                     </div>
        })

        return(
            <div>
                <div >Dashboard</div>
                <House houses={housesMapped} />
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
            </div>

        )
    }
}