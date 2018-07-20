export const LOGIN = 'LOGIN'

export const login = ({email, password}) => async dispatch => {
    const result = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    const {name, token} = await result.json()
    window.localStorage.setItem('token', token)
    dispatch({type: 'LOGIN', payload: {name, token}})
}

export const register = ({username, email, password}) => async dispatch => {
    const result = await fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({username, email, password})
    })
    const {token,name} = await result.json()
    window.localStorage.setItem('token', token)
    dispatch({type: 'LOGIN', payload: {token, name}})
}

export const verify = (token) => async dispatch => {
    const {name} = await fetchProtected('http://localhost:8000/verify', 'POST', token)
    dispatch({type: LOGIN, payload:{name, token}})
    return
}

export const LOGOUT = 'LOGOUT'
export const logout = () => dispatch => {
    window.localStorage.removeItem('token')
    dispatch({
        type: LOGOUT
    })
}

export const fetchProtected = async (url, method, token, body) => {
    const request = {
        method,
        headers: {
            'Authorization': `bearer ${token}`,
            'content-type': 'application/json'
        }
    }
    if(body) {
        console.log('BODY', JSON.stringify(body))
        request.body = JSON.stringify(body)
    }
    const result = await fetch(url, request)
    const response = await result.json()
    console.log('RESPONSE', response)
    return response
}