export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        value: user
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const deleteMake = (index) => {
    return {
        type: 'DELETE_MAKE',
        value: index
    }
}