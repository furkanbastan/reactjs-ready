import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/posts",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({ query: () => "" }),
        getPostById: builder.query({ query: (id) => `/${id}` }),
        getPostsByUserId: builder.query({
            query: (userId) => ({ url: "", params: { userId } }),
        }),
        createPost: builder.mutation({
            query: (body) => ({
                url: "",
                method: "POST",
                body: body,
            }),
        }),
        updatePost: builder.mutation({
            query: (id, body) => ({
                url: `/${id}`,
                method: "PUT",
                body: body,
            }),
        }),
    }),
});
