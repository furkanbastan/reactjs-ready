import { Title } from "@/components-core/title";
import { PostForm } from "@/components/post-form";
import { postApi } from "@/stores/post-store";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function PostEditPage() {
    const { postId } = useParams();
    const methods = useForm();
    const navigate = useNavigate();
    const queryPost = postApi.useGetPostByIdQuery(postId);
    const [updatePost, updatePostStates] = postApi.useUpdatePostMutation();

    if (queryPost.isError || updatePostStates.isError) return <div>Error</div>;

    if (queryPost.isLoading) return <div>Loading</div>;

    const handleOnSubmitPostEdit = (data) => {
        const payload = updatePost(postId, data).unwrap();
        payload.then(() => {
            alert("SUCCESSİFULL SAVE CHANGES");
            navigate("/");
        });
    };

    return (
        <div className="post-edit-page">
            <Title as="h1" align="center" weight="lg">
                Post Edit Page
            </Title>
            <FormProvider {...methods}>
                <PostForm
                    post={queryPost.currentData}
                    onSubmit={handleOnSubmitPostEdit}
                    isLoading={updatePostStates.isLoading}
                />
            </FormProvider>
        </div>
    );
}

export { PostEditPage };
