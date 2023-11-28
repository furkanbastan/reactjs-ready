import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "@/stores/post-store";
import { commentApi } from "@/stores/comment-store";

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(commentApi.middleware)
            .concat(postApi.middleware),
});
