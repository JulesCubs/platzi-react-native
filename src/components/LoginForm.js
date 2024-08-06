import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const LoginForm = () => {
  return (
    <View>
        <Text>Este es un componente</Text>
        <TextInput placeholder='Email'></TextInput>
        <TextInput placeholder='Password'></TextInput>
        <Button title={"Enviar"} onPress={()=>console.log("Enviar")}/>
    </View>
    
  )
}

export default LoginForm
