import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { useFocusEffect } from "@react-navigation/native";

// import styles from "./styles";
import OnLayout from "../../Components/OnLayout";

import actions from "../../store/actions";

const Home = () => {
	const dispatch = useDispatch();

	useFocusEffect(() => {
		StatusBar.setBarStyle("light-content");

		if (Platform.OS === "android") {
			StatusBar.setBackgroundColor("#427BD780");
			StatusBar.setTranslucent(true);
		}

		dispatch(actions.menu.setValue({ showTabBar: true }));
	});

	return (
		<OnLayout style={{ flex: 1 }}>
			{({ width, height }) => (
				<View style={{ flex: 1 }}>
					<Text>Home</Text>
				</View>
			)}
		</OnLayout>
	);
};

export default Home;
