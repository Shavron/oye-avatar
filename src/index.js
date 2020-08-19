import React from 'react'
import './OyeAvatar.css'

function OyeAvatar({
  width,
  name,
  height,
  shape,
  background,
  onhover,
  gender,
  className
}) {
  const style = {
    width: parseInt(width) + 'px',
    height: parseInt(height ? height : width) + 'px',
    background: background,
    borderRadius: shape === 'circle' ? '50%' : '0px'
  }

  return (
    <div className={`hover__${onhover} ${className}`}>
      <figure>
        <img
          src={`//www.vlsitechnologies.com/api/get_oye_avatar.php?name=${name}&gender=${gender}`}
          style={style}
          alt='avatar'
        />
      </figure>
    </div>
  )
}
OyeAvatar.defaultProps = {
  width: '75',
  name: 'Avtar',
  shape: 'circle',
  background: '#fff',
  onhover: '',
  gender: 'female',
  className: ''
}

export default OyeAvatar
