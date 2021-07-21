import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ScrollView,
	Text,
	View,
	Modal,
	StyleSheet,
	Pressable,
	TouchableOpacity
} from "react-native";

import { withTheme } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import { getComments, setValue } from "../../../store/actions/posts";
import OnLayout from "../../../Components/OnLayout";
import { IComment } from "../../../Types/IComment";
import { State } from "../../../store/reducers";

const CommentsModal = props => {
	const { colors, fonts } = props.theme;
	const dispatch = useDispatch();

	const { item } = useSelector<State, any>(c => c.posts);

	if (!item) return null;

	const closeModal = () => {
		dispatch(setValue({ item: null }));
	};

	return (
		<OnLayout style={{ flex: 1 }}>
			{({ width, height }) => (
				<Modal
					animationType="slide"
					transparent={true}
					visible={true}
					onRequestClose={closeModal}
				>
					<View style={[styles.centeredView]}>
						<View style={[styles.modalView, { width: width }]}>
							<TouchableOpacity
								style={{ position: "absolute", top: 10, right: 10 }}
								onPress={() => closeModal()}
							>
								<IconMC name="close" size={26} color={colors.danger} />
							</TouchableOpacity>
							<ScrollView style={{ flex: 1 }}>
								{(item.comments || []).map((c: IComment) => (
									<View style={{ padding: 10, margin: 10 }}>
										<Text>{c.email}</Text>
										<Text>{c.name}</Text>
										<Text>{c.body}</Text>
									</View>
								))}
							</ScrollView>
						</View>
					</View>
				</Modal>
			)}
		</OnLayout>
	);
};

export default withTheme(CommentsModal);

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10
	},
	modalView: {
		flex: 1,
		backgroundColor: "white",
		paddingVertical: 35,
		alignItems: "center",
		position: "relative",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	}
});
