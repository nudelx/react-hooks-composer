import { useState } from 'react'

export default hooks => {
  function uCFL(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return Object.keys(hooks).reduce((all, key) => {
    const t = useState(hooks[key])
    all[key] = t[0]
    all[`set${uCFL(key)}`] = t[1]
    return all
  }, {})
}
