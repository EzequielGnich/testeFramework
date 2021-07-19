import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
	touchableTask: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	touchableTask: {
		flex: 1,
		padding: 5,
		marginHorizontal: 5,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		borderRadius: 2
	}
});

export default styles;
