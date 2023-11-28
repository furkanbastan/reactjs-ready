import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/comments",
    }),
    endpoints: (builder) => ({
        getCommentsByPostId: builder.query({
            query: (postId) => ({
                url: "",
                params: {
                    postId,
                },
            }),
        }),
        createComment: builder.mutation({
            query: (body) => ({
                url: "",
                body,
                method: "POST",
            }),
        }),
    }),
});
