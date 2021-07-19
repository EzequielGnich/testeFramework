import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		backgroundColor: "rgba(0,0,0,0.5)",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flex: 1,
		elevation: 4,
		justifyContent: "center",
		paddingHorizontal: 25
	},
	container: {
		borderRadius: 5,
		backgroundColor: "white"
	},
	text: {
		fontSize: 16,
		marginBottom: 8
	},
	horizontal: {
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16
	}
});

export default styles;
