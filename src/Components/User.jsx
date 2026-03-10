import React from 'react'

const User = () => {
  return (
    <div>
      {Users.map(
        (User) => (
         <div key={User.id}>
              <h3>{User.name}</h3>
              <p>{User.age}</p>
              <p>{User.role}</p>
            </div>
        )
      )}
    </div>
  )
}

export default User
