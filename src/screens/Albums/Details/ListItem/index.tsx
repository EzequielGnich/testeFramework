import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { Surface } from "react-native-paper";
import { IAlbums } from "../../../../Types/IAlbums";
import { useNavigation } from "@react-navigation/native";

interface IItem {
	colors: any;
	item: IAlbums;
}
const ListItem = ({ item, colors }: IItem) => {
	const navigation = useNavigation();

	return (
		<Surface
			style={{
				flex: 1,
				marginVertical: 10,
				marginHorizontal: 10,
				elevation: 4,
				borderRadius: 2
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						padding: 20,
						alignItems: "center"
					}}
				>
					<View>
						<IconMC name="image-album" size={32} color={colors.secondary} />
					</View>
					<View style={{ flex: 1, paddingHorizontal: 5 }}>
						<Text style={{ paddingHorizontal: 5 }}>{item.title}</Text>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate("Photos", { id: item.id })}
					>
						<IconMC
							name="chevron-right-circle-outline"
							size={32}
							color={colors.secondary}
							style={{ marginRight: 10 }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</Surface>
	);
};

export default ListItem;
