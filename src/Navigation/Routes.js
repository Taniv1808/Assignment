import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import MainStack from './MainStack'
import {createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer>
          <Stack.Navigator>
            {MainStack(Stack)}  
          </Stack.Navigator>
        </NavigationContainer>
      );
}