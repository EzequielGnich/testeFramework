import React, { ReactNode, useEffect, useState } from "react";
import { View, TouchableOpacity, Platform, Keyboard, Text } from "react-native";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import { withTheme } from "react-native-paper";

import _ from "lodash";
import { useSelector } from "react-redux";

const Menu = props => {
	const {
		navigation: { navigate },
		state
	}: any = props;

	const { index } = state;

	const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

	const { showTabBar } = useSelector<any, any>(c => c.menu);

	useEffect(() => {
		if (Platform.OS === "android") {
			const listenerOpen = Keyboard.addListener("keyboardDidShow", e =>
				setIsKeyboardOpen(true)
			);
			const listenerClose = Keyboard.addListener("keyboardDidHide", e =>
				setIsKeyboardOpen(false)
			);
			return () => {
				listenerOpen.remove();
				listenerClose.remove();
			};
		}
	}, []);

	const handleClick = (name: string) => {
		switch (name) {
			case "Home":
				navigate(name, { screen: "Home", params: { screen: "Home" } });
				break;
			case "Posts":
				navigate(name, { screen: "Home", params: { screen: "Posts" } });
				break;
			case "Albums":
				navigate(name, { screen: "Home", params: { screen: "Albums" } });
				break;
			case "Todos":
				navigate(name, { screen: "Home", params: { screen: "Todos" } });
				break;
			default:
				navigate(name, { screen: "Home" });
				break;
		}
	};

	if (isKeyboardOpen || !showTabBar) return null;

	const { colors } = props.theme;

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-around",
				alignItems: "center",
				height: 60,
				backgroundColor: colors.primary
			}}
		>
			{[
				{
					icon: "home",
					text: "Início",
					onPress: () => handleClick("Home")
				},
				{
					icon: "post",
					text: "Postagens",
					onPress: () => handleClick("Posts")
				},
				{
					icon: "image-album",
					text: "Álbuns",
					onPress: () => handleClick("Albums")
				},
				{
					icon: "clipboard-text-outline",
					text: "À fazer",
					onPress: () => handleClick("Todos")
				}
			].map((c, i) => (
				<TouchableOpacity
					key={i.toString()}
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center"
					}}
					onPress={c.onPress}
				>
					<View
						style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
					>
						<IconMC
							name={c.icon}
							size={24}
							color={index === i ? "#fff" : "#ff5983"}
						/>
						<Text
							style={{
								fontFamily: "sans-serif",
								color: index === i ? "#fff" : "#ff5983",
								fontSize: 12
							}}
						>
							{c.text}
						</Text>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default withTheme(Menu);
