import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import { persistReducer, createTransform } from "redux-persist";
import storageWeb from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-community/async-storage";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { parse, stringify } from "flatted/esm";

const transformCircular = createTransform(
	(inboundState, key) => stringify(inboundState),
	(outboundState, key) => parse(outboundState)
);

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2,
	blacklist: ["business"],
	transforms: [transformCircular]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
