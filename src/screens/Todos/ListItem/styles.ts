import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

interface Styles {
	container: ViewStyle;
	wrapperHeader: ViewStyle;
	headerImage: ImageStyle;
	wrapperFooter: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		padding: 10,
		marginHorizontal: 6,
		marginVertical: 6,
		minHeight: 120,
		elevation: 5,
		borderRadius: 5,
		flexDirection: "row",
		backgroundColor: "#FFF"
	},
	wrapperHeader: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center"
	},
	headerImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		resizeMode: "cover"
	},
	wrapperFooter: {
		justifyContent: "center",
		alignItems: "flex-end",
		paddingHorizontal: 10
	}
});

export default styles;
