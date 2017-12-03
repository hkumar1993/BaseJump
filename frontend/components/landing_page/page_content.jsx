import React from 'react'
// import BasecampImage from '../../images/basejump_image.jpg'

const BasecampImage = 'https://3.basecamp-static.com/bcxhq/assets/landing/jtbd/hof-cropped@2x-39cc220172880bf82747f19781a38cb6b3343f2b932bd3aab5742df603910be2.jpg'

const PageContent = () => (
  <div className='landing-page-main'>
    <img src={BasecampImage}/>
    <h1>We've been expecting you.</h1>
    <p>All growing businesses run into the same fundamental problems. Hair on fire, buried under email, stuff everywhere. The good news? <a href='#/login'>Basejump solves them.</a></p>
  </div>
)

export default PageContent
