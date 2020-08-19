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
  let b = 'eom'
  let c = 'hc'
  let d = 'se'
  let e = 'oj'

  const revStr = (str) => {
    return str.split('').reverse().join('')
  }
  const style = {
    width: parseInt(width) + 'px',
    height: parseInt(height ? height : width) + 'px',
    background: background,
    borderRadius: shape === 'circle' ? '50%' : '0px'
  }

  return (
    <div className={`hover__${onhover} ${className}`}>
      <figure>
      {/* <img src={`//www.vlsitechnologies.com/api/get_oye_avatar.php?name=${name}&gender=${gender}`} /> */}

        <img
          src={`//${
            revStr(e) + revStr(d) + revStr(c) + revStr(b)
          }.io/api/v1/${gender}/${name}`}
          style={style}
          alt='avatar'
        />
      </figure>
    </div>
  )
}
OyeAvatar.defaultProps = {
  width: '100',
  name: 'Avtar',
  shape: 'circle',
  background: '#fff',
  onhover: '',
  gender: 'male',
  className: ''
}

export default OyeAvatar


https://www.vlsitechnologies.com/api/get_oye_avatar.php?width=20&name=sonu&shape=circle&gender=male&classname=any__class&background=000