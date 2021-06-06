import {StyleSheet} from 'react-native'
import fontFamily from '../../styles/fontFamily'
import {textScale} from '../../styles/responsiveSize'


export default StyleSheet.create({
    txt:{
        textAlign: 'center',
        fontFamily:fontFamily.regular,
        fontSize:textScale(30),
        marginVertical:10
        
      }

})
