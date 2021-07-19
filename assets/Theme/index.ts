import { DefaultTheme } from "react-native-paper";

import configureFonts from "../Font";

export const theme = {
	...DefaultTheme,
	fonts: configureFonts(),
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: "#f50057",
		secondary: "#ff5983",
		danger: "#d50000",
		info: "#536dfe",
		success: "#00c853",
		warning: "#ff6d00"
	}
};
