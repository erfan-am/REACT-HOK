import React from 'react'
import With from '../../With';

const Userlist = ({data}) => {
  return (
    <div className="container user-list">
        <h1>user List</h1>
        {data && data.map(user=>(
          <div className="post" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  )
}

export default With(Userlist)
