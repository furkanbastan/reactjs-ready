import { PostItem } from "@/components/post-item";
import React from "react";
import { postApi } from "@/stores/post-store";

function PostListPage() {
    const queryPosts = postApi.useGetPostsQuery();

    if (queryPosts.isError) return <div>Error</div>;

    if (queryPosts.isLoading) return <div>Loading</div>;

    return (
        <div className="post-list-page">
            {queryPosts.currentData.map((item) => (
                <PostItem key={item.id} post={item} />
            ))}
        </div>
    );
}

export { PostListPage };
