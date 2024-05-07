import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
