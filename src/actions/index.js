import { SET_USER, SET_USERS, LOGOUT } from './types';
import { login, fetchUser, fetchUsers, fetchUserData } from '../api/index.js'


export function loginUser(user_params, history) {
  return function (dispatch){
  login(user_params)
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {
        localStorage.setItem("token", data["jwt"]);
        dispatch(fetchingAllUserData(data.user.id))
      }
    })
  }
}

export function fetchingUser(){
  return function(dispatch){
    fetchUser()
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {

        dispatch(fetchingAllUserData(data))
      }
    })
  }
}

export function fetchingAllUserData(user_id){
  return function(dispatch){
    fetchUserData(user_id)
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {
        console.log('data - all user data', data)
        dispatch({ type: SET_USER, payload: data })
      }
    })
  }
}

export function fetchingUsers(){
  return function (dispatch){
    fetchUsers()
    .then(data => {
      if (data.error){
        console.log('error')
        return null
      }
      else {
        console.log('data - fetching users', data)
        dispatch({ type: SET_USERS, payload: data})
      }
    })
  }
}




export function logout(){
  localStorage.clear()
  return {
    type: LOGOUT
  }
}
