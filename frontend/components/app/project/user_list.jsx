import React from 'react'

const UserList = ({users}) => {
  console.log(users);
  return (
    <div className='user-list'>
      <ul>
        {
          users.map(user => <li><span className='btn btn-user' key={user.id}>{user.name.slice(0,1)}</span></li>)
        }
      </ul>
      <a className='btn btn-normal'>Add/Remove People...</a>
    </div>
  )
}

export default UserList
