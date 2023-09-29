import axios from "axios"

// Modifier l'UserName
const updateUser = async (userData) => {
    const token = localStorage.getItem('token')
    const tokenParse = JSON.parse(token)
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData,
    {
        headers: {
            'Authorization': `Bearer ${tokenParse}`,
        },
    })

    if(response.status === 200) {
        return response.data.body
    }
}

const newUserUpdate = {
    updateUser,
}

export default newUserUpdate