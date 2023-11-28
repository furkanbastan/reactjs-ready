import { Button } from "@/components-core/button";
import { Paragraph } from "@/components-core/paragraph";
import { Title } from "@/components-core/title";
import { CommentsSection } from "@/components/comments-section";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { postApi } from "@/stores/post-store";
import { commentApi } from "@/stores/comment-store";

function PostDetailPage() {
    const methods = useForm();
    const { postId } = useParams();
    const navigate = useNavigate();
    const queryGetPostDetail = postApi.useGetPostByIdQuery(postId);
    const [createComment, createCommentStates] =
        commentApi.useCreateCommentMutation();

    if (queryGetPostDetail.isError || createCommentStates.isError)
        return <div>Error</div>;

    if (queryGetPostDetail.isLoading) return <div>Loading</div>;

    const handleOnSubmitNewComment = (data) => {
        const payload = createComment(postId, data).unwrap();
        payload.then((v) => {
            alert("COMMENT ADDED !");
            navigate("/");
        });
    };

    return (
        <div className="post-detail-page">
            <Title align="end" weight="xl">
                {queryGetPostDetail.currentData.title}
            </Title>
            <div className="button-group">
                <Link to="edit">
                    <Button size="sm">Edit</Button>
                </Link>
                <Button
                    size="sm"
                    variant="danger"
                    onClick={() => alert("deleting...")}
                >
                    Delete
                </Button>
            </div>

            <Paragraph>{queryGetPostDetail.currentData.body}</Paragraph>

            <FormProvider {...methods}>
                <CommentsSection
                    onSubmit={methods.handleSubmit(handleOnSubmitNewComment)}
                    isLoadingNewComment={createCommentStates.isLoading}
                />
            </FormProvider>
        </div>
    );
}

export { PostDetailPage };
