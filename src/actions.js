import Adapter from './adapter' // Used to communicate with Rails backend

// Call LOGIN reducer with user information from loginFetch
function loginAction(payload){
  return {
    type: "LOGIN",
    payload: payload
  }
}

// Atempt user verifcation using name and password on Rails backend
// Success: Call loginAction with user information and set token
// Failure: Browser alert with Rails message
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

// Atempt user creation using name, password, and email
// Success: Call loginAction with user information and set token
// Failure: Browser alert with Rails message
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

// When a token exists find the user in Rails with token
// Success: Call loginAction with user information
// Failure: Browser alert with Rails message
export const currentUserFetch = token => {
  return dispatch => {
    Adapter.currentUser(token)
    .then(response => {
      if (response.user) {
        dispatch(loginAction(response.user))
      } else {
        alert("There was an error automatically logging you in.")
      }
    })
  }
}

// Call LOGOUT reducer and remove token
export function logout(){
  localStorage.removeItem('token')
  return {
    type: "LOGOUT"
  }
}

// Call CHALLENGES reducer with challenges information
function challengesAction(payload){
  return {
    type: "CHALLENGES",
    payload: payload
  }
}

// Recieve all challenges from Rails backend
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

// Call CHALLENGE reducer to set single challenge
function challengeAction(payload){
  return {
    type: "CHALLENGE",
    payload: payload
  }
}

// Recieve one challenge from Rails backend by id
export const challengeFetch = (id) => {
  return dispatch => {
    Adapter.getChallenge(id)
    .then(response => {
      return dispatch(challengeAction(response.challenge))
    })
  }
}

// Call USER_CHALLENGE reducer
function userChallenge(payload){
  return {
    type: "USER_CHALLENGE",
    payload: payload
  }
}

// Call userChallenge unless Rails failed to create association
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

// Call USER_CHALLENGE reducer
function createUserChallenge(payload){
  return {
    type: "USER_CHALLENGE",
    payload: payload
  }
}

// Create user_challenge in Rails backend then call createUserChallenge
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
