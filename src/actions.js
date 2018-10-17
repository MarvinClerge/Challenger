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

export const signupFetch = input => {
  return dispatch => {
    Adapter.signup(input)
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

export const currentUserFetch = token => {
  return dispatch => {
    Adapter.currentUser(token)
    .then(response => {
      console.log(response);
      if (response.user) {
        dispatch(loginAction(response.user))
      } else {
        alert("There was an error loggin you in.")
      }
    })
  }
}

export function logout(){
  localStorage.removeItem('token')
  return {
    type: "LOGOUT"
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

function challengeAction(payload){
  return {
    type: "CHALLENGE",
    payload: payload
  }
}

export const challengeFetch = (id) => {
  return dispatch => {
    Adapter.getChallenge(id)
    .then(response => {
      return dispatch(challengeAction(response.challenge))
    })
  }
}

function userChallenge(payload){
  return {
    type: "USER_CHALLENGE",
    payload: payload
  }
}

export const userChallengeFetch = (userId, challengeId) => {
  return dispatch => {
    Adapter.getUserChallenge(userId, challengeId)
    .then(response => {
      if (response.user_challenge) {
        return dispatch(userChallenge(response.user_challenge))
      } else {
        return dispatch(userChallenge(null))
      }
    })
  }
}

function createUserChallenge(payload){
  return {
    type: "USER_CHALLENGE",
    payload: payload
  }
}

export const createUserChallengeFetch = (userId, challengeId) => {
  return dispatch => {
    Adapter.createUserChallenge(userId, challengeId)
    .then(response => {
      if (response.user_challenge) {
        return dispatch(createUserChallenge(response.user_challenge))
      } else {
        return dispatch(createUserChallenge(null))
      }
    })
  }
}
