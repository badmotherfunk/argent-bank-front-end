import axios from "axios"

// Login user
const login = async (userData) => {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('token', JSON.stringify(response.data.body.token))
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