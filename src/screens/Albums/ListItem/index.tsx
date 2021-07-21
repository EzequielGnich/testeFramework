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
	const uri = `https://lorempixel.com/400/200/people/${item.userId}/`;
	return (
		<View key={item.id} style={styles.container}>
			<View style={{ flex: 1 }}>
				<View style={styles.cardHeader}>
					<View style={{ marginRight: 5 }}>
						<Image
							source={{
								uri
							}}
							style={styles.cardImage}
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
			</View>
			<View style={styles.cardFooter}>
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
