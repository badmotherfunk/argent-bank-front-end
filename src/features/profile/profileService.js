import axios from "axios"

// Récupérer le nom de l'utilistaeur
const userProfile = async () => {
    const token = localStorage.getItem('token')
    const tokenParse = JSON.parse(token)
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {},
    {
        headers: {
            'Authorization': `Bearer ${tokenParse}`,
        },
    })

    if(response.status === 200) {
        return response.data
    }
}

const profileService = {
    userProfile,
}

export default profileService