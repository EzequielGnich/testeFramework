import React, { ReactNode } from "react";
import {
	View,
	TouchableOpacity,
	TextProps,
	ViewStyle,
	Text
} from "react-native";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";
import {
	useNavigation,
	useNavigationState,
	StackActions
} from "@react-navigation/native";
import { withTheme } from "react-native-paper";

interface Type {
	canGoBack?: boolean;
	title: string;
	containerStyle?: ViewStyle;
	titleProps?: Readonly<TextProps> & Readonly<{ children?: ReactNode }>;
	renderCustomHeader?: () => JSX.Element;
	handleGoBack?: () => void;
	theme: any;
}

const Header = ({
	canGoBack = true,
	title,
	containerStyle = {},
	titleProps,
	renderCustomHeader,
	handleGoBack,
	theme
}: Type) => {
	const navigation = useNavigation();
	const index = useNavigationState(s => s.index);
	const { colors } = theme;

	const renderHeader = () => (
		<View
			style={[
				styles.headerContainerStyle,
				canGoBack ? {} : { justifyContent: "center" },
				containerStyle,
				{ backgroundColor: colors.primary }
			]}
		>
			{canGoBack && (
				<TouchableOpacity
					onPress={() => {
						if (handleGoBack) handleGoBack();
						else {
							if (index === 0) {
								navigation.dispatch(StackActions.replace("Home"));
							} else {
								navigation.goBack();
							}
						}
					}}
					style={{ padding: 8 }}
				>
					<IconMC name="arrow-left" color="white" size={26} />
				</TouchableOpacity>
			)}

			<Text style={[styles.headerTextStyle]} numberOfLines={1} {...titleProps}>
				{title}
			</Text>
		</View>
	);

	return (
		<View>{renderCustomHeader ? renderCustomHeader() : renderHeader()}</View>
	);
};

export default withTheme(Header);
