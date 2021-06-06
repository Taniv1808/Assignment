import React from 'react'
import navigationStrings from '../contants/navigationStrings'
import { DetailPage, HomePage } from '../Screens'

export default function(Stack){
    return(
      <>  
        <Stack.Screen
        name={navigationStrings.HOMEPAGE}
        component={HomePage}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.DETAILS}
        component={DetailPage}
        options={{headerShown:false}}/>
      </>  
    )
}