import {SET_LODING, SET_USER, TESTING} from './types'

// Action Creater
export function setLoding(stateLoding){
    return{
        type: SET_LODING,
        stateLoding,
    }
}

export function setUser(user){
    return{
        type: SET_USER,
        user,
    }
}
