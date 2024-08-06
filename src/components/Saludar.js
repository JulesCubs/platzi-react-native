import React from 'react'
import { Text } from 'react-native'

const Saludar = ({name="Perritos"}=props) => {
  return (
      <Text>Hola {name}</Text>
  )
}

// Saludar.defaultProps = {
//   name: "Perritos"
// }

export default Saludar
