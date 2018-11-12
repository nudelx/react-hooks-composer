
<img width="200px" height="200px" style="max-width: 100%; margin-right: auto;  margin-left: auto; display: block;" src="https://raw.githubusercontent.com/nudelx/react-hooks-composer/master/img/react.jpg" >
<img width="200px" height="200px" style="max-width: 100%; margin-right: auto;  margin-left: auto; display: block;" src="https://raw.githubusercontent.com/nudelx/react-hooks-composer/master/img/img.png" >

# React Hooks Composer

Tiny Javascript composition over React Hooks ( React > 16.7.0 ).
Yet another way to create your hooks :)


## Before

```js
import React from 'react'

export default function Test(props) {
  const [name, setName] = React.useState('Mary')
  const [surname, setSurname] = React.useState('Poppins')
  const [language, setLanguage] = React.useState('🇬🇧')
}
```

## After

```js
import React from 'react'
import useHooksComposer from 'hooks-composer'

export default function Test(props) {
  const { name, surname, language, setName, setSurname, setLanguage } = useHooksComposer({
    name: 'Mary',
    surname: 'Poppins',
    language: '🇬🇧'
  })
}
```

## How it works

Instead of creating your hooks line by line and defining the pairs for value and its setter, you can pass a static object, where each key is the name of your hook variable and the value its initial state. The composer will create an independent hook for each key and will return an object with all values and setters named according to the convention.

Example:

```js
import React from 'react'
import useHooksComposer from 'hooks-composer'

export function Test(props) {
  const { count, setCount } = useHooksComposer({ count: 0 })
}
```

## Installation
```
 npm i hooks-composer or yarn add hooks-composer
```
---

Made with ♥ by nudelx
