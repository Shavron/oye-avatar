# oye-avatar

> Now use avatar in just one click

[![NPM](https://img.shields.io/npm/v/oye-avatar.svg)](https://www.npmjs.com/package/oye-avatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Available Scripts

In the project directory, you can run:

## react-horizontal-strip-datepicker

A simple react component for Avatar
![Example](https://i.imgur.com/05MV0Iq.png)

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

Available Props are

| Prop       | Type   | Default |
| ---------- | ------ | ------- |
| name       | string | avatar  |
| gender     | string | male    |
| width      | number | 200     |
| shape      | string | square  |
| background | string | #fff    |
| onhover    | string | shine   |
| className  | string | ""      |

## License

MIT © [Shavron](https://github.com/Shavron)
