import React, { useEffect } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { withTheme } from "react-native-paper";

import { getPhotosByAlbums } from "../../../../store/actions/albums";

import Header from "../../../../Components/Header";
import OnLayout from "../../../../Components/OnLayout";

import { State } from "../../../../store/reducers";
import { IPhotos } from "../../../../Types/IPhotos";

import styles from "./styles";
import Loading from "../../../../Components/Loading";

const Photos = props => {
	const { id } = props.route.params;
	const { colors, fonts } = props.theme;

	const dispatch = useDispatch();

	const { photos, loading } = useSelector<State, any>(c => c.albums);

	useEffect(() => {
		dispatch(getPhotosByAlbums(id));
	}, []);

	return (
		<OnLayout>
			{({ width, height }) => (
				<>
					<Header title="Fotos" />
					{loading.getPhotos ? (
						<Loading loading={loading.getPhotos} />
					) : (
						<ScrollView style={{ flex: 1 }}>
							<View style={styles.container}>
								{(photos || []).map((c: IPhotos) => (
									<View key={c.id} style={styles.wrapper}>
										<View
											style={[
												styles.wrapperIndice,
												{ backgroundColor: colors.primary }
											]}
										>
											<Text style={{ color: "#fff" }}>{c.albumId}</Text>
										</View>
										<ImageBackground
											source={{ uri: c.thumbnailUrl }}
											resizeMode="cover"
											imageStyle={{ borderRadius: 20 }}
											style={{ width: 90, height: 90 }}
										/>
										<View style={styles.wrapperTitle}>
											<Text
												style={[
													styles.title,
													{ fontFamily: fonts.light.fontFamily }
												]}
											>
												{c.title}
											</Text>
										</View>
									</View>
								))}
							</View>
						</ScrollView>
					)}
				</>
			)}
		</OnLayout>
	);
};

export default withTheme(Photos);
