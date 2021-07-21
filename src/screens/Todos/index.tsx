import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Text, View, FlatList, RefreshControl } from "react-native";

import { withTheme } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { getIndicesTodos } from "../../store/actions/todos";

import { State } from "../../store/reducers";

import OnLayout from "../../Components/OnLayout";
import Item from "./ListItem";
import ListEmpty from "../../Components/ListEmptyWarning";

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

	console.log(indices);

	const showUserDetails = id => {
		navigation.navigate("TodosDetails", { id });
	};

	return (
		<OnLayout style={{ flex: 1 }}>
			{({ width, height }) => (
				<FlatList
					contentContainerStyle={{
						padding: 10,
						marginBottom: 10
					}}
					data={indices || []}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<Item
							fonts={fonts}
							item={item}
							colors={colors}
							handlePress={showUserDetails}
						/>
					)}
					refreshControl={
						<RefreshControl refreshing={loading.getAll} onRefresh={load} />
					}
					ListEmptyComponent={
						<ListEmpty
							title="Não foi encontrado nenhum usuário ativo"
							width={width}
							height={height}
							colors={colors}
							fonts={fonts}
							icon={
								<IconMC
									name="help-rhombus"
									size={32}
									color={colors.secondary}
								/>
							}
							showWarningRefreshControl={true}
						/>
					}
				/>
			)}
		</OnLayout>
	);
};

export default withTheme(Todos);
