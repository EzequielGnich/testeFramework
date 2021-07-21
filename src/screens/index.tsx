import React, { useRef } from "react";
import { Text, View } from "react-native";
import {
	NavigationContainer,
	NavigationContainerRef
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Menu from "./Menu";
import Posts from "./Posts";

import Albums from "./Albums";
import AlbumsDetail from "./Albums/Details";
import Photos from "./Albums/Details/Photos";

import Todos from "./Todos";
import TodosDetails from "./Todos/Details";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PostsScreens = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Posts" component={Posts} />
		</Stack.Navigator>
	);
};

const AlbumsScreens = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Albums" component={Albums} />
			<Stack.Screen name="AlbumsDetail" component={AlbumsDetail} />
			<Stack.Screen name="Photos" component={Photos} />
		</Stack.Navigator>
	);
};

const TodosScreens = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Todos" component={Todos} />
			<Stack.Screen name="TodosDetails" component={TodosDetails} />
		</Stack.Navigator>
	);
};

const App = () => {
	return (
		<Tab.Navigator tabBar={props => <Menu {...props} />}>
			<Tab.Screen name="Posts" component={PostsScreens} />
			<Tab.Screen name="Albums" component={AlbumsScreens} />
			<Tab.Screen name="Todos" component={TodosScreens} />
		</Tab.Navigator>
	);
};

const Root = () => {
	const routeNameRef = useRef<string>();
	const navigationRef = useRef<NavigationContainerRef>();

	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer
				fallback={<Text>Loading...</Text>}
				ref={navigationRef}
				onReady={() => {
					routeNameRef.current = navigationRef.current.getCurrentRoute().name;
				}}
				onStateChange={() => {
					const previousRouteName = routeNameRef.current;
					const currentRouteName = navigationRef.current.getCurrentRoute().name;

					// Save the current route name for later comparison
					routeNameRef.current = currentRouteName;
				}}
			>
				<Stack.Navigator initialRouteName="Home" headerMode="none">
					<Stack.Screen name="Home" component={App} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

export default Root;
