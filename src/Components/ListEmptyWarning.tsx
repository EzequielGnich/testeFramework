import React from "react";
import { Text, View } from "react-native";

interface IListEmpty {
	width: number;
	height: number;
	fonts: any;
	colors: any;
	icon: React.ReactNode;
	title: string;
	showWarningRefreshControl: boolean;
}

const ListEmpty = ({
	width,
	height,
	fonts,
	colors,
	icon,
	title,
	showWarningRefreshControl
}: IListEmpty) => {
	return (
		<View
			style={{
				width: width,
				height: height
			}}
		>
			<View style={{ flex: 1 }} />
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<Text
					style={{
						color: colors.warning,
						fontSize: 18,
						fontFamily: fonts.medium.fontFamily,
						fontWeight: fonts.medium.fontWeight
					}}
				>
					{title}
				</Text>
			</View>
			{showWarningRefreshControl ? (
				<View
					style={{
						flex: 1,
						flexDirection: "column",
						justifyContent: "flex-end",
						alignItems: "center",
						padding: 25
					}}
				>
					{icon}
					<Text
						style={{
							textAlign: "center",
							fontFamily: fonts.light.fontFamily
						}}
					>
						Você pode clicar na tela e arrastar para baixo para recarregar a
						lista
					</Text>
				</View>
			) : null}
		</View>
	);
};

export default ListEmpty;
