import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, RefreshControl, Text, View } from "react-native";

import { withTheme } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { State } from "../../../store/reducers";
import { getAlbumsByUser, setValue } from "../../../store/actions/albums";

import OnLayout from "../../../Components/OnLayout";
import Header from "../../../Components/Header";
import ListItem from "./ListItem";
import Loading from "../../../Components/Loading";

const Details = props => {
	const { id } = props.route.params;
	const { colors, fonts } = props.theme;

	const dispatch = useDispatch();
	const { items, loading } = useSelector<State, any>(c => c.albums);

	const load = () => {
		dispatch(getAlbumsByUser(id));
	};

	useEffect(() => {
		dispatch(setValue({ items: [] }));
		load();
	}, [id]);

	return (
		<OnLayout style={{}}>
			{({ width, height }) => (
				<>
					<Header title="Albums" />
					{loading.getAll ? (
						<Loading loading={loading.getAll} />
					) : (
						<FlatList
							data={items || []}
							keyExtractor={item => item.id}
							renderItem={({ item }) => (
								<ListItem item={item} colors={colors} />
							)}
							refreshControl={
								<RefreshControl refreshing={loading.getAll} onRefresh={load} />
							}
							ListEmptyComponent={
								<View
									style={{
										width: width,
										height: height,
										marginTop: -60
									}}
								>
									<View style={{ flex: 1 }} />
									<View
										style={{
											flex: 1,
											alignItems: "center",
											justifyContent: "center"
										}}
									>
										<Text
											style={{
												color: colors.warning,
												fontSize: 18,
												fontFamily: fonts.medium.fontFamily,
												fontWeight: fonts.medium.fontWeight
											}}
										>
											"Esse usuário ainda não possui albums"
										</Text>
									</View>
									<View
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
											alignItems: "center",
											padding: 25
										}}
									>
										<IconMC
											name="help-rhombus"
											size={32}
											color={colors.secondary}
										/>
										<Text
											style={{
												textAlign: "center",
												fontFamily: fonts.light.fontFamily
											}}
										>
											Você pode clicar na tela e arrastar para baixo para
											recarregar a lista
										</Text>
									</View>
								</View>
							}
						/>
					)}
				</>
			)}
		</OnLayout>
	);
};

export default withTheme(Details);
