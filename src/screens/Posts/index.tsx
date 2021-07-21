import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	StyleSheet
} from "react-native";

import { withTheme } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { getPosts, setValue } from "../../store/actions/posts";
import { State } from "../../store/reducers";
import { IPosts } from "../../Types/IPosts";
import OnLayout from "../../Components/OnLayout";
import CommentsModal from "./CommentsModal/CommentsModal";
import Loading from "../../Components/Loading";

const Posts = props => {
	const { colors, fonts } = props.theme;
	const dispatch = useDispatch();
	const { posts, loading } = useSelector<State, any>(c => c.posts);

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	const handleShowComments = post => {
		dispatch(setValue({ item: post }));
	};

	return (
		<OnLayout style={{ flex: 1 }}>
			{({ width, height }) => (
				<>
					{loading.getAll ? (
						<Loading loading={loading.getAll} />
					) : (
						<ScrollView style={{ padding: 10 }}>
							{(posts || []).map((c: IPosts) => (
								<View
									key={c.id}
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
													uri: `https://lorempixel.com/400/200/people/${c.userId}/`
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
												{c.user.name}
											</Text>
											<Text style={{ fontFamily: fonts.light.fontFamily }}>
												{c.user.email}
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
											{c.title}
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
										<TouchableOpacity
											onPress={() => handleShowComments(c)}
											style={{ flexDirection: "row", alignItems: "center" }}
										>
											<IconMC name="comment" size={16} color={colors.primary} />
											<Text style={{ paddingBottom: 2, marginLeft: 2 }}>
												{c.comments.length}
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							))}
							<CommentsModal />
						</ScrollView>
					)}
				</>
			)}
		</OnLayout>
	);
};

export default withTheme(Posts);

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	modalView: {
		flex: 1,
		backgroundColor: "white",
		padding: 35,
		alignItems: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonOpen: {
		backgroundColor: "#F194FF"
	},
	buttonClose: {
		backgroundColor: "#2196F3"
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
