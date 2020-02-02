import React from 'react'
// import BasecampImage from '../../images/basejump_image.jpg'

const BasecampImage = 'https://res.cloudinary.com/basejump/image/upload/v1580630150/basecamp-main.jpg'

const PageContent = () => (
  <div className='landing-page-main'>
    <img src={BasecampImage}/>
    <h1>We've been expecting you.</h1>
    <p>All growing businesses run into the same fundamental problems. Hair on fire, buried under email, stuff everywhere. The good news? <a href='#/login'>Basejump solves them.</a></p>
  </div>
)

export default PageContent
