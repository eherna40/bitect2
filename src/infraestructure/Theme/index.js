import Colors from "./Colors"
import Fonts from "./Fonts"
import Margins from "./Margins"
import Paddings from "./Paddings"
import Flex from './Flex'
// import { Header } from '@react-navigation/stack'
import { Dimensions } from 'react-native'

const Sizes = {
    // header: {
    //     big: 100,
    //     default: Header.HEIGHT
    // },
    fontSize: {
        title1: 25,
        label: 14,
    },
    statusBar: {
        backgroundColor: "#C2185B",
        // height: Constants.statusBarHeight,
      },
    width: Dimensions.get('window').width,
    height  : Dimensions.get('window').height
}



export {
    Colors,
    Fonts,
    Margins,
    Paddings,
    Sizes,
    Flex
}