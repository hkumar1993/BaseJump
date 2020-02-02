import React from 'react'

const UserIconDisplay = ({ user, size }) => {
  return (
    <div className='crop' style={{width: size, height: size}}>
      <img src={user.avatarUrl} className='avatar' style={{width: size}}  />
    </div>
  )
}

export default UserIconDisplay
