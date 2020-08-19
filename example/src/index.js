import React from 'react'
import ReactDOM from 'react-dom'
import OyeAvatar from 'oye-avatar'
// import 'oye-avatar/dist/index.css'

ReactDOM.render(
  <React.StrictMode>
    <OyeAvatar
      name='abhilash'
      gender='male'
      width='200'
      shape='circle'
      background='blue'
      onhover='zoom'
      className='__any__class'
    />
    <OyeAvatar
      name='John'
      gender='male'
      width='200'
      shape='circle'
      background='blue'
      onhover='shine'
      className='__any__class'
    />
    <OyeAvatar
      name='Malia'
      gender='female'
      width='200'
      shape='circle'
      background='blue'
      onhover='shine'
      className='__any__class'
    />
  </React.StrictMode>,
  document.getElementById('root')
)
