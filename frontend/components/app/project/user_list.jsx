import React from 'react'

const UserList = ({users}) => {
  return (
    <div className='user-list'>
      <ul>
        {
          users.map(user => <li key={user.id}><span className='btn btn-user'>{user.name.slice(0,1)}</span></li>)
        }
      </ul>
      <a className='btn btn-normal'>Add/Remove People...</a>
    </div>
  )
}

export default UserList
