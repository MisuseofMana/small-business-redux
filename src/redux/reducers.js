import { combineReducers } from 'redux'

const user = (state = [], action) => {
    switch(action.type) {
        case 'SET_USER':
            let user = [ ...state ]
            user.username = action.value
            return user
        default:
            return state
    }
}

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            let cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

const makes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MAKES':
            return action.value
        case 'DELETE_MAKE':
            let makes = [ ...state ]
            console.log(action.value)
            makes.splice(action.value, 1)
            return makes
        default:
            return state
    }
}

export default combineReducers({ user, cars, makes })