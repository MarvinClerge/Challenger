let initalState = {
  user: null,
  challenges: []
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

    default:
      return state;
  }
}
