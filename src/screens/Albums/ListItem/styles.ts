import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

interface Styles {
	container: ViewStyle;
	cardHeader: ViewStyle;
	cardImage: ImageStyle;
	cardFooter: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		padding: 10,
		marginHorizontal: 6,
		marginVertical: 6,
		minHeight: 120,
		elevation: 5,
		borderRadius: 5,
		backgroundColor: "#FFF",
		flexDirection: "row"
	},
	cardHeader: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center"
	},
	cardImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		resizeMode: "cover"
	},
	cardFooter: {
		justifyContent: "center",
		paddingHorizontal: 10
	}
});

export default styles;
