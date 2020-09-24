import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Fonts } from '../../infraestructure/Theme';
import Close from 'react-native-vector-icons/dist/Ionicons';

export default function ChatButton({
    onPress, chat
}) {
    return (
        <TouchableOpacity style={[!chat ? styles.container : styles.container2]} onPress={onPress}>
            {
                chat
                    ?
                    <Close name='close' color={'black'} size={30} style={{ marginRight: 2 }} />

                    :
                    <Icon name='comments-o' color={'black'} size={25} style={{ marginRight: 5 }} />

            }
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({


    label: {
        color: '#e85900',
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e85900',
        width: 80,
        height: 80,
        padding: 12,
        position: 'absolute',
        borderRadius: 50,
        bottom: 20,
        right: 10,
        zIndex: 11,
        elevation: 3
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e85900',
        width: 60,
        height: 60,
        padding: 12,
        position: 'absolute',
        borderRadius: 50,
        bottom: 30,
        right: 10,
        zIndex: 11,
        elevation: 3
    }
})