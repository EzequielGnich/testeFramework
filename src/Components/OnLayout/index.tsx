import React, { useState } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";

import { useIsFocused } from "@react-navigation/native";

interface Props {
	children: Function;
	style?: ViewStyle;
	colors?: string[];
}

const OnLayout = ({ children, style, ...props }: Props) => {
	const isFocused = useIsFocused();
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	const onLayout = (e: LayoutChangeEvent) => {
		setDimensions(e.nativeEvent.layout);
	};

	let styles: ViewStyle = {
		flex: 1,
		backgroundColor: "#ffff",
		display: isFocused ? "flex" : "none"
	};

	return (
		<View onLayout={onLayout} style={[styles, style]} {...props}>
			{children(dimensions)}
		</View>
	);
};

export default OnLayout;
