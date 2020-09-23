import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { Flex } from '../../infraestructure/Theme';
import H3 from '../paragraph/H3';
import P from '../paragraph/P';

const ErrorPage = ({ handlePress }) => {
    return <View style={[styles.container, Flex.alignItemsCenter, Flex.justifyCenter]}>
        <Image source={require('../../assets/img/empty.error.png')} resizeMode='contain' style={{ width: 200, height: 200 }} />
        <H3 color='#333' text='UPS!!' />
        <P color='#333' text='Ha ocurrido un error, prueba en reintentar. Si el problema persiste ponte en contacto con nosotros' />
        <Button title='Reintentar' color='#333' onPress={handlePress} />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})

export default ErrorPage