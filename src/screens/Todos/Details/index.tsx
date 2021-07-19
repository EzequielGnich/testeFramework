import React, { useEffect } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OnLayout from "../../../Components/OnLayout";
import { getTodosByUser } from "../../../store/actions/todos";
import { State } from "../../../store/reducers";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { withTheme } from "react-native-paper";

const Details = props => {
	const { id } = props.route.params;
	const { colors, fonts } = props.theme;

	const dispatch = useDispatch();
	const { items, loading } = useSelector<State, any>(c => c.todos);

	const load = () => {
		dispatch(getTodosByUser(id));
	};

	useEffect(() => {
		load();
	}, [id]);

	return (
		<OnLayout style={{ flex: 1 }}>
			{({ width, height }) => (
				<FlatList
					data={items || []}
					keyExtractor={item => item.id}
					renderItem={({ item }) => <Text>{item.id}</Text>}
					refreshControl={
						<RefreshControl refreshing={loading.getAll} onRefresh={load} />
					}
					ListEmptyComponent={
						<View
							style={{
								width: width,
								height: height
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
									"Não foi encontrado nenhum usuário ativo"
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
									Você pode clicar na tela e arrastar para baixo para recarregar
									a lista
								</Text>
							</View>
						</View>
					}
				/>
			)}
		</OnLayout>
	);
};

export default withTheme(Details);
