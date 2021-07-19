import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Styles {
	indicesContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	indicesContainer: {
		paddingHorizontal: 15,
		paddingVertical: 10,

		marginVertical: 10,
		marginHorizontal: 10,

		borderRadius: 8,
		borderLeftWidth: 4,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	}
});

export default styles;
