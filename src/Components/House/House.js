import React from 'react'
import './House.css'
export default function House(props){
    return(
        <div className='houses'>
            <div className='titleHouse'>Home Listings</div>
            {props.houses}
        </div>
    )
}