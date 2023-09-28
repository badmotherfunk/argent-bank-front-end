import React from 'react'
import './user.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userProfile } from '../../features/profile/profileSlice'

export default function User() {
  document.title = "Argent Bank - Profile"

  const dispatch = useDispatch()
  const { user, isSuccess} = useSelector( (state) => state.auth)
  const { firstName, lastName } = useSelector( (state) => state.profile.user)
  useEffect(() => {
    if(isSuccess || user) {
      dispatch(userProfile())
    }
  }, [user, isSuccess, dispatch])

    
  return (
    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br /> {firstName} {lastName} !</h1>
      <button className="edit-button">Edit Name</button>
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
