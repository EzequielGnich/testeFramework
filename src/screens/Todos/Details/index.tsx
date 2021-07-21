import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, RefreshControl, Text, View } from "react-native";

import { withTheme } from "react-native-paper";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import { State } from "../../../store/reducers";
import { getTodosByUser, setValue } from "../../../store/actions/todos";

import OnLayout from "../../../Components/OnLayout";
import Header from "../../../Components/Header";
import Item from "./Item";
import Loading from "../../../Components/Loading";
import ListEmpty from "../../../Components/ListEmptyWarning";

const Details = props => {
	const { id } = props.route.params;
	const { colors, fonts } = props.theme;

	const dispatch = useDispatch();
	const { items, loading } = useSelector<State, any>(c => c.todos);

	const load = () => {
		dispatch(getTodosByUser(id));
	};

	useEffect(() => {
		dispatch(setValue({ items: [] }));
		load();
	}, [id]);

	return (
		<OnLayout style={{}}>
			{({ width, height }) => (
				<>
					<Header title="Tarefas" />
					{loading.getAll ? (
						<Loading loading={loading.getAll} />
					) : (
						<FlatList
							contentContainerStyle={{ marginTop: 60, paddingBottom: 60 }}
							data={items || []}
							keyExtractor={item => item.id}
							renderItem={({ item }) => <Item item={item} colors={colors} />}
							refreshControl={
								<RefreshControl refreshing={loading.getAll} onRefresh={load} />
							}
							ListEmptyComponent={
								<ListEmpty
									title="Esse usuário não possui tarefas cadastradas"
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
				</>
			)}
		</OnLayout>
	);
};

export default withTheme(Details);
