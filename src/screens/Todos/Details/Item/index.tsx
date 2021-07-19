import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Surface } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { ITodos } from "../../../../Types/ITodos";

import styles from "./styles";

interface IItem {
	colors: any;
	item: ITodos;
}
const Item = ({ item, colors }: IItem) => {
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
					<View style={{ flex: 1 }}>
						<IconMC
							name="format-list-checks"
							size={32}
							color={item.completed ? colors.success : colors.warning}
						/>
					</View>
					<View style={{ flex: 5 }}>
						<Text style={{}}>{item.title}</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						alignItems: "center",
						padding: 10
					}}
				>
					{item.completed ? (
						<TouchableOpacity
							style={[
								styles.touchableTask,
								{ backgroundColor: colors.warning }
							]}
						>
							<IconMC
								name="restore"
								size={24}
								color="#fff"
								style={{ marginRight: 5 }}
							/>
							<Text style={{ color: "#fff" }}>Reverter tarefa</Text>
						</TouchableOpacity>
					) : (
						<>
							<TouchableOpacity
								style={[
									styles.touchableTask,
									{ backgroundColor: colors.success }
								]}
							>
								<IconMC
									name="checkbox-marked-circle-outline"
									size={24}
									color="#fff"
									style={{ marginRight: 5 }}
								/>
								<Text style={{ color: "#fff" }}>Concluir</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.touchableTask,
									{ backgroundColor: colors.danger }
								]}
							>
								<IconMC
									name="cancel"
									size={24}
									color="#fff"
									style={{ marginRight: 5 }}
								/>
								<Text style={{ color: "#fff" }}>Cancelar</Text>
							</TouchableOpacity>
						</>
					)}
				</View>
			</View>
		</Surface>
	);
};

export default Item;
