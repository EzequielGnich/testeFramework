import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
	container: ViewStyle;
	wrapper: ViewStyle;
	wrapperIndice: ViewStyle;
	wrapperTitle: ViewStyle;
	title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
		flexWrap: "wrap",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 5
	},
	wrapper: {
		flex: 1,
		margin: 5,
		padding: 8,
		minWidth: 120,
		minHeight: 120,
		borderRadius: 5,
		alignItems: "center",
		position: "relative",
		backgroundColor: "#FFF",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	},
	wrapperIndice: {
		position: "absolute",
		width: 20,
		height: 20,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		top: 10,
		left: 10
	},
	wrapperTitle: {
		width: "100%",
		minHeight: 20,
		padding: 5,
		backgroundColor: "#fff",
		borderRadius: 5,
		marginTop: 10
	},
	title: {
		fontSize: 16,
		textAlign: "center"
	}
});

export default styles;
