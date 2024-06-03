import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./BagSlice";

const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        bag: bagSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
    },
});

export default store;
