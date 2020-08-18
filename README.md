# oye-avatar

> now use avatar in just one click

[![NPM](https://img.shields.io/npm/v/oye-avatar.svg)](https://www.npmjs.com/package/oye-avatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save oye-avatar
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import OyeAvatar from 'oye-avatar'
import 'oye-avatar/dist/index.css'

ReactDOM.render(
  <React.StrictMode>
    <OyeAvatar
      name='John'
      gender='male'
      width='200'
      shape='circle'
      background='blue'
      onhover='shine'
      className='__any__class'
    />
  </React.StrictMode>,
  document.getElementById('root')
)
```

## License

MIT © [Shavron](https://github.com/Shavron)
