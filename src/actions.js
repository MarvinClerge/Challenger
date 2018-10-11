import Adapter from './adapter'

function loginAction(payload){
  return {
    type: "LOGIN",
    payload: payload
  }
}

export const loginFetch = input => {
  return dispatch => {
    Adapter.login(input)
    .then(response => {
      if (response.user) {
        localStorage.setItem('token', response.token)
        dispatch(loginAction(response.user))
      } else {
        alert(response.error)
      }
    })
  }
}

function challengesAction(payload){
  return {
    type: "CHALLENGES",
    payload: payload
  }
}

export const challengesFetch = () => {
  return dispatch => {
    Adapter.getChallenges()
    .then(response => {
      if (response.challenges) {
        dispatch(challengesAction(response.challenges))
      }
    })
  }
}
