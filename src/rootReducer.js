// Inital data to start store with
let initalState = {
  user: null,
  challenges: [],
  challenge: null,
  userChallenge: null
}

export default function rootReducer(state = initalState, action){
  switch (action.type) {
    // Add user information to store
    case "LOGIN":
      return Object.assign({} , state, {
        user: action.payload
      })

    // Remove user information to store
    case "LOGOUT":
      return Object.assign({} , state, {
        user: null
      })

    // Add challenges information to store
    case "CHALLENGES":
      return Object.assign({} , state, {
        challenges: action.payload
      })

    // Add and set specific challenge information to store
    case "CHALLENGE":
      return Object.assign({}, state, {
        challenge: action.payload
      })

    // Set status of user/challenge association to store
    case "USER_CHALLENGE":
      return Object.assign({}, state, {
        userChallenge: action.payload
      })

    // Do not modifiy store if no reducers above were called
    default:
      return state;
  }
}
