import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    st: '',
    zipcode: '',
    image: '',
    mortgage: 0,
    rent: 0
}

export const UPDATE_HOUSES = 'UPDATE_HOUSES'
export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const UPDATE_MORTGAGEANDRENT = 'UPDATE_MORTGAGEANDRENT'
export const CANCEL_HOUSE = 'CANCEL_HOUSE'


function reducer(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case UPDATE_HOUSES:
            return {...state,
                    name: payload.name,
                    address: payload.address,
                    city: payload.city,
                    st: payload.st,
                    zipcode: payload.zipcode}
        case UPDATE_IMAGE:
            return {
                ...state, image: payload
            }
        case UPDATE_MORTGAGEANDRENT:
            return {
                ...state, mortgage: payload.mortgage, rent: payload.rent
            }
        case CANCEL_HOUSE:
        return {
            name: '',
            address: '',
            city: '',
            st: '',
            zipcode: '',
            image: '',
            mortgage: 0,
            rent: 0
        }
        default:
            return state
    }
}

export default createStore(reducer)