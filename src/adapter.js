class Adapter {
  static login(payload){
    return fetch('http://localhost:3001/api/v1/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        email_address: payload.emailAddress,
        password: payload.password
      })
    })
    .then(response => response.json())
  }

  static signup(payload){
    return fetch('http://localhost:3001/api/v1/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        name: payload.name,
        email_address: payload.emailAddress,
        password: payload.password,
        password_confirmation: payload.passwordConfirmation
      })
    })
    .then(response => response.json())
  }

  static getUser(){
    return fetch('http://localhost:3001/api/v1/challenges', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    .then(response => response.json())
  }

  static getChallenges(){
    return fetch('http://localhost:3001/api/v1/challenges')
      .then(response => response.json())
  }

  static getChallenge(index){
    return fetch(`http://localhost:3001/api/v1/challenge/${index}`)
    .then(response => response.json())
  }
}

export default Adapter;
