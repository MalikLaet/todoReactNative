import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/home'
import Cadastro  from '../screens/cadastro'
import Login  from '../screens/login'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen} = createNativeStackNavigator()

export  function AccountRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='Home' component={Home}/>
      <Screen name='Cadastro' component={Cadastro}/>
      <Screen name='Login' component={Login}/>

    </Navigator>
  )
}
