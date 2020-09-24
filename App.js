/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import * as Sentry from '@sentry/react-native';
import { store, persistor } from './src/infraestructure/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoadScreen from './src/screens/LoadScreen';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './src/infraestructure/services/RootNavigation';
import SelectScreen from './src/screens/SelectScreen';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

Sentry.init({
	dsn: 'https://131d534f56ca4b9c850bcb51c9e9b794@o254139.ingest.sentry.io/5439121',
});

const Stack = createStackNavigator();

const App = () => {
	useKeepAwake();
	return <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<StatusBar
				hidden={true} />
			<NavigationContainer ref={navigationRef} >
				<Stack.Navigator>
					<Stack.Screen name="Load" component={LoadScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Select" component={SelectScreen} options={{ headerShown: false }} />
					{/* <Stack.Screen name="Home" component={HomeScreen} options={{
						header: () => <Header />
					}} /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</PersistGate>
	</Provider>
};

export default App;
