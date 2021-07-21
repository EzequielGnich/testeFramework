import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, View, Modal, TouchableOpacity } from "react-native";

import { withTheme } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { setValue } from "../../../store/actions/posts";

import { State } from "../../../store/reducers";
import { IComment } from "../../../Types/IComment";

import OnLayout from "../../../Components/OnLayout";

import styles from "./styles";

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
								style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
								onPress={() => closeModal()}
							>
								<IconMC name="close" size={26} color={colors.danger} />
							</TouchableOpacity>
							<ScrollView style={{ flex: 1 }}>
								{(item.comments || []).map((c: IComment) => (
									<View key={c.id} style={styles.cardContainer}>
										<View style={{ flex: 1, padding: 5 }}>
											<Text
												style={{
													fontSize: 16,
													fontFamily: fonts.medium.fontFamily
												}}
											>
												{c.name}
											</Text>
										</View>
										<View style={{ flex: 1, padding: 5 }}>
											<Text
												style={{
													textAlign: "center",
													fontFamily: fonts.regular.fontFamily,
													fontSize: 14
												}}
											>
												{c.body.replace("\n", " ")}
											</Text>
										</View>
										<View style={styles.cardFooter}>
											<Text style={{ fontFamily: fonts.light.fontFamily }}>
												{c.email}
											</Text>
										</View>
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
