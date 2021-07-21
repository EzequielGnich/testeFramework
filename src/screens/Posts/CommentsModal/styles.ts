import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
	centeredView: ViewStyle;
	modalView: ViewStyle;
	cardContainer: ViewStyle;
	cardFooter: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	modalView: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		position: "relative",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	cardContainer: {
		padding: 10,
		margin: 10,
		minHeight: 200,
		elevation: 5,
		backgroundColor: "#fff",
		borderRadius: 5
	},
	cardFooter: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		marginRight: 5
	}
});

export default styles;
