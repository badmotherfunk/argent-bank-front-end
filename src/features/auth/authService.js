import axios from "axios"

// Login user
const login = async (userData) => {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', userData)

    if(response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('token', JSON.stringify(response.data.body.token))
    }

    //RememberMe
    if(document.getElementById('remember-me').checked) {
        localStorage.setItem('email', JSON.stringify(userData.email))
        localStorage.setItem('password', JSON.stringify(userData.password))
    } else {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
    }

    return response.data
}

//Logout user
const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
}

const authService = {
    login,
    logout,
}

export default authService