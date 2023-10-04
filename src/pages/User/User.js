import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './user.css'
import EditName from '../../components/EditName/EditName'
import { useNavigate } from 'react-router-dom'

export default function User() {
  document.title = "Argent Bank - Profile"

  const navigate = useNavigate()

  //State Redux
  const { userInfo } = useSelector( (state) => state.profile)

  const [isEditing, setIsEditing] = useState(false); 
  const [fullName, setFullName] = useState('')
  
  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    // Si il n'y a pas d'utilisateur connecté, alors on préviens la manipulation de l'URL et on redirige vers la page d'accueil
    if(!token) {
      navigate('/')   
    }

    // Si on à une réponse de nos données utilisateur, alors on actualise le state avec les informations du profil 
    if(userInfo) {
      const {firstName, lastName} = userInfo.body
      setFullName(`${firstName} ${lastName}`)
    }
  }, [userInfo, token, navigate])

  return (
    <main className="main bg-dark">
    <div className="header">
    {/* Si on cliqué sur le mode édition alors on affiche notre composant, sinon on affiche la page d'accueil du profil */}
      {isEditing ? (
        <EditName setIsEditing={setIsEditing} />
      ) : (
        <>
        <h1>Welcome back<br /> {fullName} !</h1>
        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
        </>
      )}
    </div>
    <h2 className="sr-only">Accounts</h2>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
        <p className="account-amount">$10,928.42</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
        <p className="account-amount">$184.30</p>
        <p className="account-amount-description">Current Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  </main>
  )
}
