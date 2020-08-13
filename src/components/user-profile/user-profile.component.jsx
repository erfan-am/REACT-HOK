import React from 'react';
import With from '../../With';

const UserProfile = ({ name, email,data }) =>{ 
 
  return(
  <div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
    Posts:
        {data && data.map(post=>(
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
  </div>
);
}
export default With(UserProfile)
