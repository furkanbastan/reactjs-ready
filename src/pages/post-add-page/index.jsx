import { Title } from "@/components-core/title";
import { PostForm } from "@/components/post-form";
import { postApi } from "@/stores/post-store";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function PostAddPage() {
    const methods = useForm();
    const navigate = useNavigate();
    const [createPost, createPostStates] = postApi.useCreatePostMutation();

    if (createPostStates.isError) return <div>Error</div>;

    const handleOnSubmitAddPost = (data) => {
        const payload = createPost(data).unwrap();
        payload.then(() => {
            alert("POST ADDED ! SUCCESSİFULL");
            navigate("/");
        });
    };

    return (
        <div className="post-add-page">
            <Title weight="lg">Post Add Page</Title>
            <FormProvider {...methods}>
                <PostForm
                    onSubmit={handleOnSubmitAddPost}
                    isLoading={createPostStates.isLoading}
                />
            </FormProvider>
        </div>
    );
}

export { PostAddPage };
