import React from "react";
import { ActivityIndicator, View, Text } from "react-native";

import styles from "./styles";

interface Props {
	loading: boolean;
}

const Loading = ({ loading }: Props) => {
	if (!loading) return null;

	return (
		<View style={styles.root}>
			<View style={[styles.container, styles.horizontal]}>
				<ActivityIndicator size="large" color="#3C80FF" />
				<Text style={styles.text}>Carregando...</Text>
			</View>
		</View>
	);
};

export default Loading;
