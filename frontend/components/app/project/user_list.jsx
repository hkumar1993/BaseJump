import React from 'react'
import UserIconDisplay from '../user_icon_display'
const UserList = ({users, teamMembers}) => {
  return (
    <div className='user-list'>
      <ul>
        {
          users.map(user => teamMembers.includes(user.id) ?
          <li key={user.id}><UserIconDisplay user={user} size={30}/></li>
            :
          '')
        }
      </ul>
      <a className='btn btn-normal'>Add/Remove People...</a>
    </div>
  )
}

export default UserList
