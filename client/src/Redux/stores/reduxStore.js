import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistConfig } from "../../configurations/persist-config";
import { rootReducer } from "../rootReducer";
import serializableCheckMiddleware from "../../middlewares/serializableCheckMiddleware";

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(serializableCheckMiddleware), // Use the imported configuration
});
