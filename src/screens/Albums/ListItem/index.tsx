import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import { IAlbums } from "../../../Types/IAlbums";

import styles from "./styles";

interface IItem {
	item: IAlbums;
	colors: any;
	fonts: any;
	handlePress: (id) => void;
}

const ListItem = ({ item, colors, fonts, handlePress }: IItem) => {
	return (
		<View
			key={item.id}
			style={{
				padding: 10,
				marginHorizontal: 6,
				marginVertical: 6,
				minHeight: 120,
				elevation: 5,
				borderRadius: 5,
				backgroundColor: "#FFF"
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					alignItems: "center"
				}}
			>
				<View style={{ marginRight: 5 }}>
					<Image
						source={{
							uri: `https://lorempixel.com/400/200/people/${item.userId}/`
						}}
						style={{
							width: 60,
							height: 60,
							borderRadius: 30,
							resizeMode: "cover"
						}}
					/>
				</View>
				<View>
					<Text
						style={{
							fontSize: 16,
							fontFamily: fonts.regular.fontFamily
						}}
					>
						{item.user.name}
					</Text>
					<Text style={{ fontFamily: fonts.light.fontFamily }}>
						{item.user.email}
					</Text>
				</View>
			</View>
			<View style={{ flex: 1, padding: 10 }}>
				<Text
					style={{
						fontSize: 16,
						fontFamily: fonts.medium.fontFamily
					}}
				>
					{item.title}
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					justifyContent: "flex-end",
					flexDirection: "row",
					paddingHorizontal: 10
				}}
			>
				<TouchableOpacity onPress={() => handlePress(item.userId)}>
					<IconMC
						name="chevron-right-circle-outline"
						size={32}
						color={colors.secondary}
						style={{ marginRight: 10 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ListItem;
