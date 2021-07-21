import { StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";

interface Styles {
	headerContainerStyle: ViewStyle;
	headerTextStyle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	headerTextStyle: {
		fontSize: 18,
		color: "white",
		paddingHorizontal: 16
	},
	headerContainerStyle: {
		flexDirection: "row",
		alignItems: "center",
		height: 50,
		paddingHorizontal: 16,
		width: "100%",
		marginLeft: Platform.select({ web: 300, default: 0 })
	}
});

export default styles;
