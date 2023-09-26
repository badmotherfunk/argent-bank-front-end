import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
  return (
    <div className="error-container">
    <h1 className="error-title">Error 404</h1>
    <p className="error-text">An error has occurred, the page you're looking for doesn't exist.</p>
    <Link to='/' style={{ textDecoration: 'none' }}>
        <p className="error-link">Back to home page</p>
    </Link>
</div>
  )
}
