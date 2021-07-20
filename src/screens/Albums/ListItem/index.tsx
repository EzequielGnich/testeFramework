import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import { IAlbums } from "../../../Types/IAlbums";

import styles from "./styles";

interface IItem {
	item: IAlbums;
	colors: any;
	handlePress: (id) => void;
}

const ListItem = ({ item, colors, handlePress }: IItem) => {
	return (
		<Surface style={[styles.indicesContainer]}>
			<View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
				<IconMC
					name="face"
					size={36}
					color={colors.secondary}
					style={{ marginRight: 10 }}
				/>
				<View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
					<Text style={{ fontSize: 16, fontWeight: "bold" }}>Usuário: </Text>
					<Text style={{ paddingTop: 2 }}>{item.userId}</Text>
				</View>
				<TouchableOpacity onPress={() => handlePress(item.userId)}>
					<IconMC
						name="chevron-right-circle-outline"
						size={32}
						color={colors.secondary}
						style={{ marginRight: 10 }}
					/>
				</TouchableOpacity>
			</View>
		</Surface>
	);
};

export default ListItem;
