import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { Flex } from '../infraestructure/Theme';
import { getVersion } from 'react-native-device-info';
import { connect } from 'react-redux';
import { actionLoad } from '../infraestructure/redux/actions/load';
import ErrorPage from '../components/Error/ErrorPage';

const LoadScreen = ({ load, error }) => {
	useEffect(() => { load() }, [])

	if (error) {
		return <ErrorPage handlePress={load} />
	}
	return (
		<View style={[styles.container, Flex.alignItemsCenter, Flex.justifyCenter]}>
			<Image source={require('../assets/img/worx.white.png')} resizeMode='contain' style={{ width: 200, height: 60 }} />
			<ActivityIndicator color={'white'} />
			<Text>versión {getVersion()}</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
	},
	containerError: {
		flex: 1,
		backgroundColor: 'white'
	}
})
const mapStateToProps = (state) => ({
	error: state.loadReducer.error
})

const mapDispatchToProps = (dispatch) => ({
	load: () => dispatch(actionLoad())
})


export default connect(mapStateToProps, mapDispatchToProps)(LoadScreen)