import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Text, View, FlatList, RefreshControl } from "react-native";

import { withTheme } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { getIndicesTodos } from "../../store/actions/todos";

import { State } from "../../store/reducers";

import OnLayout from "../../Components/OnLayout";
import Item from "./Item";

const Todos = props => {
	const dispatch = useDispatch();
	const { colors, fonts } = props.theme;
	const navigation = useNavigation();

	const { indices, loading } = useSelector<State, any>(c => c.todos);

	const load = () => {
		dispatch(getIndicesTodos());
	};

	useEffect(() => {
		load();
	}, []);

	const showUserDetails = id => {
		navigation.navigate("TodosDetails", { id });
	};

	return (
		<OnLayout style={{ flex: 1 }}>
			{({ width, height }) => (
				<FlatList
					data={indices || []}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<Item item={item} colors={colors} handlePress={showUserDetails} />
					)}
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

export default withTheme(Todos);