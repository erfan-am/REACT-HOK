import React from 'react';

import UserProfile from './components/user-profile/user-profile.component';
import UserList from './components/user-list/user-list.component';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <UserList 
        dataUrl="http://jsonplaceholder.typicode.com/users"
      />
      <UserProfile
        name='Erfan'
        email='erfanam582@gmail.com'
        dataUrl="http://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
