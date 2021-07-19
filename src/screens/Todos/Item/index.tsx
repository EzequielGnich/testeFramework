import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import { ITodos } from "../../../Types/ITodos";

import styles from "./styles";

interface IItem {
	item: ITodos;
	colors: any;
	handlePress: (id) => void;
}

const Item = ({ item, colors, handlePress }: IItem) => {
	return (
		<Surface
			style={[
				styles.indicesContainer,
				{ borderLeftColor: item.completed ? colors.success : colors.warning }
			]}
		>
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

export default Item;
