import { Title } from "@/components-core/title";
import * as S from "./styled";
import React from "react";
import { FormText } from "@/components-core/form-text";
import { INPUTS } from "./constants";
import { Button } from "@/components-core/button";
import { useParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { commentApi } from "@/stores/comment-store";

function CommentsSection({ onSubmit, isLoadingNewComment }) {
    const { postId } = useParams();
    const queryComments = commentApi.useGetCommentsByPostIdQuery(postId);
    const methods = useFormContext();

    if (queryComments.isError) return <div>Error..!!</div>;

    if (queryComments.isLoading) return <div>Loading..!!</div>;

    return (
        <S.CommentsSection>
            <Title as="h3" weight="xl">
                COMMENTS
            </Title>

            {queryComments.currentData.map((item) => (
                <S.CommentItem key={item.id}>
                    <S.CommentHeader>
                        <Title as="h5" weight="lg">
                            {item.name}
                        </Title>
                        <S.UserEmail>{item.email}</S.UserEmail>
                    </S.CommentHeader>
                    <S.CommentBody>{item.body}</S.CommentBody>
                </S.CommentItem>
            ))}

            <S.NewComment as="form" onSubmit={onSubmit}>
                <Title as="h4" weight="xl">
                    Add New Comment
                </Title>

                {INPUTS.map((item) => (
                    <FormText key={item.id} item={item} />
                ))}

                <input
                    type="hidden"
                    defaultValue={postId}
                    {...methods.register("postId")}
                />

                <Button
                    type="submit"
                    variant="success"
                    size="sm"
                    isLoading={isLoadingNewComment}
                >
                    SEND COMMENT
                </Button>
            </S.NewComment>
        </S.CommentsSection>
    );
}

export { CommentsSection };
