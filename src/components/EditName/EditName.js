import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { updateUser } from '../../features/updateUserName/updateUserNameSlice'
import './editName.css'

export default function EditName({setIsEditing}) {
  
  const dispatch = useDispatch()
  
  //State Redux
  const {userInfo} = useSelector( (state) => state.profile)
  const {data, isSuccess} = useSelector( (state) => state.newUserName)

  const [userData, setUserData]  = useState({
      userName:'',
  })
  
  const [userProfile, setUserProfile] = useState()

  // On récupère la valeur de l'input et on actualise le state avec
  const onChange = (e) => {
    setUserData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
  }

  // On déstructure la valeur du state dans {userName}
  const {userName} = userData

  console.log(userData)
    
  // Et on envoi nos données dans notre requête 'updateUser' avec dispatch 
  const handleSubmitUserName = (e) => {
    e.preventDefault()

    dispatch(updateUser({userName}))
    setIsEditing(false)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  useEffect(() => {
    // Si un utilisateur est connecté, alors on actualise le state avec l'userName du profil
    if(userInfo) {
      const userNameProfile = userInfo.body.userName
      setUserProfile(userNameProfile)
    }

    // Si on modifie l'userName avec succès, alors on actualise le state avec le nouvel userName
    if(isSuccess) {
      const newUserName = data.body.userName
      setUserProfile(newUserName)
    }
    
  }, [isSuccess, userInfo, userName, data])

  return (
    <form className='editForm-container'>
        <h2 className='editForm-title'>Edit user info</h2>

        <div className="editInput-wrapper">
          <label htmlFor="userName">User name:</label>
          <input 
          type="text" 
          id="userName"
          name="userName"       
          value={userName}
          placeholder={userProfile}
          onChange={onChange}
          required
           />
        </div>
        <div className="editInput-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input 
          type="text" 
          id="firstName"
          name="firstName"       
          placeholder={userInfo.body.firstName}
          disabled
           />
        </div>
        <div className="editInput-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input 
          type="text" 
          id="lastName"
          name="lastName"       
          placeholder={userInfo.body.lastName}
          disabled
           />
        </div>
        <div className="editName-button-wrapper">
        <button className="editName-button" onClick={handleSubmitUserName}>Save</button>
        <button className="editName-button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  )
}
