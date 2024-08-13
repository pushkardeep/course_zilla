import persistStore from "redux-persist/es/persistStore";
import { reduxStore } from "./reduxStore";

export const persistor = persistStore(reduxStore);

