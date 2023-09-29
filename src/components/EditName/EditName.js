import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { updateUser } from '../../features/updateUserName/updateUserNameSlice'
import './editName.css'

export default function EditName({setIsEditing}) {

    const [userData, setUserData]  = useState({
        userName:'',
      })
    
      const {userName} = userData
  
      const dispatch = useDispatch()
      const {user} = useSelector( (state) => state.profile)

      const onChange = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
      }

      const handleSubmitUserName = (e) => {
        e.preventDefault()
        const newUserData = {
            userName,
        }
      
        dispatch(updateUser(newUserData))
        setIsEditing(false)
      }

      const handleCancel = (e) => {
        e.preventDefault()
        setIsEditing(false)
      }

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
          placeholder={user.userName}
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
          placeholder={user.firstName}
          disabled
           />
        </div>
        <div className="editInput-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input 
          type="text" 
          id="lastName"
          name="lastName"       
          placeholder={user.lastName}
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
