let initalState = {
  user: null,
  challenges: [],
  challenge: null,
  userChallenge: null
}

export default function rootReducer(state = initalState, action){
  switch (action.type) {
    case "LOGIN":
      return Object.assign({} , state, {
        user: action.payload
      })

    case "LOGOUT":
      return Object.assign({} , state, {
        user: null
      })

    case "CHALLENGES":
      return Object.assign({} , state, {
        challenges: action.payload
      })

    case "CHALLENGE":
      return Object.assign({}, state, {
        challenge: action.payload
      })

    case "USER_CHALLENGE":
      return Object.assign({}, state, {
        userChallenge: action.payload
      })

    default:
      return state;
  }
}
