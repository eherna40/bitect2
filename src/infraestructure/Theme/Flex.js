import { StyleSheet } from 'react-native'

const Flex = StyleSheet.create({
    alignItemsCenter:{
        alignItems: 'center'
    },
    alignItemsEnd:{
        alignItems: 'flex-end'
    },
    justifyCenter:{
        justifyContent: 'center'
    },
    justifyEnd:{
        justifyContent: 'flex-end'
    },
    row:{
        flexDirection: 'row'
    },
    justifySpaceBetween:{
        justifyContent: 'space-between'
    },
    wrap: {
        flexWrap: 'wrap'
    }
})

export default Flex