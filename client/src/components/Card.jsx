import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    const [username, setUsername] = useState('')

  return (
      <div className="card sm:max-w-full bg-base-200">
          <div className="card-body">
              <h5 className="card-title mb-2.5">Start serching for a chat</h5>
              <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam autem neque voluptates distinctio debitis quae itaque, ad earum corporis labore qui.</p>
              <div className="card-actions flex items-center">
                <Link className="btn btn-secondary" to=''>Learn more</Link>
              </div>
          </div>
      </div>
  )
}

export default Card